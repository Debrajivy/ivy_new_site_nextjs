// OpenAI Ads pixel ("Ivy Website Pixel", Pixel ID DnBPQUkh5e9gJiwDr2YJ5X)
//
// D1: Paste the base code from OpenAI Ads Manager > Conversions > Data Source tab >
//     'Ivy Website Pixel' > Setup code > Copy, into OPENAI_PIXEL_SNIPPET below.
//     Paste ONLY the JavaScript that sits between <script> and </script>, not the tags.
//     While this is empty, nothing is injected and trackOpenAILead() is a silent no-op.
export const OPENAI_PIXEL_SNIPPET = ``

type Oaiq = (command: string, event: string, params?: Record<string, unknown>) => void

const RETRY_MS = 500
const MAX_WAIT_MS = 15_000

/**
 * D2: Fire the OpenAI lead event. Call this ONLY after the server has confirmed the
 * lead was saved, and only once per submission. Never call it on button click.
 */
export function trackOpenAILead() {
  if (typeof window === "undefined" || !OPENAI_PIXEL_SNIPPET.trim()) return

  const fire = () => {
    const oaiq = (window as unknown as { oaiq?: Oaiq }).oaiq
    if (typeof oaiq !== "function") return false
    oaiq("measure", "lead_created", { type: "customer_action" })
    return true
  }

  if (fire()) return

  // Pixel not ready yet (slow network): retry briefly so the lead isn't lost.
  let waited = 0
  const timer = window.setInterval(() => {
    waited += RETRY_MS
    if (fire() || waited >= MAX_WAIT_MS) window.clearInterval(timer)
  }, RETRY_MS)
}
