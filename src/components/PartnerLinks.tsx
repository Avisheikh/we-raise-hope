import { site } from "@/lib/site";

type PartnerLinksProps = {
  separator?: string;
  className?: string;
  linkClassName?: string;
};

export function PartnerLinks({
  separator = " · ",
  className,
  linkClassName = "font-semibold text-brand underline-offset-2 hover:underline",
}: PartnerLinksProps) {
  return (
    <span className={className}>
      {site.partners.map((partner, index) => (
        <span key={partner.name}>
          {index > 0 ? separator : null}
          <a href={partner.href} className={linkClassName} target="_blank" rel="noopener noreferrer">
            {partner.name}
          </a>
        </span>
      ))}
    </span>
  );
}
