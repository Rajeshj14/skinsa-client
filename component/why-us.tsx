import Image from 'next/image'

const LIME = '#C9A96E'
const BG   = 'black'

const features = [
  {
    no: '01',
    title: 'Overall Fat Loss Programs',
    desc: 'Comprehensive programs designed to support inch loss, improve body contour, and help manage stubborn weight gain concerns.',
  },
  {
    no: '02',
    title: 'Targeted Fat Reduction',
    desc: 'Focus on specific areas such as the abdomen, thighs, arms, back, or chin with advanced body contouring solutions.',
  },
  {
    no: '03',
    title: 'Body Sculpting & Contouring',
    desc: 'Enhance natural body shape and improve definition with non-surgical contouring treatments.',
  },
  {
    no: '04',
    title: 'Wellness & Metabolism Support',
    desc: 'Support your transformation journey with wellness-focused therapies designed to complement your body goals.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-choose-us"
      style={{ backgroundColor: BG }}
      className="w-full scroll-mt-28 py-5 sm:py-16 lg:py-20 px-6 overflow-hidden"
    >
      {/*
        Mobile  → flex-col : label, heading, images, features  (DOM order)
        Desktop → 2-col grid : text left | images right
      */}
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">

          {/* ① Label — mobile: 1st  |  desktop: col-1 row-1 */}
          <div
            data-reveal="top"
            className="relative flex items-center gap-2.5 z-10
                       mb-3 lg:mb-4
                       lg:col-start-1 lg:row-start-1"
          >
            <span className="h-[2px] w-10" style={{ backgroundColor: LIME }} />
            <span
              className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em]"
              style={{ color: LIME }}
            >
              Why Choose Us
            </span>
          </div>

          {/* ② Heading — mobile: 2nd  |  desktop: col-1 row-2 */}
          <h2
            data-reveal="left"
            data-delay="100"
            className="relative text-[28px] sm:text-[34px] lg:text-[38px] font-black text-white uppercase leading-[1.15] z-10
                       mb-5 lg:mb-5
                       lg:col-start-1 lg:row-start-2"
          >
            Explore Our Fat{' '}
            <span style={{ color: LIME }}> Reduction &</span>
            <br />
            <span style={{ color: LIME }}>Body </span>
            Sculpting Solutions
          </h2>

          {/* ③ Images — mobile: 3rd  |  desktop: col-2, spans all rows */}
          <div
            data-reveal="right"
            data-delay="150"
            className="relative grid grid-cols-2 gap-2 sm:gap-3
                       mb-6 lg:mb-0
                       lg:col-start-2 lg:row-start-1 lg:row-span-3"
          >
            {/* Image 1 — top left */}
            <div className="relative h-[150px] sm:h-[210px] lg:h-[265px] rounded-xl lg:rounded-2xl overflow-hidden">
              <Image src="/who-img-1.png" alt="Skinsa Aesthetic Treatment 1" fill className="object-cover" />
            </div>

            {/* Image 2 — top right */}
            <div className="relative h-[150px] sm:h-[210px] lg:h-[265px] rounded-xl lg:rounded-2xl overflow-hidden">
              <Image src="/who-img-2.png" alt="Skinsa Aesthetic Treatment 2" fill className="object-cover" />
            </div>

            {/* Image 3 — bottom left */}
            <div className="relative h-[150px] sm:h-[210px] lg:h-[265px] rounded-xl lg:rounded-2xl overflow-hidden">
              <Image src="/who-img-3.png" alt="Skinsa Aesthetic Treatment 3" fill className="object-cover" />
            </div>

            {/* Image 4 — bottom right */}
            <div className="relative h-[150px] sm:h-[210px] lg:h-[265px] rounded-xl lg:rounded-2xl overflow-hidden">
              <Image src="/who-img-4.png" alt="Skinsa Aesthetic Treatment 4" fill className="object-cover" />
            </div>

            {/* Rotating circular badge — dead-centre on grid gap */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                         w-[86px] h-[86px] sm:w-[110px] sm:h-[110px] lg:w-[136px] lg:h-[136px]"
            >
              {/* White halo ring */}
              <div className="absolute -inset-2 sm:-inset-2.5 rounded-full bg-white/20" />

              {/* Spinning SVG */}
              <div
                className="absolute inset-0"
                style={{ animation: 'slowspin 10s linear infinite' }}
              >
                <svg viewBox="0 0 136 136" width="100%" height="100%">
                  <circle cx="68" cy="68" r="68" fill={LIME} />
                  <defs>
                    <path
                      id="badgeRing"
                      d="M68,68 m-53,0 a53,53 0 1,1 106,0 a53,53 0 1,1 -106,0"
                    />
                  </defs>
                  <text fontSize="9.2" fontWeight="800" letterSpacing="2.4" fill="#111111">
                    <textPath href="#badgeRing">
                      {`CONTACT US NOW • CONTACT US NOW •  `}
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Centre arrow (static) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[34px] h-[34px] sm:w-[44px] sm:h-[44px] lg:w-[54px] lg:h-[54px] rounded-full bg-white flex items-center justify-center">
                  <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="#111111"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="lg:w-5 lg:h-5"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ④ Feature list — mobile: 4th  |  desktop: col-1 row-3 */}
          <div
            data-reveal="left"
            data-delay="220"
            className="relative z-10
                       lg:col-start-1 lg:row-start-3"
          >
            {features.map((f, i) => (
              <div key={i} data-reveal="bottom" data-delay={String(i * 90)} className="flex gap-4 sm:gap-5">
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[11px] sm:text-[12px] font-bold text-white"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    {f.no}
                  </div>
                  {i < features.length - 1 && (
                    <div
                      className="flex-1 my-1"
                      style={{
                        borderLeft: '1.5px dashed rgba(255,255,255,0.2)',
                        minHeight: '28px',
                      }}
                    />
                  )}
                </div>

                {/* Feature text */}
                <div className={`pt-1.5 ${i < features.length - 1 ? 'pb-5 sm:pb-8' : ''}`}>
                  <h3 className="text-[13.5px] sm:text-[15px] font-bold text-white mb-1 sm:mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13.5px] text-white/55 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
