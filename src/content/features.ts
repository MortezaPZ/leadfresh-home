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
  eyebrow: "Prototype scope",
  heading: "A clear workflow for account research",
  description:
    "The interface explores how a sales-intelligence product could organise company research. Product behavior and all data shown here are illustrative.",
  items: [
    {
      id: "signals",
      icon: SignalIcon,
      title: "Company signals",
      description:
        "A dashboard concept for reviewing hiring, team growth, and technology activity. No live signal feed is connected.",
    },
    {
      id: "scoring",
      icon: TargetIcon,
      title: "Account prioritization",
      description:
        "An interface concept for comparing companies with a target profile. Any displayed score is sample content.",
    },
    {
      id: "contacts",
      icon: UsersIcon,
      title: "Decision-maker context",
      description:
        "A layout for role and seniority details. This prototype does not connect to a contact database.",
    },
    {
      id: "speed",
      icon: BoltIcon,
      title: "Next-step planning",
      description:
        "A concept for preparing a prioritized outreach queue. No outreach is sent from this site.",
    },
    {
      id: "integrations",
      icon: PlugIcon,
      title: "Integration surfaces",
      description:
        "Visual concepts for CRM and messaging integrations. No external systems are connected.",
    },
    {
      id: "compliance",
      icon: ShieldCheckIcon,
      title: "Data boundaries",
      description:
        "All displayed data is illustrative. Authentication, compliance, and production data handling are outside this front-end prototype.",
    },
  ] satisfies Feature[],
} as const;
