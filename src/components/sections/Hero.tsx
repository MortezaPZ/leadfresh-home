import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Heading, Text, Eyebrow } from "@/components/ui/Typography";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRightIcon } from "@/components/primitives/icons";
import { hero } from "@/content/hero";

export function Hero() {
  return (
    <Section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate bg-hero-glow pt-10 sm:pt-14 lg:pt-20"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal index={1}>
          <Heading as="h1" size="display-lg" id="hero-heading" className="mt-4">
            {hero.title}
          </Heading>
        </Reveal>
        <Reveal index={2}>
          <Text size="body-lg" className="mt-5 max-w-prose">
            {hero.description}
          </Text>
        </Reveal>
        <Reveal index={3}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href={hero.primaryCta.href} external={hero.primaryCta.external} size="lg">
              {hero.primaryCta.label}
              <ArrowRightIcon className="h-5 w-5" />
            </Button>
            <Button href={hero.secondaryCta.href} external={hero.secondaryCta.external} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
        <Reveal index={4}>
          <Text size="body-sm" className="mt-4">
            {hero.trustNote}
          </Text>
        </Reveal>
      </div>

      <Reveal index={5} className="mt-14 sm:mt-16 lg:mt-20">
        <div className="mx-auto max-w-content overflow-hidden rounded-xl border border-line bg-surface-subtle shadow-card">
          {/* Concept illustration; no live product data is shown. */}
          <Image
            src={hero.media.src}
            alt={hero.media.alt}
            width={hero.media.width}
            height={hero.media.height}
            priority
            sizes="(min-width: 1200px) 1120px, (min-width: 768px) 90vw, 100vw"
            className="h-auto w-full"
          />
        </div>
      </Reveal>
    </Section>
  );
}
