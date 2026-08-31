import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Typography";
import { Reveal } from "@/components/motion/Reveal";
import { socialProof } from "@/content/social-proof";

export function SocialProof() {
  return (
    <Section id="customers" tone="subtle" aria-labelledby="social-proof-heading">
      <Reveal>
        <Text
          as="h2"
          id="social-proof-heading"
          size="body-sm"
          className="text-center font-medium uppercase tracking-[0.08em] text-muted-soft"
        >
          {socialProof.heading}
        </Text>
      </Reveal>

      <Reveal index={1}>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {socialProof.logos.map((logo) => (
            <li key={logo.name} className="flex justify-center">
              {/* ASSET: replace src with the real monochrome logo SVG from Figma. */}
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-7 w-auto opacity-70 transition-opacity duration-200 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </Reveal>

      <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-3">
        {socialProof.stats.map((stat, i) => (
          <Reveal as="div" key={stat.label} index={i} className="text-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block text-display-sm font-bold text-ink">{stat.value}</span>
              <span className="mt-1 block text-body-sm text-muted">{stat.label}</span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
