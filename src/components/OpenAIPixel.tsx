import { OPENAI_PIXEL_SNIPPET } from "@/lib/openaiPixel"

// Rendered once, near the top of <head> in app/layout.tsx, so it loads on every page.
export default function OpenAIPixel() {
  if (!OPENAI_PIXEL_SNIPPET.trim()) return null
  return <script id="openai-pixel" dangerouslySetInnerHTML={{ __html: OPENAI_PIXEL_SNIPPET }} />
}
