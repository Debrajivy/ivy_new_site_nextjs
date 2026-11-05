import BootcampPageClient from "./bootcamp-page-client";
import { fetchLiveSession, getSessionStatus } from "@/lib/liveSession";

// Re-read the Google Form every 5 minutes so title/date/time changes show up without a deploy.
export const revalidate = 300;

export default async function BootcampPage() {
  const session = await fetchLiveSession();

  return <BootcampPageClient session={session} initialStatus={getSessionStatus(session, Date.now())} />;
}
