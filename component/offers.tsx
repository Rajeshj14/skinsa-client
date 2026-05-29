import BookingButton from '@/component/booking-button'

const GOLD = '#C9A96E'
const BG   = '#FFFFFF'
const DARK = '#0F3F37'

const offers = [
  {
    tag: '01',
    title: 'Overall Fat Loss',
    discount: '45',
    validity: 'Valid till the end of this month only',
    refund: '100% Consultation Fee Refund upon booking a package',
  },
  {
    tag: '02',
    title: 'Fat Reduction for Specific Areas',
    discount: '35',
    validity: 'Valid till the end of this month only',
    refund: '100% Consultation Fee Refund upon booking a package',
  },
]

export default function Offers() {
  return (
    <section style={{ backgroundColor: BG }} className="w-full py-8 sm:py-16 lg:py-14 px-6">
      <div className="mx-auto max-w-5xl">

        {/* ── Section Header ── */}
        <div data-reveal="top" className="flex flex-col items-center text-center mb-8 lg:mb-16">
          <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
            <span className="h-[1px] w-10 lg:w-16" style={{ backgroundColor: GOLD }} />
            <span
              className="text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase"
              style={{ color: GOLD }}
            >
              Offers
            </span>
            <span className="h-[1px] w-10 lg:w-16" style={{ backgroundColor: GOLD }} />
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-black text-[#0F3F37] uppercase tracking-[0.04em] leading-tight mb-2 lg:mb-3">
            Limited Time Offers
          </h2>
          <p className="text-[12.5px] sm:text-[14px] text-black/55 tracking-wide">
            Exclusive deals this month — don&apos;t miss out
          </p>
        </div>

        {/* ── Offer Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 lg:mb-14">
          {offers.map((offer) => (
            <div
              key={offer.tag}
              data-reveal={offer.tag === '01' ? 'left' : 'right'}
              data-delay={String(Number(offer.tag) * 120)}
              className="relative flex flex-col items-center text-center overflow-hidden px-6 sm:px-8 pt-8 sm:pt-10 pb-7 sm:pb-8 gap-6"
              style={{ backgroundColor: DARK }}
            >

              {/* Corner tag */}
              <div
                className="absolute top-0 right-0 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em]"
                style={{ backgroundColor: GOLD, color: '#111' }}
              >
                {offer.tag}
              </div>

              {/* Dashed ring + discount inside */}
              <div className="relative flex items-center justify-center shrink-0">
                <svg
                  width="176" height="176" viewBox="0 0 176 176"
                  className="sm:w-[200px] sm:h-[200px]"
                >
                  {/* Outer dashed ring */}
                  <circle
                    cx="88" cy="88" r="82"
                    fill="none"
                    stroke={GOLD}
                    strokeWidth="1"
                    strokeDasharray="5 7"
                    opacity="0.5"
                  />
                  {/* Inner filled circle */}
                  <circle
                    cx="88" cy="88" r="68"
                    fill="rgba(201,169,110,0.08)"
                    stroke={GOLD}
                    strokeWidth="1"
                    opacity="0.6"
                  />
                </svg>

                {/* Text inside the ring */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-0 leading-none">
                  <span
                    className="text-[10px] font-semibold tracking-[0.25em] uppercase mb-1"
                    style={{ color: 'rgba(201,169,110,0.6)' }}
                  >
                    Get up to
                  </span>
                  <span
                    className="text-[52px] sm:text-[60px] font-black leading-none"
                    style={{ color: GOLD }}
                  >
                    {offer.discount}%
                  </span>
                  <span
                    className="text-[13px] sm:text-[15px] font-black tracking-[0.18em] mt-0.5"
                    style={{ color: GOLD }}
                  >
                    OFF
                  </span>
                </div>
              </div>

              {/* Gold divider */}
              <div
                className="w-12 h-[2px] shrink-0"
                style={{ backgroundColor: GOLD }}
              />

              {/* Title */}
              <h3 className="text-[16px] sm:text-[19px] font-bold text-white leading-snug">
                {offer.title}
              </h3>

              {/* Info rows */}
              <div className="flex flex-col gap-2.5 sm:gap-3 text-left w-full">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <svg
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke={GOLD} strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="shrink-0 mt-[1px] sm:w-[17px] sm:h-[17px]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span className="text-[12.5px] sm:text-[13.5px] text-white/55 leading-snug">
                    {offer.validity}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <svg
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke={GOLD} strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="shrink-0 mt-[1px] sm:w-[17px] sm:h-[17px]"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-[12.5px] sm:text-[13.5px] text-white/55 leading-snug">
                    {offer.refund}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <div data-reveal="bottom" data-delay="300" className="flex justify-center">
          <BookingButton
            ariaLabel="Book free consultation"
            className="inline-flex items-center gap-2.5 sm:gap-3 border px-8 sm:px-10 py-3 sm:py-3.5 text-[12px] sm:text-[13.5px] font-semibold tracking-[0.12em] uppercase transition-all duration-200 hover:bg-[#0F3F37] hover:border-[#0F3F37] hover:text-white active:scale-95"
            style={{ borderColor: GOLD, color: 'black' }}
          >
            <svg
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="sm:w-4 sm:h-4"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Book Your Consultation
          </BookingButton>
        </div>

      </div>
    </section>
  )
}
