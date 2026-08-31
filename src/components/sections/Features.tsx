import { Section } from "@/components/ui/Section";
import { Heading, Text, Eyebrow } from "@/components/ui/Typography";
import { Reveal } from "@/components/motion/Reveal";
import { featuresSection } from "@/content/features";
import type { Feature } from "@/types";

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  return (
    <Reveal as="li" index={index}>
      <article className="group h-full rounded-lg border border-line bg-surface p-6 shadow-card transition-[box-shadow,transform,border-color] duration-200 ease-out-soft hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card-hover">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-700 transition-colors duration-200 group-hover:bg-brand-100">
          <Icon className="h-6 w-6" />
        </span>
        <Heading as="h3" size="h3" className="mt-5">
          {feature.title}
        </Heading>
        <Text size="body-sm" className="mt-2">
          {feature.description}
        </Text>
      </article>
    </Reveal>
  );
}

export function Features() {
  return (
    <Section id="features" aria-labelledby="features-heading">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <Eyebrow>{featuresSection.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal index={1}>
          <Heading as="h2" size="display-sm" id="features-heading" className="mt-4">
            {featuresSection.heading}
          </Heading>
        </Reveal>
        <Reveal index={2}>
          <Text size="body-lg" className="mt-4">
            {featuresSection.description}
          </Text>
        </Reveal>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {featuresSection.items.map((feature, i) => (
          <FeatureCard key={feature.id} feature={feature} index={i % 3} />
        ))}
      </ul>
    </Section>
  );
}
