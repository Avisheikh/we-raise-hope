import { ButtonLink } from "./ButtonLink";

export function StickyDonate() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <div className="pointer-events-auto">
        <ButtonLink
          href="/donate"
          className="!min-h-12 !min-w-[7.5rem] !rounded-full !px-6 !py-3.5 !text-base shadow-[0_12px_40px_-10px_rgba(207,66,9,0.55)]"
        >
          Donate now
        </ButtonLink>
      </div>
    </div>
  );
}
