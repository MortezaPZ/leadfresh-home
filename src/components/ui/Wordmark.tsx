import { cn } from "@/lib/utils";
import { site } from "@/content/site";

interface WordmarkProps {
  className?: string;
}

/** Text-based mark for the LeadFresh prototype. Keep its accessible name in sync with site.name. */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-ink", className)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="24" height="24" rx="7" className="fill-brand-600" />
        <path
          d="M7 13.5c3.5 0 5.5-2 5.5-5.5C9 8 7 10 7 13.5Zm0 0c0 2.2 1.3 3.8 3.5 3.8 2.6 0 4.5-2.2 6.5-6.3-4 .6-6.4 1.2-10 2.5Z"
          fill="#fff"
        />
      </svg>
      <span className="text-h3 font-bold tracking-tight">{site.name}</span>
    </span>
  );
}
