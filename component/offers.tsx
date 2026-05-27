import BookingButton from '@/component/booking-button'

const GOLD = '#C9A96E'
const BG   = '#0D0D0D'


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
        <div data-reveal="top" className="flex flex-col items-center text-center mb-6 lg:mb-16">

          {/* Label with side lines */}
          <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
            <span
              className="h-[1px] w-10 lg:w-16"
              style={{ backgroundColor: GOLD }}
            />
            <span
              className="text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase"
              style={{ color: GOLD }}
            >
              Offers
            </span>
            <span
              className="h-[1px] w-10 lg:w-16"
              style={{ backgroundColor: GOLD }}
            />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-black text-white uppercase tracking-[0.04em] leading-tight mb-2 lg:mb-3">
            Limited Time Offers
          </h2>

          {/* Subtext */}
          <p className="text-[12.5px] sm:text-[14px] text-white/45 tracking-wide">
            Exclusive deals this month — don&apos;t miss out
          </p>

        </div>

        {/* ── Offer Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-14">
          {offers.map((offer) => (
            <div
              data-reveal={offer.tag === '01' ? 'left' : 'right'}
              data-delay={String(Number(offer.tag) * 120)}
              key={offer.tag}
              className="relative flex flex-col overflow-hidden"
              style={{
                border: '1px solid rgba(201,169,110,0.25)',
                borderRadius: '60px 0 60px 0',
              }}
            >
              {/* Gold top accent bar */}
              <div className="h-[3px] w-full" style={{ backgroundColor: GOLD }} />

              <div className="flex flex-col gap-4 sm:gap-6 p-6 sm:p-8">

                {/* Top row — discount badge + tag number */}
                <div className="flex items-start justify-between">

                  {/* Discount */}
                  <div className="flex flex-col leading-none">
                    <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-1">
                      Get up to
                    </span>
                    <div className="flex items-end gap-1">
                      <span
                        className="text-[60px] sm:text-[72px] lg:text-[80px] font-black leading-none"
                        style={{ color: GOLD }}
                      >
                        {offer.discount}%
                      </span>
                      <span
                        className="text-[18px] sm:text-[20px] lg:text-[22px] font-black leading-none mb-2 sm:mb-3 tracking-wider"
                        style={{ color: GOLD }}
                      >
                        OFF
                      </span>
                    </div>
                  </div>

                  {/* Tag number */}
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[11px] sm:text-[12px] font-bold shrink-0"
                    style={{
                      border: `1px solid ${GOLD}`,
                      color: GOLD,
                    }}
                  >
                    {offer.tag}
                  </div>

                </div>

                {/* Divider */}
                <div
                  className="h-[1px] w-full"
                  style={{ backgroundColor: 'rgba(201,169,110,0.2)' }}
                />

                {/* Treatment title */}
                <h3 className="text-[17px] sm:text-[20px] font-bold text-white tracking-wide leading-snug">
                  {offer.title}
                </h3>

                {/* Info rows */}
                <div className="flex flex-col gap-2.5 sm:gap-3">

                  {/* Validity */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke={GOLD} strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="shrink-0 mt-[1px] sm:w-[18px] sm:h-[18px]"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span className="text-[12.5px] sm:text-[13.5px] text-white/60 leading-snug">
                      {offer.validity}
                    </span>
                  </div>

                  {/* Refund */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke={GOLD} strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="shrink-0 mt-[1px] sm:w-[18px] sm:h-[18px]"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[12.5px] sm:text-[13.5px] text-white/60 leading-snug">
                      {offer.refund}
                    </span>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <div data-reveal="bottom" data-delay="300" className="flex justify-center">
          <BookingButton
            ariaLabel="Book free consultation"
            className="inline-flex items-center gap-2.5 sm:gap-3 rounded-tl-[25px] rounded-br-[25px] border px-8 sm:px-10 py-3 sm:py-3.5 text-[12px] sm:text-[13.5px] font-semibold tracking-[0.12em] uppercase transition-all duration-200 hover:bg-white hover:border-white hover:text-black active:scale-95"
            style={{
              borderColor: GOLD,
              color: GOLD,
            }}
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
            Book Free Consultation
          </BookingButton>
        </div>

      </div>
    </section>
  )
}
