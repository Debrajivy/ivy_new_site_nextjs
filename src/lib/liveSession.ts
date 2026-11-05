import { bootcampRegisterUrl } from "@/data/bootcamps";

// Reads the next live session's title, date and time from the Google Form's share preview
// (og:title / og:description), e.g.
//   title:       "FREE Live Session: Build Your First AI Agent Live, No Heavy Coding"
//   description: "📅 Date: 4th November (Wednesday)\n⏰ Time: Class is Starting from 7 PM – 8 PM"

export interface LiveSession {
  title: string;
  dateLabel: string; // e.g. "Wednesday, 4 November 2026"
  timeLabel: string; // e.g. "7:00 PM – 8:00 PM IST"
  dateKey: string | null; // "2026-11-04" (IST), used to look up the recording
  startTime: number | null; // epoch ms
  endTime: number | null;
}

export type SessionStatus = "upcoming" | "live" | "ended";

export const getSessionStatus = (session: LiveSession, now: number): SessionStatus => {
  if (session.endTime !== null && now >= session.endTime) return "ended";
  if (session.startTime !== null && now >= session.startTime) return "live";
  return "upcoming";
};

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// Used when the form cannot be reached or read.
const fallbackSession: LiveSession = {
  title: "FREE Live Session: Build Your First AI Agent Live, No Heavy Coding",
  dateLabel: "Wednesday, 4 November 2026",
  timeLabel: "7:00 PM – 8:00 PM IST",
  dateKey: "2026-11-04",
  startTime: Date.UTC(2026, 10, 4, 19, 0) - IST_OFFSET_MS,
  endTime: Date.UTC(2026, 10, 4, 20, 0) - IST_OFFSET_MS,
};

const decodeEntities = (text: string) =>
  text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const readMeta = (html: string, property: string) => {
  const match = html.match(new RegExp(`<meta[^>]+property="${property}"[^>]+content="([^"]*)"`, "i"));
  return match ? decodeEntities(match[1]).trim() : "";
};

const to24Hour = (hour: number, meridiem: string) => {
  const isPm = meridiem.toUpperCase() === "PM";
  if (hour === 12) return isPm ? 12 : 0;
  return isPm ? hour + 12 : hour;
};

const formatTime = (hour24: number, minute: number) => {
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${hour24 < 12 ? "AM" : "PM"}`;
};

// The form gives the day and month without a year: pick the year that puts the date closest to today.
const resolveYear = (month: number, day: number, explicitYear?: number) => {
  if (explicitYear) return explicitYear;
  const now = Date.now();
  const thisYear = new Date(now + IST_OFFSET_MS).getUTCFullYear();
  const candidates = [thisYear - 1, thisYear, thisYear + 1];
  return candidates.reduce((best, year) =>
    Math.abs(Date.UTC(year, month, day) - now) < Math.abs(Date.UTC(best, month, day) - now) ? year : best
  );
};

export const parseSessionDescription = (description: string) => {
  const dateMatch = description.match(
    /(\d{1,2})(?:st|nd|rd|th)?\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?(?:,?\s+(\d{4}))?/i
  );
  const timeMatch = description.match(
    /(\d{1,2})(?:[:.](\d{2}))?\s*(am|pm)?\s*(?:–|—|-|to)\s*(\d{1,2})(?:[:.](\d{2}))?\s*(am|pm)/i
  );
  if (!dateMatch || !timeMatch) return null;

  const day = Number(dateMatch[1]);
  const month = MONTHS.indexOf(dateMatch[2].toLowerCase());
  const year = resolveYear(month, day, dateMatch[3] ? Number(dateMatch[3]) : undefined);

  const endMeridiem = timeMatch[6];
  const startHour = to24Hour(Number(timeMatch[1]), timeMatch[3] || endMeridiem);
  const startMinute = Number(timeMatch[2] || 0);
  const endHour = to24Hour(Number(timeMatch[4]), endMeridiem);
  const endMinute = Number(timeMatch[5] || 0);

  const startTime = Date.UTC(year, month, day, startHour, startMinute) - IST_OFFSET_MS;
  const endTime = Date.UTC(year, month, day, endHour, endMinute) - IST_OFFSET_MS;

  // Built from parts so the label reads the same on every server ("Wednesday, 4 November 2026").
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
      .formatToParts(startTime)
      .map((part) => [part.type, part.value])
  );

  return {
    dateLabel: `${parts.weekday}, ${parts.day} ${parts.month} ${parts.year}`,
    timeLabel: `${formatTime(startHour, startMinute)} – ${formatTime(endHour, endMinute)} IST`,
    dateKey: `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    startTime,
    endTime,
  };
};

export async function fetchLiveSession(): Promise<LiveSession> {
  try {
    const response = await fetch(bootcampRegisterUrl, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return fallbackSession;

    const html = await response.text();
    const title = readMeta(html, "og:title");
    if (!title) return fallbackSession;

    const description = readMeta(html, "og:description");
    const parsed = parseSessionDescription(description);
    if (parsed) return { title, ...parsed };

    // Title is still useful even if the date/time text could not be read.
    const lines = description.split("\n").map((line) => line.replace(/^[^A-Za-z0-9]*(date|time)\s*:\s*/i, "").trim());
    return {
      title,
      dateLabel: lines[0] || "",
      timeLabel: lines[1] || "",
      dateKey: null,
      startTime: null,
      endTime: null,
    };
  } catch {
    return fallbackSession;
  }
}
