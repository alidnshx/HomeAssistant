import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_DESCRIPTION, canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl("/"),
  },
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Prynce Home Assistant
        </h1>
        <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
          {SITE_DESCRIPTION}
        </p>
        <p className="max-w-2xl text-sm text-neutral-500 dark:text-neutral-500">
          This application is for private, non-commercial use only.
        </p>
      </section>

      <section className="space-y-3 border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <h2 className="text-lg font-medium tracking-tight">Purpose</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          This application connects a privately operated{" "}
          <span className="font-medium">Home Assistant</span> instance to{" "}
          <span className="font-medium">Google Nest</span> devices via the
          Google Smart Device Management (SDM) API. It allows the operator to
          view device state and send control commands to their own Nest
          devices from within their own Home Assistant installation. There
          are no public user accounts, no sign-up flow, and no service
          offered to third parties.
        </p>
      </section>

      <section className="space-y-3 border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <h2 className="text-lg font-medium tracking-tight">
          Google API Usage
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          The application authenticates with Google using OAuth 2.0 and
          requests access to the following scopes:
        </p>
        <ul className="max-w-2xl list-inside list-disc space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-900">
              https://www.googleapis.com/auth/sdm.service
            </code>{" "}
            – to read device state and send commands to Nest devices.
          </li>
          <li>
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-900">
              https://www.googleapis.com/auth/pubsub
            </code>{" "}
            – to receive real-time device event notifications via Google
            Cloud Pub/Sub.
          </li>
        </ul>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          No data obtained through these APIs is sold, shared with third
          parties, or used for advertising. See the{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
      </section>

      <section className="space-y-3 border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <h2 className="text-lg font-medium tracking-tight">
          Legal &amp; Contact
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          Read the{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="underline underline-offset-2">
            Terms of Service
          </Link>
          . For any questions, contact{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>

      <p className="border-t border-neutral-200 pt-8 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-500">
        This application is not affiliated with or endorsed by Google, Nest,
        or Home Assistant.
      </p>
    </div>
  );
}
