import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50 py-8 flex justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Learning Paths</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/ai/llms/large-language-models" className="hover:text-foreground transition-colors">
                  LLMs
                </Link>
              </li>
              <li>
                <Link
                  href="/ai/ai-agents/ai-agents-autonomous-systems"
                  className="hover:text-foreground transition-colors"
                >
                  AI Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/ai/computer-vision/multimodal-ai-vision-language"
                  className="hover:text-foreground transition-colors"
                >
                  Vision AI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/aihelpcenter" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/aihelpcenter" className="hover:text-foreground transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/aihelpcenter" className="hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  License
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy;  2025 Ivy Professional School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}