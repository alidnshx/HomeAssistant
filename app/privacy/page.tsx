import type { Metadata } from "next";
import { CONTACT_EMAIL, LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Prynce Home Assistant, a private Google Nest integration for Home Assistant.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <Section title="Overview">
        <p>
          Prynce Home Assistant (&ldquo;the application&rdquo;) is a private,
          non-commercial integration that connects a single, privately
          operated Home Assistant instance to Google Nest devices through the
          Google Smart Device Management (SDM) API. The application has no
          public users, no registration process, and is not offered as a
          service to any third party. It is built, operated, and used solely
          by its sole operator.
        </p>
      </Section>

      <Section title="No Public Users">
        <p>
          There is no public sign-up, no user accounts beyond the operator&apos;s
          own Google account, and no multi-tenant access. This policy
          describes how the single private instance of the application
          handles data obtained from Google APIs.
        </p>
      </Section>

      <Section title="Data We Access">
        <p>The application accesses the following data, and only to the extent necessary for its function:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            Device and structure information from the Google Smart Device
            Management API (e.g. Nest thermostats, cameras, and doorbells
            associated with the operator&apos;s own Google Device Access
            registry).
          </li>
          <li>
            Device state and event data (e.g. temperature readings, motion
            events) delivered via Google Cloud Pub/Sub.
          </li>
          <li>
            OAuth 2.0 access and refresh tokens, used solely to authenticate
            requests to Google APIs on behalf of the operator.
          </li>
        </ul>
      </Section>

      <Section title="How Data Is Used">
        <p>
          Data obtained from Google APIs is used exclusively to display and
          control the operator&apos;s own Google Nest devices within the
          private Home Assistant instance. OAuth tokens are used only for
          authenticating API requests. No data collected through Google APIs
          is used for advertising, profiling, analytics, or any purpose
          unrelated to the core function of the integration.
        </p>
      </Section>

      <Section title="No Tracking, No Analytics, No Advertising">
        <ul className="list-inside list-disc space-y-1">
          <li>No tracking of visitors or users takes place.</li>
          <li>No analytics services are used on this website or within the application.</li>
          <li>No advertising identifiers or advertising networks are used.</li>
          <li>No cookies are set by this website.</li>
        </ul>
      </Section>

      <Section title="No Sale or Sharing of Data">
        <p>
          We do not sell, rent, or trade any personal data or Google/Nest
          account data to third parties, under any circumstances. Data
          obtained from Google APIs is not shared with any third party except
          as strictly required to operate the integration (for example,
          communication with Google&apos;s own APIs).
        </p>
      </Section>

      <Section title="Google API Services User Data Policy">
        <p>
          The use and transfer of information received from Google APIs will
          adhere to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            className="underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
      </Section>

      <Section title="Data Retention & Storage">
        <p>
          OAuth tokens and device data required for operation are stored only
          within the operator&apos;s private Home Assistant instance and
          associated private infrastructure. No separate public database is
          maintained by this website, and this website itself does not
          collect or store any personal data from visitors.
        </p>
      </Section>

      <Section title="Third-Party Services">
        <p>
          The application communicates with the following third-party
          services strictly to provide its core functionality: the Google
          Smart Device Management API, Google OAuth 2.0, and Google Cloud
          Pub/Sub. No other third-party data processors are used.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          This policy may be updated occasionally to reflect changes in the
          application or applicable legal requirements. The &ldquo;Last
          updated&rdquo; date at the top of this page reflects the most
          recent revision.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this Privacy Policy can be directed to{" "}
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
