'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import BookingButton from './booking-button'

const GOLD = '#C9A96E'
const DIR  = '/Before-after-statics'

const images = [
  // { src: `${DIR}/KRUPA FATLOSS PPT - 1.jpg`,   label: 'Fat Loss'           },
  // { src: `${DIR}/KRUPA FATLOSS PPT - 2.jpg`,   label: 'Fat Loss'           },
  // { src: `${DIR}/KRUPA FATLOSS PPT - 3.jpg`,   label: 'Fat Loss'           },
  // { src: `${DIR}/RAMESH DHANEKUL - 1.jpg`,     label: 'Body Transformation' },
  { src: `${DIR}/RAMESH DHANEKUL - 2.jpg`,     label: 'Body Transformation' },
  { src: `${DIR}/pradnya khaldkar - 1.png`,    label: 'Body Contouring'    },
  { src: `${DIR}/pradnya khaldkar - 2.png`,    label: 'Body Contouring'    },
  // { src: `${DIR}/priyanka kalamkar - 1.jpg`,   label: 'Inch Loss'          },
  { src: `${DIR}/priyanka kalamkar - 2.jpg`,   label: 'Inch Loss'          },
  // { src: `${DIR}/shraddha ahwale - 1.jpg`,     label: 'Weight Management'  },
  // { src: `${DIR}/shraddha ahwale - 2.jpg`,     label: 'Weight Management'  },
  // { src: `${DIR}/somnath ahwale - 1.jpg`,      label: 'Sculpting'          },
  // { src: `${DIR}/somnath ahwale - 2.jpg`,      label: 'Sculpting'          },
  { src: `${DIR}/anamika.jpg`,                 label: 'Transformation'     },
  // { src: `${DIR}/mangesh zombade.jpg`,          label: 'Transformation'     },
  // { src: `${DIR}/Minimalist Before After Salon & Makeup Instagram Post - 1.png`, label: 'Before & After' },
  { src: `${DIR}/Minimalist Before After Salon & Makeup Instagram Post - 2.png`, label: 'Before & After' },
]

export default function BeforeAfter() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const animRef   = useRef<number>(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const tick = () => {
      if (!pausedRef.current && el) {
        el.scrollLeft += 0.7
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)

    const pause  = () => { pausedRef.current = true  }
    const resume = () => { pausedRef.current = false }

    el.addEventListener('touchstart', pause,  { passive: true })
    el.addEventListener('touchend',   resume, { passive: true })
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animRef.current)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('touchend',   resume)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <section className="w-full bg-black py-6 sm:py-16 lg:py-10 overflow-hidden">

      {/* ── Section Header ── */}
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal="top" className="flex flex-col items-center text-center mb-6 sm:mb-12 lg:mb-8">

          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-10 lg:w-16" style={{ backgroundColor: GOLD }} />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase" style={{ color: GOLD }}>
              Real Results
            </span>
            <span className="h-[1px] w-10 lg:w-16" style={{ backgroundColor: GOLD }} />
          </div>

          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-black text-white uppercase tracking-[0.03em] leading-tight mb-1">
            Before & <span style={{ color: GOLD }}>After</span>
          </h2>

          <p className="text-[12.5px] sm:text-[14px] text-white/45 tracking-wide max-w-[440px]">
            Real client transformations achieved through our personalised non-surgical programs.
          </p>

        </div>
      </div>

      {/* ── Auto-scrolling Carousel ── */}
      <div data-reveal="bottom" data-delay="180" className="relative">

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, black, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, black, transparent)' }}
        />

        {/* Scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide px-8 sm:px-12"
          style={{ scrollBehavior: 'auto' }}
        >
          {[...images, ...images].map((img, idx) => (
            <div
              key={idx}
              className="relative shrink-0 w-[314px] sm:w-[260px] lg:w-[700px] h-[262px] sm:h-[420px] lg:h-[460px] overflow-hidden group"
              style={{
                borderRadius: '32px 0 32px 0',
                border: '1px solid rgba(201,169,110,0.18)',
                backgroundColor: '#111',
              }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-20"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)' }}
              />

              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[11px] sm:text-[12px] font-bold text-white tracking-wide">
                  {img.label}
                </span>
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: GOLD }}
                />
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p data-reveal="bottom" data-delay="260" className="text-center text-[15.5px] text-white/80 mt-8 px-6 tracking-wide">
        Individual results may vary. All treatments performed under professional supervision.
      </p>
              {/* ── CTA Button ── */}
              <div data-reveal="bottom" data-delay="340" className="flex justify-center mt-4">
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

    </section>
  )
}
