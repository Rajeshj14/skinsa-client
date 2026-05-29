'use client'

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Treatments", href: "/#why-choose-us" },
  { label: "About Us", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
];

export default function JewelryHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=EB+Garamond:wght@400;500&display=swap');

        .jw {
          position: relative;
          isolation: isolate;
          background-image: url('/banner.png');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
        }
        .jw::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -2;
          background: inherit;
        }
        .jw::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(15,63,55,0.92) 0%, rgba(15,63,55,0.78) 48%, rgba(15,63,55,0.58) 100%),
            rgba(15,63,55,0.42);
        }

        /* ── NAV ── */
        .jw-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 36px;
          padding: 18px 48px 14px;
        }
        .jw-nav a, .jw-nav-pages {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: #ffffff;
          text-decoration: none;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s;
        }
        .jw-nav a:hover, .jw-nav-pages:hover { color: #C9A96E; opacity: 1; }
        .pages-rel { position: relative; }
        .pages-drop {
          position: absolute;
          top: 24px; left: 0;
          background: #ffffff;
          border: 1px solid rgba(15,63,55,0.18);
          padding: 5px 0;
          min-width: 120px;
          z-index: 99;
        }
        .pages-drop span {
          display: block;
          padding: 7px 14px;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #0F3F37;
          cursor: pointer;
          text-transform: uppercase;
        }
        .pages-drop span:hover { color: #C9A96E; opacity: 1; }

        /* ── LOGO BADGE ── */
        .jw-badge {
          display: flex;
          justify-content: center;
          margin: 8px auto 10px;
        }
        .jw-logo {
          width: 220px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        /* ── HERO TITLE ── */
        .jw-title {
          font-weight: 700;
          font-size: clamp(56px, 6.2vw, 90px);
          color: #ffffff;
          letter-spacing: 0.025em;
          line-height: 0.92;
          text-align: center;
          white-space: nowrap;
          padding: 12px 0 36px;
          width: 100%;
        }

        /* ── 3-COL GRID ── */
        .jw-grid {
          display: grid;
          grid-template-columns: minmax(0,1fr) 330px minmax(0,1fr);
          column-gap: 62px;
          align-items: start;
          padding: 0 52px;
          max-width: 1440px;
          margin: 0 auto;
        }

        /* LEFT — top aligned, stats from the top */
        .jw-left {
          display: flex;
          flex-direction: column;
          padding-top: 10px;
          align-items: flex-end;
        }
        .stat-block { margin-bottom: 38px; }
        .stat-block:last-child { margin-bottom: 0; }
        .stat-row {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 12px;
        }
        .stat-star {
          font-size: 15px;
          line-height: 1;
          color: #C9A96E;
          flex-shrink: 0;
        }
        .stat-label {
          font-size: clamp(22px, 2.2vw, 32px);
          font-weight: 700;
          color: #C9A96E;
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .stat-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.78);
          line-height: 1.75;
          max-width: 260px;
          padding-left: 24px;
        }

        /* CENTER */
        .jw-center { display: flex; justify-content: center; }
        .big-img {
          width: 330px;
          height: 430px;
          border-radius: 0 160px 0 0;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
        }
        .big-img-inner {
          width: 100%;
          height: 100%;
          background: linear-gradient(168deg, #0F3F37 0%, #1f6b5d 46%, #C9A96E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .big-img-inner img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
          display: block;
        }
        .img-lbl {
          position: absolute;
          color: rgba(255,255,255,0.16);
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          user-select: none;
        }

        /* RIGHT — flex col, sparkle+quote top, small image margin-top:auto to bottom */
        .jw-right {
          display: flex;
          flex-direction: column;
          height: 430px;
          padding-top: 10px;
        }
        .sparkle-svg {
          width: 26px; height: 26px;
          fill: #C9A96E;
          margin-bottom: 16px;
          display: block;
          flex-shrink: 0;
        }
        .jw-quote {
          font-size: 14.5px;
          color: rgba(255,255,255,0.78);
          line-height: 1.8;
          max-width: 290px;
        }
        /* small image pushed to bottom-right with margin-top auto */
        .small-img {
          width: 162px;
          height: 222px;
          border-radius: 81px 0 0 0;
          overflow: hidden;
          margin-top: 20px;
          flex-shrink: 0;
          position: relative;
        }
        .small-img-inner {
          width: 100%; height: 100%;
          background: linear-gradient(158deg, #0F3F37 0%, #1f6b5d 52%, #C9A96E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .small-img-inner img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
          display: block;
        }
        .small-lbl {
          position: absolute;
          color: rgba(255,255,255,0.16);
          font-size: 8px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          user-select: none;
        }

        .jw-marquee {
          margin-bottom:18px;
          margin-top:22px;
          overflow: hidden;
          background: #0F3F37;
          color: #C9A96E;
          border-top: 1px solid rgba(201,169,110,0.55);
          border-bottom: 1px solid rgba(201,169,110,0.55);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(255,255,255,0.08);
          clip-path: polygon(
            0 8%,
            10% 0,
            20% 8%,
            30% 0,
            40% 8%,
            50% 0,
            60% 8%,
            70% 0,
            80% 8%,
            90% 0,
            100% 8%,
            100% 92%,
            90% 100%,
            80% 92%,
            70% 100%,
            60% 92%,
            50% 100%,
            40% 92%,
            30% 100%,
            20% 92%,
            10% 100%,
            0 92%
          );
        }
        .jw-marquee-track {
          display: flex;
          width: max-content;
          animation: jwMarquee 26s linear infinite;
        }
        .jw-marquee span {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 10px 26px 12px;
          font-size: clamp(22px, 2.4vw, 36px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.04em;
          white-space: nowrap;
          text-transform: uppercase;
        }
        .jw-marquee span::after {
          content: '';
          width: 7px;
          height: 7px;
          border: 1px solid #C9A96E;
          background: rgba(201,169,110,0.22);
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        @keyframes jwMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 1024px) {
          .jw {
            min-height: auto;
            padding-bottom: 18px;
            background-position: center top;
          }
          .jw-nav {
            flex-wrap: wrap;
            gap: 14px 22px;
            padding: 16px 24px 10px;
          }
          .jw-nav a {
            font-size: 11px;
            letter-spacing: 0.12em;
          }
          .jw-logo {
            width: 190px;
            height: 62px;
          }
          .jw-title {
            font-size: clamp(42px, 8vw, 72px);
            white-space: normal;
            padding: 10px 20px 28px;
          }
          .jw-grid {
            grid-template-columns: minmax(0, 1fr) 280px;
            column-gap: 30px;
            row-gap: 28px;
            padding: 0 28px;
          }
          .jw-left {
            align-items: flex-start;
            padding-top: 0;
          }
          .stat-block {
            margin-bottom: 28px;
          }
          .stat-desc {
            max-width: 100%;
          }
          .big-img {
            width: 280px;
            height: 365px;
            border-radius: 0 128px 0 0;
          }
          .jw-right {
            grid-column: 1 / -1;
            height: auto;
            padding-top: 0;
          }
          .jw-quote {
            max-width: 620px;
          }
          .small-img {
            width: 138px;
            height: 190px;
            border-radius: 70px 0 0 0;
          }
          .jw-marquee {
            margin-top: 18px;
            margin-bottom: 12px;
          }
          .jw-marquee span {
            padding: 9px 22px 10px;
            font-size: clamp(20px, 3.8vw, 32px);
          }
        }

        @media (max-width: 640px) {
          .jw {
            background-position: center top;
          }
          .jw::after {
            background:
              linear-gradient(180deg, rgba(15,63,55,0.94) 0%, rgba(15,63,55,0.82) 54%, rgba(15,63,55,0.72) 100%),
              rgba(15,63,55,0.48);
          }
          .jw-nav {
            gap: 10px 14px;
            padding: 14px 14px 8px;
          }
          .jw-nav a {
            font-size: 10px;
            letter-spacing: 0.08em;
          }
          .jw-badge {
            margin: 6px auto 8px;
          }
          .jw-logo {
            width: 160px;
            height: 52px;
          }
          .jw-title {
            font-size: clamp(34px, 12vw, 48px);
            line-height: 1;
            padding: 8px 16px 22px;
          }
          .jw-grid {
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 0 18px;
          }
          .jw-center {
            order: 1;
            width: 100%;
          }
          .jw-left {
            order: 2;
            width: 100%;
            gap: 14px;
          }
          .jw-right {
            order: 3;
            width: 100%;
            align-items: flex-start;
          }
          .stat-block {
            width: 100%;
            margin-bottom: 0;
            border: 1px solid rgba(201,169,110,0.36);
            background: rgba(15,63,55,0.32);
            padding: 16px;
          }
          .stat-row {
            margin-bottom: 10px;
          }
          .stat-label {
            font-size: 22px;
          }
          .stat-desc {
            padding-left: 0;
            font-size: 13px;
            line-height: 1.65;
          }
          .big-img {
            width: min(100%, 290px);
            height: 360px;
            border-radius: 0 120px 0 0;
          }
          .sparkle-svg {
            margin-bottom: 10px;
          }
          .jw-quote {
            font-size: 13.5px;
            line-height: 1.7;
            max-width: 100%;
          }
          .small-img {
            width: 132px;
            height: 178px;
            margin-top: 16px;
          }
          .jw-marquee span {
            gap: 14px;
            padding: 8px 18px 9px;
            font-size: 20px;
          }
        }
      `}</style>

      <div className="jw" id="home">

        {/* NAV */}
        <nav className="jw-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* LOGO BADGE */}
        <div className="jw-badge">
          <div className="jw-logo">
            <Image
              src="/logo.svg"
              alt="Skinsa Aesthetic"
              width={210}
              height={66}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="jw-title">Shape Your Body With Ease</h1>

        {/* 3-COL GRID */}
        <div className="jw-grid">

          {/* LEFT */}
          <div className="jw-left">
            <div className="stat-block">
              <div className="stat-row">
                <span className="stat-star">✦</span>
                <span className="stat-label">45% OFF</span>
              </div>
              <h3 className="stat-label" style={{ fontSize: "20px", marginBottom: "10px", paddingLeft: "24px" }}>
                Overall Fat Loss
              </h3>
              <p className="stat-desc">
                Get up to 45% Off<br />
                Valid till the end of this month only<br />
                100% Consultation Fee Refund upon booking a package
              </p>
            </div>
            <div className="stat-block">
              <div className="stat-row">
                <span className="stat-star">✦</span>
                <span className="stat-label">35% OFF</span>
              </div>
              <h3 className="stat-label" style={{ fontSize: "20px", marginBottom: "10px", paddingLeft: "24px" }}>
                Fat Reduction for Specific Areas
              </h3>
              <p className="stat-desc">
                Get up to 35% Off<br />
                Valid till the end of this month only<br />
                100% Consultation Fee Refund upon booking a package
              </p>
            </div>
          </div>

          {/* CENTER — big image, top-right radius only */}
          <div className="jw-center">
            <div className="big-img">
              <div className="big-img-inner">
                <Image
                  src="/welcome.png"
                  alt="Body contouring transformation model"
                  width={739}
                  height={988}
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="jw-right">
            {/* 4-point star sparkle */}
            <svg className="sparkle-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.5 L13.3 10.7 L22.5 12 L13.3 13.3 L12 22.5 L10.7 13.3 L1.5 12 L10.7 10.7 Z"/>
            </svg>

            <p className="jw-quote">
              "Lose stubborn fat safely with advanced non-surgical treatments designed for visible inch loss and body contouring."
            </p>

            {/* small image — top-left radius only */}
            <div className="small-img">
              <div className="small-img-inner">
                <Image
                  src="/welcome-1.png"
                  alt="Fat loss treatment result model"
                  width={709}
                  height={1122}
                />
              </div>
            </div>
          </div>

        </div>

        <div className="jw-marquee" aria-hidden="true">
          <div className="jw-marquee-track">
            {[...["COOLSCULPTING", "LIPODISSOLVE", "INCH LOSS", "BODY CONTOURING", "WEIGHT LOSS", "WELLNESS"], ...["COOLSCULPTING", "LIPODISSOLVE", "INCH LOSS", "BODY CONTOURING", "WEIGHT LOSS", "WELLNESS"]].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
