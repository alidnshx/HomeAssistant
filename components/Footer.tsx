import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-8 text-sm text-neutral-500 dark:text-neutral-500">
        <p className="font-medium text-neutral-700 dark:text-neutral-300">
          {SITE_NAME}
        </p>
        <p>Private, non-commercial integration.</p>
        <div className="flex gap-4">
          <Link
            href="/privacy"
            className="transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
