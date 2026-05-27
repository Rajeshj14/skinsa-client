'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const GOLD = '#C9A96E'
const DIR  = '/Before-after-statics'

const images = [
  { src: `${DIR}/KRUPA FATLOSS PPT - 1.jpg`,   label: 'Fat Loss'           },
  { src: `${DIR}/KRUPA FATLOSS PPT - 2.jpg`,   label: 'Fat Loss'           },
  { src: `${DIR}/KRUPA FATLOSS PPT - 3.jpg`,   label: 'Fat Loss'           },
  { src: `${DIR}/RAMESH DHANEKUL - 1.jpg`,     label: 'Body Transformation' },
  { src: `${DIR}/RAMESH DHANEKUL - 2.jpg`,     label: 'Body Transformation' },
  { src: `${DIR}/pradnya khaldkar - 1.png`,    label: 'Body Contouring'    },
  { src: `${DIR}/pradnya khaldkar - 2.png`,    label: 'Body Contouring'    },
  { src: `${DIR}/priyanka kalamkar - 1.jpg`,   label: 'Inch Loss'          },
  { src: `${DIR}/priyanka kalamkar - 2.jpg`,   label: 'Inch Loss'          },
  { src: `${DIR}/shraddha ahwale - 1.jpg`,     label: 'Weight Management'  },
  { src: `${DIR}/shraddha ahwale - 2.jpg`,     label: 'Weight Management'  },
  { src: `${DIR}/somnath ahwale - 1.jpg`,      label: 'Sculpting'          },
  { src: `${DIR}/somnath ahwale - 2.jpg`,      label: 'Sculpting'          },
  { src: `${DIR}/anamika.jpg`,                 label: 'Transformation'     },
  { src: `${DIR}/mangesh zombade.jpg`,          label: 'Transformation'     },
  { src: `${DIR}/Minimalist Before After Salon & Makeup Instagram Post - 1.png`, label: 'Before & After' },
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
    <section className="w-full bg-black py-12 sm:py-16 lg:py-20 overflow-hidden">

      {/* ── Section Header ── */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 lg:mb-14">

          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-10 lg:w-16" style={{ backgroundColor: GOLD }} />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase" style={{ color: GOLD }}>
              Real Results
            </span>
            <span className="h-[1px] w-10 lg:w-16" style={{ backgroundColor: GOLD }} />
          </div>

          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-black text-white uppercase tracking-[0.03em] leading-tight mb-3">
            Before & <span style={{ color: GOLD }}>After</span>
          </h2>

          <p className="text-[12.5px] sm:text-[14px] text-white/45 tracking-wide max-w-[440px]">
            Real client transformations achieved through our personalised non-surgical programs.
          </p>

        </div>
      </div>

      {/* ── Auto-scrolling Carousel ── */}
      <div className="relative">

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
              className="relative shrink-0 w-[420px] sm:w-[260px] lg:w-[700px] h-[340px] sm:h-[420px] lg:h-[460px] overflow-hidden group"
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
      <p className="text-center text-[10.5px] text-white/20 mt-8 px-6 tracking-wide">
        Individual results may vary. All treatments performed under professional supervision.
      </p>

    </section>
  )
}
