import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-narrow text-center">
        <p className="eyebrow">404</p>
        <h1 className="font-display mt-4 text-4xl font-semibold">This page is not here</h1>
        <p className="mt-4 text-ink-soft">The link may be outdated. Head home or make a gift instead.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/donate" variant="ghost">
            Donate
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
