import type { Metadata } from "next";
import { CONTACT_EMAIL, canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for Prynce Home Assistant.",
  alternates: {
    canonical: canonicalUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
        Prynce Home Assistant is a private application operated by a single
        individual for personal, non-commercial use. It is not a public
        service and does not have a support team.
      </p>
      <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
        For any questions regarding this application, its use of Google
        APIs, or its policies, please reach out via email:
      </p>
      <p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm font-medium underline underline-offset-2"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );
}
