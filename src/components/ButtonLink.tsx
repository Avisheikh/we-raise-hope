import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "amber" | "ghost" | "ghostLight";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-deep shadow-[0_10px_28px_-12px_rgba(207,66,9,0.45)]",
  secondary: "bg-forest text-white hover:bg-forest-mid",
  amber: "bg-amber text-ink hover:brightness-95 font-bold",
  ghost: "bg-white/90 text-ink border border-line hover:border-sage hover:bg-white",
  ghostLight:
    "bg-white/20 text-white border border-white/50 hover:bg-white/30 backdrop-blur-sm",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
