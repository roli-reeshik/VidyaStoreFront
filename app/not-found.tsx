import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-studio mx-auto px-margin py-space-xl text-center">
      <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
        404
      </p>
      <h1 className="font-headline-lg text-headline-lg text-on-surface mt-2">
        This artifact is not in the atelier.
      </h1>
      <Link
        href="/"
        className="inline-flex mt-space-lg px-space-xl py-3 rounded-lg bg-primary text-on-primary font-label-lg"
      >
        Return to the storefront
      </Link>
    </div>
  );
}
