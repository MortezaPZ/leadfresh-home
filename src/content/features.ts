import {
  BoltIcon,
  PlugIcon,
  ShieldCheckIcon,
  SignalIcon,
  TargetIcon,
  UsersIcon,
} from "@/components/primitives/icons";
import type { Feature } from "@/types";

export const featuresSection = {
  eyebrow: "Why LeadFresh",
  heading: "Signal in, pipeline out",
  description:
    "Every step from raw company data to a warm introduction, in one workflow your reps actually follow.",
  items: [
    {
      id: "signals",
      icon: SignalIcon,
      title: "Live company signals",
      description:
        "Track hiring bursts, team growth, tech changes and funding across millions of companies, refreshed daily.",
    },
    {
      id: "scoring",
      icon: TargetIcon,
      title: "Fit & intent scoring",
      description:
        "Blend your ICP with real-time signals to rank accounts, so reps always work the highest-probability list first.",
    },
    {
      id: "contacts",
      icon: UsersIcon,
      title: "Decision makers on tap",
      description:
        "Get verified contacts for the people who sign off — with role, seniority and the best channel to reach them.",
    },
    {
      id: "speed",
      icon: BoltIcon,
      title: "Act while it's hot",
      description:
        "Alerts push new matches to Slack and your CRM within hours, not at the end of a quarterly data refresh.",
    },
    {
      id: "integrations",
      icon: PlugIcon,
      title: "Fits your stack",
      description:
        "Two-way sync with Salesforce, HubSpot and your sequencer keeps records clean without manual exports.",
    },
    {
      id: "compliance",
      icon: ShieldCheckIcon,
      title: "Compliant by default",
      description:
        "GDPR- and CCPA-ready data handling, region controls and audit logs your security team can sign off on.",
    },
  ] satisfies Feature[],
} as const;
