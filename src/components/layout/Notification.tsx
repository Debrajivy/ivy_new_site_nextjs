"use client";
import React, { useMemo, useState } from "react";
import {
  Bell, Sparkles, TrendingUp, Cloud, Copy, Check, X,
} from "lucide-react";

/* ════════════════════════════════════════════════════════════════════
   ANNOUNCEMENTS (unchanged)
   ════════════════════════════════════════════════════════════════════ */
const ANNOUNCEMENTS = [
  { icon: Sparkles, text: "HOT COURSES NOW: AI for Product Managers & Generative AI - Enroll Today!", color: "text-amber-300" },
  { icon: Bell, text: "Empower your workforce with AI & Data training — customized enterprise programs by Ivy Pro School", color: "text-white" },
  { icon: Bell, text: "Master No-Code AI for your Business: Free Intro Session by Ivy Pro this Sunday @ 10 AM!", color: "text-white" },
  { icon: TrendingUp, text: "New Trending AI Help Center is now LIVE to support your learning journey.", color: "text-green-300" },
  { icon: Cloud, text: "To see our upcoming contests, join us or call our helpline today!", color: "text-blue-300" },
];

type AnnouncementItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
};

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({ icon: Icon, text, color }) => (
  <div className="flex items-center space-x-3 mx-8 py-1 md:mx-12 lg:mx-16">
    <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
    <span className={`text-xs font-semibold tracking-wider uppercase ${color} transition-colors duration-8000 hover:text-white`}>
      {text}
    </span>
    <span className="text-gray-400 text-base mx-2">•</span>
  </div>
);

/* ════════════════════════════════════════════════════════════════════
   PROMPT LIBRARY DATA — all 72 prompts, RICI structure
   ════════════════════════════════════════════════════════════════════ */
type Color = "blue" | "orange";

type PromptItem = {
  id: string;
  fn: string;
  functionName: string;
  pillar: string;
  title: string;
  blurb: string;
  role: string;
  instruction: string;
  context: string;
  interview: string;
  color: Color;
};

const FUNCTIONS = [
  { id: "marketing", name: "Marketing", code: "MK", tag: "Plans, campaigns, creative, and reporting.", color: "orange" as Color },
  { id: "finance", name: "Finance", code: "FN", tag: "Forecasting, reporting, risk, and fundraising.", color: "blue" as Color },
  { id: "hr", name: "HR", code: "HR", tag: "Workforce planning, hiring, policy, and people analytics.", color: "orange" as Color },
  { id: "supply-chain", name: "Supply Chain", code: "SC", tag: "Demand planning, logistics, risk, and network analytics.", color: "blue" as Color },
  { id: "accounts", name: "Accounts", code: "AC", tag: "Bookkeeping, receivables/payables, statements, and audit.", color: "orange" as Color },
  { id: "procurement", name: "Procurement", code: "PR", tag: "Sourcing, supplier management, negotiation, and savings.", color: "blue" as Color },
];

