import { Github, Twitter, Mail, Heart } from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "AI Topics",
      links: [
        { label: "Large Language Models", href: "#" },
        { label: "AI Agents & Automation", href: "#" },
        { label: "Computer Vision", href: "#" },
        { label: "Machine Learning Basics", href: "#" },
      ],
    },
    {
      title: "Learning Resources",
      links: [
        { label: "Beginner Guides", href: "#" },
        { label: "Video Tutorials", href: "#" },
        { label: "Code Examples", href: "#" },
        { label: "Research Papers", href: "#" },
      ],
    },
    {
      title: "Tools & Platforms",
      links: [
        { label: "ChatGPT & GPT-4", href: "#" },
        { label: "Perplexity AI", href: "#" },
        { label: "Claude & Anthropic", href: "#" },
        { label: "Open Source Models", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Discussion Forum", href: "#" },
        { label: "Submit a Topic", href: "#" },
        { label: "Student Showcase", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
        
      </div>
    </footer>
  )
}
