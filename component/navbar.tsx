import Image from "next/image";
import Link from "next/link";
import BookingButton from "@/component/booking-button";

// Logo gold colour - matches the SKINSA wordmark
const GOLD = "#C9A96E";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-black border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6 lg:px-8 xl:grid xl:grid-cols-[auto_1fr_auto] xl:px-10">
        {/* Left: Logo */}
        <Link href="/" aria-label="Skinsa Aesthetic Home" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Skinsa Aesthetic"
            width={230}
            height={72}
            priority
            className="h-auto w-[145px] object-contain sm:w-[180px] lg:w-[205px] xl:w-[230px]"
          />
        </Link>

        {/* Center: Nav Links */}
        <ul className="order-3 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/10 pt-3 sm:gap-x-7 lg:gap-x-8 xl:order-none xl:w-auto xl:gap-9 xl:border-t-0 xl:pt-0">
          {navLinks.map((link) => (
            <li key={link.href} className="group relative py-1">
              <Link
                href={link.href}
                className="text-[12.5px] font-[450] tracking-[0.04em] text-white transition-colors duration-200 group-hover:text-white sm:text-[13.5px] xl:text-[14.5px]"
              >
                {link.label}
              </Link>
              {/* Gold underline slides in on hover */}
              <span
                className="absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-300 ease-out group-hover:w-full"
                style={{ backgroundColor: GOLD }}
              />
            </li>
          ))}
        </ul>

        {/* Right: CTA Button */}
        <div className="shrink-0 flex items-center justify-end">
          <BookingButton
            ariaLabel="Book your appointment"
            className="bg-[#C9A96E] group rounded-tl-[25px] rounded-br-[25px] rounded-tr-none rounded-bl-none border px-4 py-2 text-[12px] font-semibold tracking-wide text-black transition-all duration-200 hover:bg-white hover:border-white hover:text-black active:scale-95 sm:px-5 sm:text-[13px] xl:px-7 xl:py-2.5 xl:text-[13.5px]"
          >
            <span className="sm:hidden">Book now</span>
            <span className="hidden sm:inline">Book Your Appointment</span>
          </BookingButton>
        </div>
      </nav>
    </header>
  );
}