const PROMPTS: PromptItem[] = [
  /* ───── MARKETING ───── */
  { id: "d-marketing-1", fn: "marketing", functionName: "Marketing", pillar: "Strategy & Planning", title: "Build a quarterly marketing plan", blurb: "A full-quarter plan with objectives, channels, calendar, and budget split.", role: "You are a senior marketing strategist advising a CMO.", instruction: "Build a quarterly marketing plan that includes: (1) the top 3 quarterly objectives tied to business goals, (2) the channel mix and rationale, (3) a month-by-month campaign calendar, (4) budget allocation by channel as a percentage, and (5) key metrics and targets for each objective. Present it as a structured plan a CMO could approve in one read.", context: "Company: [Company Name], industry: [industry], target audience: [target audience], time period: [quarter/year].", interview: "Before drafting the plan, ask me for our current marketing budget, last quarter's performance highlights, and this quarter's top business priorities. Don't proceed until you have this information.", color: "orange" },
  { id: "d-marketing-2", fn: "marketing", functionName: "Marketing", pillar: "Strategy & Planning", title: "Define brand positioning statement", blurb: "Three positioning options tested against your differentiators.", role: "You are a brand strategist.", instruction: "Draft 3 versions of a positioning statement using the format: 'For [target customer], [Brand] is the [category] that [key benefit], because [reason to believe].' Explain the trade-offs of each version and recommend one.", context: "Brand/Product: [Product/Brand Name].", interview: "Before drafting, ask me for our target customer, the category we compete in, our key differentiator, and the proof points that support it. Don't proceed until you have this information.", color: "orange" },
  { id: "d-marketing-3", fn: "marketing", functionName: "Marketing", pillar: "Strategy & Planning", title: "Set marketing budget allocation across channels", blurb: "A channel-by-channel budget split with rationale.", role: "You are a marketing finance partner.", instruction: "Recommend a channel allocation (e.g., paid search, paid social, content, events, partnerships) as percentages and dollar amounts, with a one-line rationale for each. Flag any allocation that looks unusually high or low against typical benchmarks for a company our size.", context: "Total marketing budget: [$amount] for [time period]. Industry: [industry].", interview: "Before recommending an allocation, ask me for our goals (e.g., demand generation, brand awareness) and last year's channel performance if available.", color: "orange" },
  { id: "d-marketing-4", fn: "marketing", functionName: "Marketing", pillar: "Content & Campaigns", title: "Draft a campaign brief", blurb: "A one-page brief a designer or agency can execute from.", role: "You are a campaign manager.", instruction: "Draft a one-page campaign brief including: objective, target audience, key message, primary channels, timeline, success metrics, and budget range. Keep it tight enough to fit on one page and written so a designer or agency could execute from it without further explanation.", context: "Campaign name/goal: [campaign name/goal]. Background: [paste campaign context].", interview: "Before drafting, ask me for the campaign's timeline and budget range if I haven't provided them.", color: "orange" },
  { id: "d-marketing-5", fn: "marketing", functionName: "Marketing", pillar: "Content & Campaigns", title: "Write a social media content calendar", blurb: "A 4-week calendar with post ideas, formats, and captions.", role: "You are a social media strategist.", instruction: "Build a 4-week content calendar. For each week, give 3-5 post ideas with: format (image, video, carousel, etc.), a draft caption, and a suggested posting day. Mix promotional, educational, and engagement-driven content in roughly a 20/60/20 ratio. Flag any post that depends on an asset we don't have yet.", context: "Platform(s): [platform(s)]. Product/topic: [product/topic]. Audience: [audience].", interview: "Before building the calendar, ask me about any upcoming launches, promotions, or events that should be reflected in this period.", color: "orange" },
  { id: "d-marketing-6", fn: "marketing", functionName: "Marketing", pillar: "Content & Campaigns", title: "Repurpose a webinar into multi-channel content", blurb: "One webinar turned into a blog post, social posts, scripts, and an email.", role: "You are a content strategist.", instruction: "Repurpose the webinar into: (1) a 400-word blog post, (2) 5 LinkedIn post ideas with hooks, (3) 3 short-form video scripts (under 60 seconds each), (4) an email to registrants who didn't attend. Keep the core insights intact and adapt tone to each channel.", context: "Webinar summary/transcript: [paste summary or transcript].", interview: "Before repurposing, ask me for the webinar transcript or summary if I haven't pasted it, and confirm the primary audience for this content.", color: "orange" },
  { id: "d-marketing-7", fn: "marketing", functionName: "Marketing", pillar: "Brand & Creative", title: "Create a brand voice guide", blurb: "Voice traits, do/don't language, and rewritten examples.", role: "You are a brand copywriter.", instruction: "Draft a one-page brand voice guide with: 3-4 voice traits (each with a 'we sound like this / not like this' example), a list of words/phrases we use and avoid, and 3 sample sentences rewritten in our voice from a generic version. Make it practical enough for any writer on the team to follow.", context: "Brand and audience description: [paste description].", interview: "Before drafting, ask me to describe our brand personality and audience if I haven't already.", color: "orange" },
  { id: "d-marketing-8", fn: "marketing", functionName: "Marketing", pillar: "Brand & Creative", title: "Write ad copy variations for A/B testing", blurb: "Eight headline and copy variations across different angles.", role: "You are a direct-response copywriter.", instruction: "Write 8 ad copy variations, each with a headline (under [X] characters) and primary text. Vary the angle across at least 3 approaches (e.g., pain point, social proof, curiosity, urgency) so we can test what resonates. Label each variation with the angle it uses.", context: "Product/offer: [product/offer]. Audience: [audience]. Platform: [platform].", interview: "Before writing, ask me for the platform's character limits and the offer's key benefit if I haven't specified them.", color: "orange" },
  { id: "d-marketing-9", fn: "marketing", functionName: "Marketing", pillar: "Brand & Creative", title: "Draft a product launch announcement", blurb: "A press-style announcement, customer email, and internal message.", role: "You are a product marketer.", instruction: "Draft: a press-release-style announcement (150-200 words), a customer-facing email, and a short internal Slack/Teams message for employees to share. Keep the tone consistent across all three.", context: "Product/feature: [product/feature name]. Launch date: [date]. Key details: [what it does, who it's for, why it matters, any launch offer]. Desired tone: [formal/casual].", interview: "Before drafting, ask me for the key details and desired tone if I haven't provided them.", color: "orange" },
  { id: "d-marketing-10", fn: "marketing", functionName: "Marketing", pillar: "Analytics & Reporting", title: "Analyze campaign performance data", blurb: "What worked, what didn't, and what to do next quarter.", role: "You are a marketing analyst.", instruction: "Analyze the data and tell me: (1) which channels/campaigns over- and under-performed against the goal metric, (2) likely reasons based on the data, (3) 3 specific, actionable recommendations for next quarter. Present findings in a short executive summary followed by supporting detail.", context: "Campaign performance data: [paste data/metrics]. Goal metric: [goal metric].", interview: "Before analyzing, ask me to confirm the goal metric and time period if they're not clear from the data.", color: "orange" },
  { id: "d-marketing-11", fn: "marketing", functionName: "Marketing", pillar: "Analytics & Reporting", title: "Build a competitor content audit", blurb: "A side-by-side view of competitor content and where you can win.", role: "You are a competitive intelligence analyst.", instruction: "Build a comparison table covering: content themes, channels used, posting frequency, and apparent target audience for each competitor. Then summarize 3 gaps or opportunities we could exploit that they haven't.", context: "Competitors: [list competitors]. Details/links on their recent content: [paste details or links].", interview: "Before building the audit, ask me which competitors matter most and what time period to cover.", color: "orange" },
  { id: "d-marketing-12", fn: "marketing", functionName: "Marketing", pillar: "Analytics & Reporting", title: "Turn marketing KPIs into an executive summary", blurb: "Raw metrics turned into a one-page board-ready update.", role: "You are a CMO preparing a board update.", instruction: "Turn the metrics into a one-page executive summary with: headline result, 3 supporting metrics with trend (up/down vs. prior period), one key win, one key risk, and next quarter's priority. Write for an audience of non-marketers who want the 'so what,' not the raw numbers.", context: "Marketing metrics for [period]: [paste metrics].", interview: "Before summarizing, ask me what the board cares most about this quarter if it's not obvious from the data.", color: "orange" },

  /* ───── FINANCE ───── */
  { id: "d-finance-1", fn: "finance", functionName: "Finance", pillar: "Planning & Forecasting", title: "Build a 12-month cash flow forecast", blurb: "Month-by-month inflows, outflows, and closing balance.", role: "You are a financial planning & analysis (FP&A) analyst.", instruction: "Lay out a month-by-month forecast showing opening balance, inflows, outflows, and closing balance, and flag any month where cash could run low.", context: "Company: [Company Name].", interview: "Before forecasting, ask me for our starting cash balance, expected monthly revenue, fixed costs, variable costs, and any known one-off inflows/outflows (financing, capex, tax). Don't proceed until you have this information.", color: "blue" },
  { id: "d-finance-2", fn: "finance", functionName: "Finance", pillar: "Planning & Forecasting", title: "Create a departmental budget template", blurb: "A ready-to-fill budget by cost category, with instructions.", role: "You are a finance business partner.", instruction: "Build a departmental budget template structured by cost category (headcount, software/tools, travel, marketing/program spend, contractors, other), with columns for prior year actuals, this year's budget, and notes/assumptions. Include a short set of instructions the department head can follow to fill it in.", context: "Department: [department name]. Period: [fiscal year/period].", interview: "Before building the template, ask me which cost categories are most relevant to this department if they differ from the standard set.", color: "blue" },
  { id: "d-finance-3", fn: "finance", functionName: "Finance", pillar: "Planning & Forecasting", title: "Model scenario planning for revenue shifts", blurb: "Base, downside, and upside cases for a key revenue driver.", role: "You are a financial modeler.", instruction: "Build a 3-scenario model (base case, downside, upside) for how a change in the revenue driver would affect our revenue and gross margin over the timeframe. Present the scenarios side by side with the key assumptions called out for each.", context: "Revenue driver: [e.g., customer churn, average deal size]. Change size: [X]%. Timeframe: [timeframe]. Baseline figures: [paste key figures].", interview: "Before modeling, ask me for our current baseline figures if I haven't provided them.", color: "blue" },
  { id: "d-finance-4", fn: "finance", functionName: "Finance", pillar: "Analysis & Reporting", title: "Turn financial statements into a board summary", blurb: "Income statement and balance sheet, summarized for non-accountants.", role: "You are a CFO preparing for a board meeting.", instruction: "Summarize the statements into a one-page board memo covering: revenue and margin trend, biggest driver of change vs. last period, cash and runway position, and 2-3 items the board should be aware of. Write for board members who are not accountants.", context: "Income statement and balance sheet for [period]: [paste statements].", interview: "Before summarizing, ask me what the board is most focused on this period (growth, runway, profitability) if it isn't clear.", color: "blue" },
  { id: "d-finance-5", fn: "finance", functionName: "Finance", pillar: "Analysis & Reporting", title: "Analyze variance between budget and actuals", blurb: "Where actuals diverged from budget, and likely why.", role: "You are an FP&A analyst.", instruction: "Identify the line items with the largest dollar and percentage variances, suggest likely causes based on the data and context provided, and flag which variances look like timing issues versus structural changes that should adjust next period's budget.", context: "Budgeted vs. actual figures for [period/department]: [paste data].", interview: "Before analyzing, ask me for any known one-off events (e.g., a delayed hire, an unplanned expense) that might explain variances.", color: "blue" },
  { id: "d-finance-6", fn: "finance", functionName: "Finance", pillar: "Analysis & Reporting", title: "Build a financial ratio analysis", blurb: "Key ratios calculated and benchmarked against your industry.", role: "You are a financial analyst.", instruction: "Calculate and interpret key ratios: gross margin, operating margin, current ratio, quick ratio, debt-to-equity, and return on equity. For each, state whether it looks healthy for a company our size and industry, and note the one ratio I should be most concerned about.", context: "Financial data: [paste income statement/balance sheet figures]. Industry: [industry].", interview: "Before calculating, ask me to confirm the reporting period and currency if not specified.", color: "blue" },
  { id: "d-finance-7", fn: "finance", functionName: "Finance", pillar: "Risk & Compliance", title: "Draft an internal financial controls checklist", blurb: "Controls for cash, expenses, payroll, and close, prioritized.", role: "You are an internal controls specialist.", instruction: "Draft a financial controls checklist covering: cash handling, expense approvals, payroll, vendor payments, and month-end close. For each area, list the key control we should have in place and a simple way to test whether it's working. Flag which controls are most critical to put in place first if we currently have none.", context: "Company size/stage: [company size/stage].", interview: "Before drafting, ask me which controls, if any, we already have in place.", color: "blue" },
  { id: "d-finance-8", fn: "finance", functionName: "Finance", pillar: "Risk & Compliance", title: "Summarize new accounting standard changes", blurb: "What a new standard means for your books, in plain language.", role: "You are an accounting advisor.", instruction: "Explain in plain language: what's changing, whether it applies to us, what data or process changes it would require, and a rough timeline for compliance. Avoid restating the full technical standard - focus on what we'd actually need to do.", context: "Accounting standard: [name of standard, e.g., a specific ASC/IFRS update]. Our company: [size, industry, revenue model].", interview: "Before summarizing, ask me for the specific standard name and effective date if I haven't provided them.", color: "blue" },
  { id: "d-finance-9", fn: "finance", functionName: "Finance", pillar: "Risk & Compliance", title: "Build a fraud risk assessment framework", blurb: "Red flags and controls across common fraud risk areas.", role: "You are a risk and controls consultant.", instruction: "Build a fraud risk assessment framework covering common risk areas: expense reimbursement, vendor/payment fraud, payroll fraud, and revenue recognition manipulation. For each area, list red flags to watch for, a control we could implement, and how frequently it should be reviewed. Present it as a table I can turn into a working checklist.", context: "Company: [Company Name/size/industry].", interview: "Before building the framework, ask me whether any of these risk areas have caused issues for us before.", color: "blue" },
  { id: "d-finance-10", fn: "finance", functionName: "Finance", pillar: "Fundraising & Investment", title: "Draft an investor update email", blurb: "A concise, honest monthly or quarterly update for investors.", role: "You are a startup CFO.", instruction: "Structure the email as: headline summary, key metrics (with trend vs. last period), 2-3 highlights, 1-2 challenges or asks, and what's next. Keep it concise, honest about challenges, and scannable in under 2 minutes.", context: "Company: [Company Name]. Period: [period]. Key metrics and context: [paste metrics, wins, challenges].", interview: "Before drafting, ask me for our key metrics and any specific asks for investors if I haven't provided them.", color: "blue" },
  { id: "d-finance-11", fn: "finance", functionName: "Finance", pillar: "Fundraising & Investment", title: "Build a business case for capital investment", blurb: "Cost, return, payback period, and risk for a proposed investment.", role: "You are a finance business partner.", instruction: "Include: the problem it solves, estimated cost (one-time and ongoing), expected financial or operational return, payback period, key assumptions, and risks if we don't invest. Structure it so a finance committee can approve or reject it based on this document alone.", context: "Proposed investment: [e.g., new equipment, software, hire].", interview: "Before building the case, ask me for the estimated cost and expected benefit if I haven't provided them.", color: "blue" },
  { id: "d-finance-12", fn: "finance", functionName: "Finance", pillar: "Fundraising & Investment", title: "Create a due diligence checklist", blurb: "What to request and ask across financial, legal, and operational review.", role: "You are an M&A/investment analyst.", instruction: "Organize the checklist into categories: financial, legal, commercial, operational, and team/culture. For each category, list the top 5 documents or data points to request and the key question each one should answer.", context: "Target: [a potential acquisition target / investment opportunity]. Industry: [industry].", interview: "Before building the checklist, ask me about the deal size and stage of the target company if relevant.", color: "blue" },

  /* ───── HR ───── */
  { id: "d-hr-1", fn: "hr", functionName: "HR", pillar: "Strategy & Workforce Planning", title: "Build a workforce planning model", blurb: "A role-by-role hiring plan, prioritized and costed.", role: "You are a strategic HR business partner.", instruction: "Produce a role-by-role hiring plan with recommended timing, rough cost estimate, and the business justification for each hire, prioritized by urgency.", context: "Department/company: [department/company]. Time period: [time period].", interview: "Before building the plan, ask me for current headcount by role, planned growth or attrition, and business priorities. Don't proceed until you have this information.", color: "orange" },
  { id: "d-hr-2", fn: "hr", functionName: "HR", pillar: "Strategy & Workforce Planning", title: "Define a compensation philosophy", blurb: "How you position pay, handle equity, and review compensation.", role: "You are a compensation and benefits consultant.", instruction: "Draft a compensation philosophy document covering: how we position pay against market (e.g., lead, match, lag), how we handle pay equity across roles and locations, how bonuses/equity fit in, and how often we review pay. Write it in plain language suitable for sharing with employees, not just HR.", context: "Company: [Company Name], size/stage: [size/stage], industry: [industry].", interview: "Before drafting, ask me how we currently position pay against market if we already have an informal approach.", color: "orange" },
  { id: "d-hr-3", fn: "hr", functionName: "HR", pillar: "Strategy & Workforce Planning", title: "Turn HR OKRs into a leadership narrative", blurb: "Progress, risks, and asks, written for non-HR executives.", role: "You are a Chief People Officer preparing for a leadership meeting.", instruction: "Turn the OKRs into a narrative leadership update covering: what we set out to do, where we stand, what's working, what's at risk, and what we need from leadership to stay on track. Keep it to one page and written for a non-HR executive audience.", context: "HR OKRs and current progress: [paste OKRs/data].", interview: "Before drafting, ask me what leadership is most concerned about right now if it's not evident from the data.", color: "orange" },
  { id: "d-hr-4", fn: "hr", functionName: "HR", pillar: "Talent Acquisition", title: "Write a structured interview scorecard", blurb: "Behavioral questions and a rating rubric for consistent hiring.", role: "You are a talent acquisition partner.", instruction: "For each competency, provide 2 behavioral interview questions and a 1-5 rating rubric describing what a 1, 3, and 5 response looks like, so interviewers can score consistently.", context: "Role: [job title]. Must-have skills and competencies: [list them].", interview: "Before building the scorecard, ask me for the must-have competencies if I haven't listed them.", color: "orange" },
  { id: "d-hr-5", fn: "hr", functionName: "HR", pillar: "Talent Acquisition", title: "Draft a candidate rejection email", blurb: "A warm, specific rejection that protects candidate experience.", role: "You are a recruiter who cares about candidate experience.", instruction: "Draft a rejection email that is warm, specific enough not to feel like a form letter, and leaves the door open for future roles if appropriate. Keep it under 150 words.", context: "Role: [job title] at [Company Name]. Stage reached: [reached final-round interview / applied but wasn't shortlisted - specify which].", interview: "Before drafting, ask me how far the candidate got in the process if I haven't specified it, since that changes the tone.", color: "orange" },
  { id: "d-hr-6", fn: "hr", functionName: "HR", pillar: "Talent Acquisition", title: "Rewrite a job description to attract diverse talent", blurb: "Bias removed, requirements right-sized, inclusion signaled.", role: "You are a talent acquisition specialist focused on inclusive hiring.", instruction: "Rewrite the job description to: remove biased or exclusionary language, replace inflated requirements with the true must-haves versus nice-to-haves, and add a line about our commitment to an inclusive hiring process. Explain each significant change you made and why.", context: "Current job description: [paste job description].", interview: "Before rewriting, ask me to paste the current job description if I haven't already.", color: "orange" },
  { id: "d-hr-7", fn: "hr", functionName: "HR", pillar: "Programs & Policies", title: "Design a 30-60-90 day onboarding plan", blurb: "Goals, people, and milestones for a new hire's first three months.", role: "You are an HR onboarding specialist.", instruction: "For each phase (30/60/90 days), list: key goals, people they should meet, training or resources needed, and a milestone that shows they're on track. Make it specific enough for the hiring manager to execute without extra guidance from HR.", context: "Role: [job title]. Team: [department/team].", interview: "Before building the plan, ask me about any team-specific tools or processes the new hire will need to learn.", color: "orange" },
  { id: "d-hr-8", fn: "hr", functionName: "HR", pillar: "Programs & Policies", title: "Draft a hybrid work policy", blurb: "Clear expectations on in-office days, exceptions, and review.", role: "You are an HR policy writer.", instruction: "Cover: eligibility, core in-office days vs. flexible days, expectations for remote days, how exceptions are requested, and how the policy will be reviewed. Write it in clear, friendly language - not legalese - and flag any section that likely needs legal review.", context: "Company: [Company Name]. Expected in-office days: [X] days per week.", interview: "Before drafting, ask me whether the policy needs to vary by role or location.", color: "orange" },
  { id: "d-hr-9", fn: "hr", functionName: "HR", pillar: "Programs & Policies", title: "Build a manager enablement toolkit", blurb: "1:1 guides, feedback templates, and a new-manager checklist.", role: "You are a people development consultant.", instruction: "Include: a one-page guide on running effective 1:1s, a template for giving difficult feedback, a checklist for a new manager's first 30 days, and 5 common pitfalls new managers face with a tip for each. Keep each piece short enough to be used, not just read once.", context: "Company: [Company Name].", interview: "Before building the toolkit, ask me what challenges our first-time managers currently struggle with most.", color: "orange" },
  { id: "d-hr-10", fn: "hr", functionName: "HR", pillar: "People Analytics", title: "Analyze exit interview themes", blurb: "Recurring reasons people leave, and what to do about them.", role: "You are a people analytics specialist.", instruction: "Identify the top 3-5 recurring themes behind why people are leaving, note which themes appear tied to a specific team/manager/tenure pattern if the data suggests one, and recommend 2-3 actions leadership could take in response.", context: "Exit interview notes: [paste notes].", interview: "Before analyzing, ask me for the time period the notes cover and whether any team is of particular concern.", color: "orange" },
  { id: "d-hr-11", fn: "hr", functionName: "HR", pillar: "People Analytics", title: "Build an employee survey question set", blurb: "Scale and open-ended questions that measure one thing at a time.", role: "You are a people analytics/employee listening specialist.", instruction: "Build a survey with a set of questions using a mix of 5-point scale statements and 1-2 open-ended questions. For each scale question, make sure it's written to measure one thing clearly, not two things at once.", context: "Survey type: [pulse/annual]. Themes to cover: [list themes, e.g., manager relationship, growth, workload, belonging]. Number of questions: [X].", interview: "Before building the survey, ask me which themes matter most this cycle if I haven't listed them.", color: "orange" },
  { id: "d-hr-12", fn: "hr", functionName: "HR", pillar: "People Analytics", title: "Turn engagement survey data into an action plan", blurb: "Lowest-scoring areas paired with one owned action each.", role: "You are an HR analytics consultant.", instruction: "Identify the 3 lowest-scoring areas, summarize what the open-text comments suggest is driving each, and propose one concrete, owner-assigned action per area that could realistically be completed in the next quarter.", context: "Engagement survey results: [paste scores/comments by category].", interview: "Before analyzing, ask me who the likely owners are for each action area (e.g., a specific team or manager).", color: "orange" },

  /* ───── SUPPLY CHAIN ───── */
  { id: "d-supply-chain-1", fn: "supply-chain", functionName: "Supply Chain", pillar: "Planning & Demand", title: "Build a demand forecasting model", blurb: "A forecasting approach fit to your data, with uncertainty flagged.", role: "You are a demand planning analyst.", instruction: "Walk me through a forecasting approach appropriate for our data (e.g., moving average, seasonal adjustment) and show how to apply it, flagging where forecast uncertainty is highest.", context: "Product/product line: [product/product line]. Timeframe: [timeframe].", interview: "Before forecasting, ask me for historical sales data, seasonality patterns, and any known upcoming events (promotions, launches, market changes). Don't proceed until you have this information.", color: "blue" },
  { id: "d-supply-chain-2", fn: "supply-chain", functionName: "Supply Chain", pillar: "Planning & Demand", title: "Create a sales and operations planning (S&OP) agenda", blurb: "A decision-focused monthly agenda with clear pre-work.", role: "You are an S&OP process lead.", instruction: "Build a monthly S&OP meeting agenda and pre-read template with sections for: demand review, supply review, gaps/risks to flag, and decisions needed from leadership. For each section, specify what data should be prepared in advance and by whom.", context: "Company: [Company Name].", interview: "Before building the agenda, ask me who typically attends this meeting and what decisions it's meant to drive.", color: "blue" },
  { id: "d-supply-chain-3", fn: "supply-chain", functionName: "Supply Chain", pillar: "Planning & Demand", title: "Draft an inventory optimization plan", blurb: "Safety stock and reorder points for your top SKUs.", role: "You are an inventory management consultant.", instruction: "Recommend target safety stock and reorder points for our top SKUs, explain the logic behind the recommendation, and flag any SKUs that look significantly over- or under-stocked relative to their demand pattern.", context: "Product category: [product category]. Current inventory levels, lead times, and demand variability: [paste data].", interview: "Before recommending, ask me for our current inventory data if I haven't pasted it.", color: "blue" },
  { id: "d-supply-chain-4", fn: "supply-chain", functionName: "Supply Chain", pillar: "Logistics & Operations", title: "Design a warehouse layout optimization brief", blurb: "Specific layout changes to cut pick time and travel.", role: "You are a warehouse operations consultant.", instruction: "Draft a brief proposing layout improvements to reduce pick times and travel distance. Include: 2-3 specific changes, the rationale for each (e.g., slotting fast-movers near shipping), and rough implementation effort (low/medium/high).", context: "Current warehouse layout and pain points: [paste description].", interview: "Before drafting, ask me to describe the current layout and biggest pain points if I haven't already.", color: "blue" },
  { id: "d-supply-chain-5", fn: "supply-chain", functionName: "Supply Chain", pillar: "Logistics & Operations", title: "Build a route optimization analysis", blurb: "Where routes are inefficient, and how to fix them.", role: "You are a logistics analyst.", instruction: "Analyze where routes look inefficient (e.g., excessive backtracking, uneven stop distribution), and recommend 2-3 changes to reduce total miles or delivery windows. Note what additional data would sharpen the analysis.", context: "Current delivery routes, stop counts, and average delivery times: [paste data].", interview: "Before analyzing, ask me for our route data if I haven't pasted it.", color: "blue" },
  { id: "d-supply-chain-6", fn: "supply-chain", functionName: "Supply Chain", pillar: "Logistics & Operations", title: "Draft a carrier performance scorecard", blurb: "On-time rate, damage rate, cost, and responsiveness, tracked monthly.", role: "You are a logistics procurement specialist.", instruction: "Build a carrier performance scorecard template evaluating carriers on: on-time delivery rate, damage/claims rate, cost per shipment, and responsiveness. For each metric, suggest a target benchmark and how frequently it should be reviewed. Format it so it can be filled in monthly per carrier.", context: "Carriers we use: [list carriers, if relevant].", interview: "Before building the scorecard, ask me which metrics matter most to us if our priorities differ from the standard set.", color: "blue" },
  { id: "d-supply-chain-7", fn: "supply-chain", functionName: "Supply Chain", pillar: "Risk & Resilience", title: "Build a supply chain risk assessment", blurb: "Likelihood, impact, and mitigation for your top supply risks.", role: "You are a supply chain risk manager.", instruction: "Build a risk assessment covering: single-source supplier dependency, geographic/geopolitical exposure, transportation disruption, and demand volatility. For each risk category, rate likelihood and impact (low/medium/high), and suggest one mitigation action.", context: "Supplier base and regions: [paste supplier/region details].", interview: "Before assessing, ask me for details on our supplier base and regions if I haven't provided them.", color: "blue" },
  { id: "d-supply-chain-8", fn: "supply-chain", functionName: "Supply Chain", pillar: "Risk & Resilience", title: "Draft a business continuity plan for key suppliers", blurb: "Backup options and an escalation plan if a supplier fails.", role: "You are a supply chain resilience consultant.", instruction: "Cover: early warning indicators of disruption, backup supplier options or alternatives, minimum inventory buffer recommendations, and an internal escalation process if the supplier fails to deliver. Keep it actionable enough for the procurement team to execute under time pressure.", context: "Key supplier/supplier category: [key supplier/supplier category].", interview: "Before drafting, ask me whether we already have backup suppliers identified for this category.", color: "blue" },
  { id: "d-supply-chain-9", fn: "supply-chain", functionName: "Supply Chain", pillar: "Risk & Resilience", title: "Create a supplier diversification strategy", blurb: "A phased plan to reduce reliance on one supplier or region.", role: "You are a strategic sourcing consultant.", instruction: "Build a supplier diversification strategy that identifies criteria for evaluating alternative suppliers (cost, quality, lead time, geographic risk), a phased approach to onboarding 1-2 new suppliers without disrupting current operations, and the risks of moving too fast versus too slow.", context: "Current reliance: [supplier/region] for [category].", interview: "Before building the strategy, ask me about our current contract terms and switching costs with the existing supplier.", color: "blue" },
  { id: "d-supply-chain-10", fn: "supply-chain", functionName: "Supply Chain", pillar: "Analytics & Reporting", title: "Analyze supply chain KPIs for leadership", blurb: "What improved, what declined, and what to focus on next.", role: "You are a supply chain analytics lead.", instruction: "Summarize performance in an executive-ready format: what improved, what declined, the likely driver behind each significant change, and the single metric leadership should focus on next quarter.", context: "KPI data for [period]: [paste metrics like OTIF, inventory turns, cost per unit].", interview: "Before summarizing, ask me what leadership's top supply chain priority is this quarter if it's not clear from the data.", color: "blue" },
  { id: "d-supply-chain-11", fn: "supply-chain", functionName: "Supply Chain", pillar: "Analytics & Reporting", title: "Build an on-time-in-full (OTIF) dashboard brief", blurb: "The metrics, segments, and alert thresholds an OTIF dashboard needs.", role: "You are a supply chain reporting analyst.", instruction: "Specify: the key metrics to include, how OTIF should be calculated and segmented (by customer, region, or product line), suggested visualizations for each metric, and what threshold should trigger an alert.", context: "Company: [Company Name].", interview: "Before designing, ask me how we currently track OTIF, if at all, so we build on what exists.", color: "blue" },
  { id: "d-supply-chain-12", fn: "supply-chain", functionName: "Supply Chain", pillar: "Analytics & Reporting", title: "Turn logistics costs into a cost-to-serve analysis", blurb: "Which customer segments are actually profitable to serve.", role: "You are a supply chain finance analyst.", instruction: "Build a cost-to-serve analysis that shows which segments are most and least profitable to serve, and recommend 2 actions to improve margin on the least profitable segment without hurting service levels.", context: "Logistics and fulfillment costs broken down by [customer segment/region/channel]: [paste data].", interview: "Before analyzing, ask me for our cost data broken down by segment if I haven't pasted it.", color: "blue" },

  /* ───── ACCOUNTS ───── */
  { id: "d-accounts-1", fn: "accounts", functionName: "Accounts", pillar: "Bookkeeping & Reconciliation", title: "Build a month-end close checklist", blurb: "A day-by-day close process with automation opportunities flagged.", role: "You are a controller.", instruction: "Build a month-end close checklist covering: revenue and expense cutoffs, accruals, bank and credit card reconciliations, intercompany entries (if applicable), and review/sign-off steps. Organize it by day so the close can be completed within [X] business days, and flag which steps could be automated.", context: "Company: [Company Name].", interview: "Before building the checklist, ask me how many business days our close currently takes and where the biggest delays happen.", color: "orange" },
  { id: "d-accounts-2", fn: "accounts", functionName: "Accounts", pillar: "Bookkeeping & Reconciliation", title: "Draft a bank reconciliation process", blurb: "A repeatable, step-by-step reconciliation with sign-off.", role: "You are a bookkeeping specialist.", instruction: "Draft a step-by-step bank reconciliation process. Include: the order of steps, how to handle common discrepancies (timing differences, bank fees, unrecorded transactions), and a sign-off step to confirm the reconciliation is complete and accurate.", context: "Company: [Company Name].", interview: "Before drafting, ask me which accounting system or bank feed we use, if relevant to the process.", color: "orange" },
  { id: "d-accounts-3", fn: "accounts", functionName: "Accounts", pillar: "Bookkeeping & Reconciliation", title: "Create a chart of accounts structure", blurb: "A clean account structure sized right for your business.", role: "You are an accounting systems consultant.", instruction: "Build a chart of accounts structure organized into standard categories (assets, liabilities, equity, revenue, cost of goods sold, operating expenses) with example account names and numbering convention under each. Keep it detailed enough for accurate reporting but not so granular it becomes unmanageable.", context: "Industry: [industry]. Company size/stage: [size/stage].", interview: "Before building the structure, ask me if we have any existing chart of accounts or specific reporting needs to preserve.", color: "orange" },
  { id: "d-accounts-4", fn: "accounts", functionName: "Accounts", pillar: "Payables & Receivables", title: "Draft an accounts receivable aging follow-up email", blurb: "Three follow-ups, from friendly reminder to final notice.", role: "You are a credit control/AR specialist.", instruction: "Draft a set of 3 follow-up emails for overdue invoices: one for an invoice 15 days overdue (friendly reminder), one for 30 days overdue (firmer tone), and one for 60+ days overdue (final notice before escalation). Include placeholders for invoice number, amount, and due date, and keep the tone professional, not aggressive, at every stage.", context: "Company: [Company Name].", interview: "Before drafting, ask me if there's an existing escalation policy (e.g., when accounts go to collections) that these emails should align with.", color: "orange" },
  { id: "d-accounts-5", fn: "accounts", functionName: "Accounts", pillar: "Payables & Receivables", title: "Build a vendor payment approval workflow", blurb: "Approval thresholds, owners, and turnaround times by amount.", role: "You are a finance operations consultant.", instruction: "Design a vendor payment approval workflow that balances control with speed. Specify: approval thresholds by dollar amount, who approves at each threshold, required documentation (PO, invoice, receipt matching), and the maximum time each stage should take. Flag any single point of failure in the process.", context: "Company: [Company Name].", interview: "Before designing, ask me about our current approval process and typical payment volumes so the thresholds are realistic.", color: "orange" },
  { id: "d-accounts-6", fn: "accounts", functionName: "Accounts", pillar: "Payables & Receivables", title: "Create a credit control policy", blurb: "Credit limits, terms, and escalation, aligned across finance and sales.", role: "You are a credit control manager.", instruction: "Draft a credit control policy covering: how customer credit limits are set and reviewed, payment terms we offer, the escalation process for late payments, and criteria for putting an account on hold. Write it so both the finance team and sales team can reference the same document without conflicting expectations.", context: "Company: [Company Name].", interview: "Before drafting, ask me what payment terms we currently offer and whether sales has flagged any tension with existing credit practices.", color: "orange" },
  { id: "d-accounts-7", fn: "accounts", functionName: "Accounts", pillar: "Reporting & Statements", title: "Turn trial balance into a management report", blurb: "A summarized P&L and balance sheet with commentary.", role: "You are a management accountant.", instruction: "Turn the trial balance into a management report with a summarized P&L and balance sheet, a brief commentary on the 3 biggest movements versus the prior period, and any unusual balances that should be investigated before the books are finalized.", context: "Trial balance for [period]: [paste data].", interview: "Before reporting, ask me for the prior period's figures if you need them for comparison and I haven't provided them.", color: "orange" },
  { id: "d-accounts-8", fn: "accounts", functionName: "Accounts", pillar: "Reporting & Statements", title: "Draft notes to financial statements", blurb: "Standard notes covering policies and events after period-end.", role: "You are a financial reporting accountant.", instruction: "Draft standard notes covering: basis of preparation, significant accounting policies (revenue recognition, inventory valuation, depreciation - specify which apply), and any material events after the reporting period. Write in clear, precise language appropriate for external readers, and flag which notes should be reviewed by our auditor.", context: "Reporting period: [period].", interview: "Before drafting, ask me which accounting policies actually apply to our business if I haven't specified them.", color: "orange" },
  { id: "d-accounts-9", fn: "accounts", functionName: "Accounts", pillar: "Reporting & Statements", title: "Build a cash position summary", blurb: "A weekly view of cash in, cash out, and closing balance.", role: "You are a treasury/finance analyst.", instruction: "Build a weekly cash position summary showing opening balance, expected inflows, expected outflows, and closing balance for each week, and flag any week where the balance could go negative.", context: "Time horizon: next [X] weeks.", interview: "Before building the summary, ask me for our bank balances, expected receipts, and expected payments if I haven't provided them.", color: "orange" },
  { id: "d-accounts-10", fn: "accounts", functionName: "Accounts", pillar: "Audit & Compliance", title: "Build an internal audit checklist", blurb: "What to test and what evidence to request, cycle by cycle.", role: "You are an internal auditor.", instruction: "For each control point in the process cycle, list what should be tested, the evidence to request, and what a pass versus fail looks like. Structure it so a junior team member could execute the audit using this checklist alone.", context: "Process cycle: [procure-to-pay / payroll / revenue - specify]. Company: [Company Name].", interview: "Before building the checklist, ask me which process cycle to focus on if I haven't specified it.", color: "orange" },
  { id: "d-accounts-11", fn: "accounts", functionName: "Accounts", pillar: "Audit & Compliance", title: "Draft a year-end audit prep plan", blurb: "A week-by-week plan to get ahead of your external audit.", role: "You are a controller preparing for an external audit.", instruction: "Build a year-end audit prep plan covering the weeks before the auditors arrive. Include: schedules and reconciliations to prepare in advance, documents the auditor will likely request, common audit findings to get ahead of, and a week-by-week timeline with an owner for each task.", context: "Time before auditors arrive: [X] weeks.", interview: "Before building the plan, ask me whether this is our first audit or a recurring one, since that changes what to prepare for.", color: "orange" },
  { id: "d-accounts-12", fn: "accounts", functionName: "Accounts", pillar: "Audit & Compliance", title: "Summarize tax compliance requirements", blurb: "Deadlines, filings, and common mistakes, by jurisdiction.", role: "You are a tax compliance advisor.", instruction: "Summarize the key compliance requirements. Cover: filing deadlines, what needs to be reported, common mistakes companies make, and a simple compliance calendar we could follow. Note where I should confirm details with a local tax professional rather than relying on this summary alone.", context: "Tax type: [corporate income tax / sales tax / payroll tax - specify]. Jurisdiction(s): [jurisdiction(s)].", interview: "Before summarizing, ask me to confirm the tax type and jurisdiction if I haven't specified them precisely.", color: "orange" },

  /* ───── PROCUREMENT ───── */
  { id: "d-procurement-1", fn: "procurement", functionName: "Procurement", pillar: "Sourcing Strategy", title: "Build a category sourcing strategy", blurb: "The right sourcing approach and selection criteria for a category.", role: "You are a strategic sourcing manager.", instruction: "Build a sourcing strategy covering: current spend and supplier landscape, sourcing approach recommendation (single-source, multi-source, or competitive bid), and the key criteria we should weight in supplier selection for this category.", context: "Category: [e.g., IT hardware, packaging, raw materials]. Supplier landscape details: [paste details].", interview: "Before building the strategy, ask me for our current spend and supplier landscape if I haven't provided them.", color: "blue" },
  { id: "d-procurement-2", fn: "procurement", functionName: "Procurement", pillar: "Sourcing Strategy", title: "Draft a make-vs-buy analysis", blurb: "In-house versus outsourced, compared on cost, quality, and risk.", role: "You are a procurement strategy consultant.", instruction: "Compare the cost, quality control, lead time, and risk implications of producing it in-house versus outsourcing to a supplier. Conclude with a recommendation and the key assumption that, if wrong, would flip the decision.", context: "Item: [product/component/service]. Estimated figures: [paste cost/capacity data].", interview: "Before analyzing, ask me for our current cost and capacity data if I haven't provided estimates.", color: "blue" },
  { id: "d-procurement-3", fn: "procurement", functionName: "Procurement", pillar: "Sourcing Strategy", title: "Create a supplier segmentation model", blurb: "Suppliers grouped by strategic importance, each managed differently.", role: "You are a procurement strategist.", instruction: "Build a supplier segmentation model (e.g., strategic, leverage, bottleneck, non-critical - or a similar framework), and explain how each segment should be managed differently (relationship depth, negotiation approach, review frequency).", context: "Our current supplier base: [describe if relevant].", interview: "Before segmenting, ask me for spend and risk data per supplier if I haven't provided it.", color: "blue" },
  { id: "d-procurement-4", fn: "procurement", functionName: "Procurement", pillar: "Supplier Management", title: "Draft a supplier performance scorecard", blurb: "Quality, delivery, cost, and responsiveness, scored consistently.", role: "You are a supplier relationship manager.", instruction: "Build a supplier performance scorecard evaluating on: quality (defect/reject rate), delivery (on-time %), cost (price competitiveness/cost trend), and responsiveness. Suggest a scoring method (e.g., weighted 1-5 scale) and a review cadence, and note what score should trigger a formal improvement conversation.", context: "Supplier/supplier category: [supplier/supplier category].", interview: "Before building the scorecard, ask me which of these criteria matter most for this supplier relationship.", color: "blue" },
  { id: "d-procurement-5", fn: "procurement", functionName: "Procurement", pillar: "Supplier Management", title: "Build a supplier onboarding checklist", blurb: "Due diligence, documentation, and setup, owned by the right team.", role: "You are a procurement operations specialist.", instruction: "Build a new supplier onboarding checklist covering: due diligence (financial health, certifications, references), contract and compliance documentation, system setup (vendor master data, payment terms), and a first-90-days check-in. Organize it so procurement, finance, and legal each know their part.", context: "Company: [Company Name].", interview: "Before building the checklist, ask me which certifications or compliance requirements are mandatory in our industry.", color: "blue" },
  { id: "d-procurement-6", fn: "procurement", functionName: "Procurement", pillar: "Supplier Management", title: "Create a vendor risk assessment", blurb: "Financial, security, compliance, and continuity risk, scored per vendor.", role: "You are a third-party risk analyst.", instruction: "Build a vendor risk assessment framework covering risk areas: financial stability, cybersecurity/data handling (if applicable), regulatory/compliance, and business continuity/geographic risk. For each area, list 2-3 questions to ask the vendor and how to score the response.", context: "Supplier/category: [supplier/category].", interview: "Before building the framework, ask me whether this vendor will have access to sensitive data or systems, since that changes what to prioritize.", color: "blue" },
  { id: "d-procurement-7", fn: "procurement", functionName: "Procurement", pillar: "Negotiation & Contracts", title: "Draft contract negotiation talking points", blurb: "Opening position, concessions, and responses to likely objections.", role: "You are a procurement negotiation coach.", instruction: "Draft a set of talking points for the negotiation, including our opening position, our walk-away point, 2-3 concessions we could offer in exchange for something we want, and anticipated objections with responses.", context: "Supplier: [supplier name]. Product/service: [product/service]. Our priorities: [list priorities, e.g., price, payment terms, exclusivity].", interview: "Before drafting, ask me for our priorities and walk-away point if I haven't specified them.", color: "blue" },
  { id: "d-procurement-8", fn: "procurement", functionName: "Procurement", pillar: "Negotiation & Contracts", title: "Build a negotiation preparation brief", blurb: "Their priorities, your BATNA, and a target-to-acceptable range.", role: "You are a category manager preparing for a supplier negotiation.", instruction: "Include: our current spend and contract terms with them, their likely priorities and constraints, our BATNA (best alternative), and a target versus acceptable outcome range for the top 3 negotiable terms.", context: "Supplier: [supplier name]. Additional context: [paste context].", interview: "Before building the brief, ask me for our current spend and contract terms with this supplier if I haven't provided them.", color: "blue" },
  { id: "d-procurement-9", fn: "procurement", functionName: "Procurement", pillar: "Negotiation & Contracts", title: "Create a contract renewal checklist", blurb: "What to review and renegotiate before a contract auto-renews.", role: "You are a contracts manager.", instruction: "Build a contract renewal checklist to use before a supplier contract expires. Include: performance review against the current contract, market/pricing check against alternatives, terms we should try to renegotiate, and internal sign-offs needed before renewal. Flag the point at which we should start this process to avoid an auto-renewal we didn't intend.", context: "Days before contract expiry: [X] days.", interview: "Before building the checklist, ask me when the current contract expires and whether it has an auto-renewal clause.", color: "blue" },
  { id: "d-procurement-10", fn: "procurement", functionName: "Procurement", pillar: "Cost & Savings", title: "Build a cost savings tracking report", blurb: "Hard and soft savings, tracked by initiative and category.", role: "You are a procurement analyst.", instruction: "Build a cost savings tracking report template that captures: initiative name, category, baseline cost, negotiated/new cost, annualized savings, and whether the savings is 'hard' (realized in P&L) or 'soft' (cost avoidance). Include a summary section that rolls up total savings by category for a quarterly business review.", context: "Company: [Company Name].", interview: "Before building the report, ask me whether finance has a preferred way of validating 'hard' vs. 'soft' savings, so the template aligns.", color: "blue" },
  { id: "d-procurement-11", fn: "procurement", functionName: "Procurement", pillar: "Cost & Savings", title: "Draft a should-cost analysis", blurb: "A bottom-up cost estimate to compare against a supplier's quote.", role: "You are a cost engineering/procurement analyst.", instruction: "Break the cost down into: raw materials, labor, overhead, and margin, using industry-typical assumptions if exact figures aren't provided. Compare this should-cost estimate to the price currently quoted and identify the biggest gap to probe with the supplier.", context: "Product/component: [product/component]. Currently quoted price: [price, if known].", interview: "Before analyzing, ask me for the currently quoted price and any known cost breakdowns if I haven't provided them.", color: "blue" },
  { id: "d-procurement-12", fn: "procurement", functionName: "Procurement", pillar: "Cost & Savings", title: "Turn procurement spend into a category spend analysis", blurb: "Top categories, supplier concentration, and consolidation candidates.", role: "You are a procurement analytics specialist.", instruction: "Build a spend analysis that shows: top categories by spend, supplier concentration per category (how many suppliers account for 80% of spend), and 2-3 categories that look like good candidates for consolidation or renegotiation.", context: "Spend data by supplier and category for [period]: [paste data].", interview: "Before analyzing, ask me for our spend data if I haven't pasted it.", color: "blue" },
];

