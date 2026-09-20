import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";

const COLUMNS = [
  {
    title: "Shop",
    links: ["All Collections", "New Releases", "Curated Essentials", "Limited Drops", "Gift Vouchers"],
  },
  {
    title: "Studio",
    links: ["Manifesto", "Material Engineering", "Carbon Transparency", "Flagship Locations", "Careers"],
  },
  {
    title: "Client Services",
    links: [
      "Order Tracking",
      "Bespoke Consultations",
      "Repairs & Care",
      "Returns & Exchanges",
      "Contact Concierge",
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface" id="concierge">
      <div className="max-w-studio mx-auto px-margin py-space-xl grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <Trust icon="verified_user" title="256-Bit SSL Encryption" copy="Military-grade protocol protecting transactions" />
        <Trust icon="eco" title="Carbon Neutral Delivery" copy="100% verified offset logistics worldwide" />
        <Trust icon="published_with_changes" title="30-Day Bespoke Guarantee" copy="Complimentary return pick-up & replacements" />
      </div>
      <div className="max-w-studio mx-auto px-margin py-space-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter">
        <div className="lg:col-span-2 pr-gutter">
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg max-w-md">
            Balancing the clinical discipline of high-end consumer technology with the refined kinetic energy of premier lifestyle artifacts.
          </p>
          <form className="flex items-center gap-space-xs max-w-md">
            <input
              className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              className="px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors whitespace-nowrap"
              type="submit"
            >
              Join Atelier
            </button>
          </form>
        </div>
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h5 className="font-label-caps text-label-caps text-on-surface mb-space-md uppercase">
              {column.title}
            </h5>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              {column.links.map((link) => (
                <li key={link}>
                  <a className="hover:text-on-surface transition-colors" href="#featured">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-studio mx-auto px-margin py-space-lg flex flex-col lg:flex-row lg:items-center justify-between gap-space-md text-on-surface-variant font-label-md text-label-md">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 max-w-3xl">
          <Logo size="hero" />
          <div className="flex flex-col gap-1">
            <p>Copyright 2026 VidyaLabs</p>
            <p>Principal Developer — Rajesh Kumar</p>
            <p>
              Mob —{" "}
              <a className="hover:text-on-surface transition-colors" href="tel:+919140878191">
                9140878191
              </a>
              ,{" "}
              <a className="hover:text-on-surface transition-colors" href="tel:+919140189586">
                9140189586
              </a>
              ,{" "}
              <a className="hover:text-on-surface transition-colors" href="tel:+918004901175">
                8004901175
              </a>
            </p>
            <p>
              Email —{" "}
              <a
                className="hover:text-on-surface transition-colors"
                href="mailto:rkrajesh.pgi@gmail.com"
              >
                rkrajesh.pgi@gmail.com
              </a>
            </p>
            <p>Address — C-7225, Kalpana Residency, Mohanlalganj, Lucknow, Uttar Pradesh, India</p>
          </div>
        </div>
        <div className="flex items-center gap-space-lg">
          <a className="hover:text-on-surface transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-on-surface transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-on-surface transition-colors" href="#">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
}

function Trust({ icon, title, copy }: { icon: string; title: string; copy: string }) {
  return (
    <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-header">
      <Icon name={icon} className="text-secondary text-[28px]" />
      <div>
        <h4 className="font-label-lg text-label-lg text-on-surface">{title}</h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{copy}</p>
      </div>
    </div>
  );
}
