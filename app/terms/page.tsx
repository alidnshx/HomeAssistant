import type { Metadata } from "next";
import { CONTACT_EMAIL, LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Prynce Home Assistant, a private Google Nest integration for Home Assistant.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <Section title="Private, Non-Commercial Application">
        <p>
          Prynce Home Assistant is a private, non-commercial application
          built for personal use by its sole operator. It is not offered,
          marketed, or made available as a public service, and no part of it
          is sold or licensed to third parties.
        </p>
      </Section>

      <Section title="Personal Use Only">
        <p>
          Access to the application and its underlying Google OAuth
          credentials is restricted to the operator. The application is not
          intended for use by, and is not made available to, the general
          public.
        </p>
      </Section>

      <Section title="No Guarantee of Availability">
        <p>
          The application is provided on an as-is, as-available basis. There
          is no guarantee of uninterrupted operation, uptime, or continued
          availability. The operator may modify, suspend, or discontinue the
          application at any time, for any reason, without notice.
        </p>
      </Section>

      <Section title="Use at Your Own Risk">
        <p>
          Any use of the application is at the operator&apos;s own risk. The
          application is not designed or warranted for safety-critical,
          life-critical, or emergency use cases.
        </p>
      </Section>

      <Section title="Dependence on Third-Party Services">
        <p>
          The application relies on third-party services, including but not
          limited to Google APIs (Smart Device Management, OAuth 2.0, Cloud
          Pub/Sub), Google Nest hardware and cloud services, and Home
          Assistant. Functionality may be affected by outages, changes,
          deprecations, or policy changes made by these third parties, and
          the operator has no control over such changes.
        </p>
      </Section>

      <Section title="No Warranty">
        <p>
          The application is provided without warranties of any kind, whether
          express or implied, including but not limited to warranties of
          merchantability, fitness for a particular purpose, or
          non-infringement.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, the operator shall not be
          liable for any damages, losses, or issues arising from the use of,
          or inability to use, the application, including but not limited to
          outages or failures of Google, Nest, Home Assistant, or any related
          API changes.
        </p>
      </Section>

      <Section title="No Public Redistribution">
        <p>
          This application, its source code, and its associated Google OAuth
          credentials are not to be redistributed, resold, or offered as a
          service to third parties. It exists solely to support a single
          private Home Assistant installation.
        </p>
      </Section>

      <Section title="Changes to These Terms">
        <p>
          These Terms may be updated from time to time. The &ldquo;Last
          updated&rdquo; date at the top of this page reflects the most
          recent revision.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about these Terms can be directed to{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2 border-t border-neutral-200 pt-6 text-sm leading-relaxed text-neutral-700 first:border-t-0 first:pt-0 dark:border-neutral-800 dark:text-neutral-300">
      <h2 className="text-base font-medium text-neutral-950 dark:text-neutral-50">
        {title}
      </h2>
      {children}
    </section>
  );
}