/* ════════════════════════════════════════════════════════════════════
   RICI BLOCK
   ════════════════════════════════════════════════════════════════════ */
function RiciBlock({
  label, text, variant, dotColor,
}: {
  label: string;
  text: string;
  variant: "role" | "context" | "interview" | "default";
  dotColor: string;
}) {
  const bg =
    variant === "role" || variant === "context"
      ? "bg-[#E9F4FC]"
      : variant === "interview"
      ? "bg-[#FDF3DF]"
      : "bg-white";

  return (
    <div className={`px-5 py-5 border-b border-[#DCE7EF] last:border-b-0 ${bg}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: dotColor }} />
        <span className="text-[13px] font-semibold text-[#122539]">{label}</span>
      </div>
      <pre className="font-mono text-[13px] leading-relaxed text-[#122539] whitespace-pre-wrap m-0">
        {text}
      </pre>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PROMPT LIBRARY MODAL
   ════════════════════════════════════════════════════════════════════ */
function PromptLibraryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedFn, setSelectedFn] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);
  const [copied, setCopied] = useState(false);

  const promptsForFn = useMemo(
    () => (selectedFn ? PROMPTS.filter((p) => p.fn === selectedFn) : []),
    [selectedFn]
  );

  const fullPrompt = (p: PromptItem) =>
    `Role: ${p.role}\n\nInstruction: ${p.instruction}\n\nContext: ${p.context}\n\nInterview me: ${p.interview}`;

  const handleCopy = async (p: PromptItem) => {
    try {
      await navigator.clipboard.writeText(fullPrompt(p));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  const reset = () => {
    setSelectedFn(null);
    setSelectedPrompt(null);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 250);
  };

  if (!isOpen) return null;

  const colorOf = (c: Color) => (c === "blue" ? "#008BDC" : "#F2AB15");

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-[rgba(10,25,40,0.6)] backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-[1020px] max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-[#DCE7EF] flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex w-8 h-1 rounded overflow-hidden shrink-0">
              <span className="flex-1 bg-[#008BDC]" />
              <span className="flex-1 bg-[#F2AB15]" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs font-medium text-[#008BDC] truncate">
                A prompt library for the leadership team
              </p>
              <h2 className="font-serif text-lg sm:text-2xl font-medium text-[#0B3B5C] truncate">
                The Prompt Shelf
              </h2>
            </div>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close prompt library"
            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[#4C6478] hover:bg-[#E9F4FC] hover:text-[#0B3B5C] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5">
          {/* Breadcrumb */}
          <nav className="text-sm text-[#4C6478] mb-5 flex items-center gap-2 flex-wrap">
            <button
              onClick={reset}
              className="text-[#0B3B5C] underline underline-offset-4 decoration-[#BFE0F4] hover:decoration-[#008BDC]"
            >
              All functions
            </button>
            {selectedFn && (
              <>
                <span className="text-[#B9CEDC]">/</span>
                <button
                  onClick={() => setSelectedPrompt(null)}
                  className="text-[#0B3B5C] underline underline-offset-4 decoration-[#BFE0F4] hover:decoration-[#008BDC]"
                >
                  {FUNCTIONS.find((f) => f.id === selectedFn)?.name}
                </button>
              </>
            )}
            {selectedPrompt && (
              <>
                <span className="text-[#B9CEDC]">/</span>
                <span className="text-[#122539]">{selectedPrompt.pillar}</span>
              </>
            )}
          </nav>

          {/* 1. Function grid */}
          {!selectedFn && (
            <>
              <p className="text-[13px] text-[#8CA0B0] mb-4">
                Tap a function to see its prompts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {FUNCTIONS.map((fn) => (
                  <button
                    key={fn.id}
                    onClick={() => setSelectedFn(fn.id)}
                    className="text-left bg-white border border-[#DCE7EF] rounded-lg p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ borderTop: `3px solid ${colorOf(fn.color)}` }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="font-serif text-xl font-medium text-[#122539]">{fn.name}</span>
                      <span className="font-mono text-[11px] pt-1" style={{ color: colorOf(fn.color) }}>
                        {fn.code}
                      </span>
                    </div>
                    <p className="text-[13.5px] text-[#4C6478] mb-3">{fn.tag}</p>
                    <p className="text-[11.5px] text-[#8CA0B0] pt-2 border-t border-[#DCE7EF]">
                      {PROMPTS.filter((p) => p.fn === fn.id).length} prompts
                    </p>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* 2. Prompt list */}
          {selectedFn && !selectedPrompt && (
            <div className="flex flex-col">
              {promptsForFn.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPrompt(p)}
                  className="text-left flex items-center gap-4 py-4 px-2 border-b border-[#DCE7EF] first:border-t hover:bg-[#E9F4FC] rounded transition"
                >
                  <span className="flex-1 min-w-0">
                    <span className="block text-[11px] font-semibold mb-1" style={{ color: colorOf(p.color) }}>
                      {p.pillar}
                    </span>
                    <span className="block text-[16.5px] font-medium text-[#122539] mb-1">{p.title}</span>
                    <span className="block text-[13.5px] text-[#4C6478]">{p.blurb}</span>
                  </span>
                  <span className="text-[#008BDC] text-lg shrink-0">→</span>
                </button>
              ))}
            </div>
          )}

          {/* 3. Detail view */}
          {selectedPrompt && (
            <div>
              <p className="text-xs font-semibold mb-2" style={{ color: colorOf(selectedPrompt.color) }}>
                {selectedPrompt.functionName} / {selectedPrompt.pillar}
              </p>
              <h3 className="font-serif text-2xl font-medium text-[#122539] mb-2">
                {selectedPrompt.title}
              </h3>
              <p className="text-[15px] text-[#4C6478] max-w-2xl mb-6">{selectedPrompt.blurb}</p>

              <div className="rounded-xl border border-[#DCE7EF] overflow-hidden shadow-sm">
                <div className="flex items-center justify-between gap-4 px-5 py-4 bg-[#0B3B5C] flex-wrap">
                  <span className="text-xs font-medium text-white tracking-wide">
                    MASTER PROMPT · RICI STRUCTURE
                  </span>
                  <button
                    onClick={() => handleCopy(selectedPrompt)}
                    className={`inline-flex items-center gap-2 text-[13.5px] font-semibold px-4 py-2 rounded-md transition ${
                      copied
                        ? "bg-[#2E7D32] text-white"
                        : "bg-[#F2AB15] text-[#8A5B00] hover:brightness-105"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> Copy prompt
                      </>
                    )}
                  </button>
                </div>

                <RiciBlock label="Role" text={selectedPrompt.role} variant="role" dotColor="#008BDC" />
                <RiciBlock label="Instruction" text={selectedPrompt.instruction} variant="default" dotColor="#0B3B5C" />
                <RiciBlock label="Context" text={selectedPrompt.context} variant="context" dotColor="#008BDC" />
                <RiciBlock label="Interview me" text={selectedPrompt.interview} variant="interview" dotColor="#F2AB15" />
              </div>

              <p className="text-[12.5px] text-[#8CA0B0] mt-4">
                Tap Copy prompt above, then paste it into ChatGPT, Claude, or Gemini.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
const Notifications = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const duplicatedAnnouncements = useMemo(() => {
    return [...ANNOUNCEMENTS, ...ANNOUNCEMENTS, ...ANNOUNCEMENTS, ...ANNOUNCEMENTS];
  }, []);

  return (
    <>
      {/* Banner — original bg colour, no cross icon */}
      <div className="w-full bg-[#013a81] shadow-xl overflow-hidden">
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .marquee-content {
            animation: marquee 180s linear infinite;
          }
        `}</style>

        <div className="flex items-center w-full py-0.5">
          {/* Marquee area */}
          <div className="flex-1 overflow-hidden">
            <div
              className="marquee-content flex items-center h-full"
              style={{ width: "max-content" }}
            >
              {duplicatedAnnouncements.map((announcement, index) => (
                <AnnouncementItem
                  key={index}
                  icon={announcement.icon}
                  text={announcement.text}
                  color={announcement.color}
                />
              ))}
            </div>
          </div>

          {/* CTA only — no cross icon */}
          <div className="flex items-center pr-4 pl-2 flex-shrink-0 bg-[#013a81] relative z-10">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-white text-[12px] font-semibold px-4 py-1.5 rounded-full border border-white/50 bg-white/15 hover:bg-white/30 transition whitespace-nowrap"
            >
              Get the Prompt Pack
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      <PromptLibraryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Notifications;