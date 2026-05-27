import Image from "next/image";
import Link from "next/link";

// Logo gold colour - matches the SKINSA wordmark
const GOLD = "#C9A96E";


export default function Navbared() {
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

        {/* Right: CTA Button */}
        <div className="shrink-0 flex items-center justify-end">
          <Link
            href="tel: +91 8007070530"
            className="bg-[#C9A96E] group rounded-tl-[25px] rounded-br-[25px] rounded-tr-none rounded-bl-none border px-4 py-2 text-[12px] font-semibold tracking-wide text-black transition-all duration-200 hover:bg-white hover:border-white hover:text-black active:scale-95 sm:px-5 sm:text-[13px] xl:px-7 xl:py-2.5 xl:text-[13.5px]"
          >
            <span className="sm:hidden">+91 8007070530</span>
            <span className="hidden sm:inline">+91 8007070530</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
