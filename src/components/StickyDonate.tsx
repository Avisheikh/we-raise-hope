import { ButtonLink } from "./ButtonLink";

export function StickyDonate() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <div className="pointer-events-auto">
        <ButtonLink
          href="/donate"
          className="!rounded-full !px-5 !py-3 shadow-[0_12px_40px_-10px_rgba(207,66,9,0.55)]"
        >
          Donate now
        </ButtonLink>
      </div>
    </div>
  );
}
