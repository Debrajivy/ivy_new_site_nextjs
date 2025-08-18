import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Us | Ivy Professional School",
  description:
    "Get in touch with Ivy Professional School. We'd love to hear from you and answer any questions about our courses and programs.",
}

export default function ContactPage() {
  return <ContactClient />
}
