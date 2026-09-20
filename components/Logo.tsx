import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "nav" | "compact" | "hero";
  priority?: boolean;
};

const SIZES = {
  compact: { width: 160, height: 128, className: "h-8 w-auto" },
  nav: { width: 240, height: 193, className: "h-14 w-auto" },
  hero: { width: 640, height: 514, className: "h-44 sm:h-56 w-auto" },
} as const;

export function Logo({ className, size = "nav", priority = false }: LogoProps) {
  const preset = SIZES[size];

  return (
    <Image
      src="/images/vidyalabs-logo.png"
      alt="VidyaLabs"
      width={preset.width}
      height={preset.height}
      priority={priority}
      className={`${className ?? preset.className} block object-contain`}
    />
  );
}
