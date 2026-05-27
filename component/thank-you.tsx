import Link from "next/link";

const GOLD = "#C9A96E";

const nextSteps = [
  {
    title: "Our team will call you",
    description:
      "A Skinsa Aesthetic coordinator will contact you shortly to confirm your details and preferred appointment time.",
  },
  {
    title: "Keep your phone nearby",
    description:
      "Please stay available on the number you shared so we can complete your booking without delay.",
  },
  {
    title: "Visit the clinic",
    description:
      "Our clinic is located at Shop no 101,102, B wing, Shubh Gateway, Opp. Symbiosis Law School, Viman Nagar, Pune, MH 411014.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="bg-[#070707] text-white">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-16 xl:px-10">
        <div>
          <p
            className="text-xs font-bold uppercase tracking-[0.35em]"
            style={{ color: GOLD }}
          >
            Skinsa Aesthetic
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Thank You
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Your enquiry has been received. Our team will connect with you soon
            to help you with consultation details and appointment confirmation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex justify-center rounded-tl-[25px] rounded-br-[25px] bg-[#C9A96E] px-6 py-2.5 text-sm font-semibold tracking-wide text-black transition-all duration-200 hover:bg-white active:scale-95"
            >
              Back to Home
            </Link>
            <Link
              href="tel:+918007070530"
              className="inline-flex justify-center rounded-tl-[25px] rounded-br-[25px] border border-white/20 px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:border-[#C9A96E] hover:text-[#C9A96E] active:scale-95"
            >
              Call +91 8007070530
            </Link>
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8">
          <h2 className="text-2xl font-semibold" style={{ color: GOLD }}>
            What Happens Next?
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4">
            {nextSteps.map((step, index) => (
              <article key={step.title} className="border border-white/10 bg-black p-4">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-black"
                    style={{ backgroundColor: GOLD }}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
