import Image from "next/image";
import Link from "next/link";
import rings from "@/assets/photos/rings.jpg";
import benches from "@/assets/photos/benches.jpg";
import dumbbells from "@/assets/photos/dumbbells.jpg";
import { BookingForm } from "@/components/booking-form";
import { MobileMenu } from "@/components/mobile-menu";
import { MovementScreen } from "@/components/movement-screen";
import { PageMotion } from "@/components/page-motion";

const principles = [
  {
    number: "01",
    title: "Assess",
    text: "We start with how you move today, not a generic plan.",
  },
  {
    number: "02",
    title: "Build",
    text: "Clear sessions, each with a purpose you can name.",
  },
  {
    number: "03",
    title: "Sustain",
    text: "A measured pace you can keep alongside a busy working life.",
  },
];

const programs = [
  {
    number: "01",
    title: "Foundation",
    text: "A 12-week one-to-one starting point for building strength with care.",
    detail: "Assessment · Weekly sessions · Four-week reviews",
    price: "from €1,920",
  },
  {
    number: "02",
    title: "Small group",
    text: "Focused training for up to four people who value a quieter room.",
    detail: "12 weeks · Up to four people · Weekly sessions",
    price: "from €960",
  },
  {
    number: "03",
    title: "Maintenance",
    text: "Single sessions to keep a good training rhythm in place.",
    detail: "Single session · 60 minutes · Book as needed",
    price: "€95 / session",
  },
];

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d="M2 10h15M11 4l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <PageMotion />

      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="brand-link" href="#top" aria-label="KERN home">
            <Image
              src="/brand/kern-horizontal.svg"
              alt="KERN"
              width={820}
              height={256}
              unoptimized
              loading="eager"
              fetchPriority="high"
            />
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#programs">Programs</a>
            <a href="#screen">Screen</a>
            <a href="#method">Method</a>
            <a href="#studio">Studio</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button button-primary header-cta" href="#booking">
            Book intro
          </a>
          <MobileMenu />
        </div>
        <span className="scroll-progress" aria-hidden="true" />
      </header>

      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Strength &amp; mobility · Nørrebro, Copenhagen</p>
              <h1>
                <span className="hero-line">
                  <span>Strength,</span>
                </span>{" "}
                <span className="hero-line">
                  <span>
                    measured<span className="stop">.</span>
                  </span>
                </span>
              </h1>
              <p className="hero-lead">
                Training for people who want to feel stronger, move with more ease,
                and leave the noise of a crowded gym behind.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#booking">
                  Book a free intro <Arrow />
                </a>
                <a className="text-link" href="#screen">
                  Find your starting point
                </a>
              </div>
              <p className="hero-note">Free 30-minute intro · No obligation</p>
            </div>
            <div className="hero-mark" role="img" aria-label="KERN calibrated K symbol">
              <Image
                src={rings}
                alt=""
                fill
                placeholder="blur"
                sizes="(max-width: 800px) calc(100vw - 40px), 480px"
                className="hero-photo"
                loading="eager"
                fetchPriority="high"
              />
              <span className="hero-scale" aria-hidden="true" />
              <Image
                src="/brand/kern-symbol-white.svg"
                alt=""
                className="hero-symbol"
                width={256}
                height={256}
                unoptimized
              />
              <span className="mark-caption">01 / measured starting point</span>
            </div>
          </div>
        </section>

        <section className="principles-section" aria-labelledby="principles-title">
          <div className="site-shell section-grid">
            <div className="section-index">
              <span>01</span>
              <span>Principles</span>
            </div>
            <div className="section-content">
              <h2 id="principles-title" data-reveal>A quieter way to get stronger.</h2>
              <p className="section-lead" data-reveal>
                Good training does not need to be loud. It needs a clear starting point,
                a plan you understand, and enough room to pay attention.
              </p>
              <div className="principles-list">
                {principles.map((principle) => (
                  <article className="principle-item" key={principle.number} data-reveal>
                    <span className="item-number">{principle.number}</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="programs-section" id="programs" aria-labelledby="programs-title">
          <div className="site-shell section-grid">
            <div className="section-index">
              <span>02</span>
              <span>Programs</span>
            </div>
            <div className="section-content">
              <h2 id="programs-title" data-reveal>Choose a starting point.</h2>
              <p className="section-lead" data-reveal>
                Every format starts with an intro and a conversation about what you need.
                Prices are examples for this concept project.
              </p>
              <div className="program-list">
                {programs.map((program) => (
                  <a className="program-row" href="#booking" key={program.number} data-reveal>
                    <span className="item-number">{program.number}</span>
                    <span className="program-main">
                      <span className="program-title">{program.title}</span>
                      <span className="program-text">{program.text}</span>
                      <span className="program-detail">{program.detail}</span>
                    </span>
                    <span className="program-price">{program.price}</span>
                    <Arrow />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="screen-section" id="screen" aria-labelledby="screen-title">
          <div className="site-shell section-grid">
            <div className="section-index">
              <span>03</span>
              <span>Screen</span>
            </div>
            <div className="section-content">
              <h2 id="screen-title" data-reveal>Find your starting point.</h2>
              <p className="section-lead" data-reveal>
                Four questions about how you sit, move, and train. You will get a
                suggested format and the reason behind it.
              </p>
              <div data-reveal>
                <MovementScreen />
              </div>
            </div>
          </div>
        </section>

        <section className="method-section" id="method" aria-labelledby="method-title">
          <div className="site-shell section-grid">
            <div className="section-index">
              <span>04</span>
              <span>Method</span>
            </div>
            <div className="section-content method-content">
              <h2 id="method-title" data-reveal>A plan that makes sense.</h2>
              <p className="section-lead" data-reveal>
                Twelve weeks give you time to assess, build, load, and review without
                rushing the work.
              </p>
              <div className="method-line" role="list" aria-label="12-week training method">
                {[
                  ["01", "Assess", "Weeks 1–2"],
                  ["02", "Build", "Weeks 3–6"],
                  ["03", "Load", "Weeks 7–10"],
                  ["04", "Review", "Weeks 11–12"],
                ].map(([number, title, weeks]) => (
                  <div className="method-step" role="listitem" key={number} data-reveal>
                    <span className="method-dot" />
                    <span className="item-number">{number}</span>
                    <strong>{title}</strong>
                    <span>{weeks}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="studio-section" id="studio" aria-labelledby="studio-title">
          <div className="site-shell studio-grid">
            <div>
              <p className="eyebrow eyebrow-light">05 / Studio</p>
              <h2 id="studio-title" data-reveal>Room to pay attention.</h2>
            </div>
            <div className="studio-copy" data-reveal>
              <p>
                KERN is a calm training studio in Nørrebro, Copenhagen. Small groups,
                clear plans, and no performance theatre.
              </p>
              <div className="studio-principles">
                <span>Small groups.</span>
                <span>Clear plans.</span>
                <span>No noise.</span>
              </div>
            </div>
            <div className="studio-photos">
              <figure className="studio-photo studio-photo-wide" data-reveal="image">
                <Image
                  src={benches}
                  alt="Two weight training benches in a dim training room."
                  fill
                  placeholder="blur"
                  sizes="(max-width: 800px) calc(100vw - 40px), 620px"
                />
                <figcaption>The room</figcaption>
              </figure>
              <figure className="studio-photo studio-photo-tall" data-reveal="image">
                <Image
                  src={dumbbells}
                  alt="A rack of dumbbells."
                  fill
                  placeholder="blur"
                  sizes="(max-width: 800px) calc(100vw - 40px), 420px"
                />
                <figcaption>The load</figcaption>
              </figure>
            </div>
            <p className="studio-credit">
              Photographs: Wolfgang1018, Santeri Viinamäki.{" "}
              <Link href="/credits">Licences</Link>
            </p>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title">
          <div className="site-shell section-grid">
            <div className="section-index"><span>06</span><span>FAQ</span></div>
            <div className="section-content">
              <h2 id="faq-title" data-reveal>Before you start.</h2>
              {[
                ["Can I start as a beginner?", "Yes. The intro is where we find your starting point, whatever your training history."],
                ["What should I wear?", "Comfortable clothes you can move in, and clean indoor training shoes."],
                ["How big are the groups?", "Small-group sessions cap at four people."],
                ["What if I miss a session?", "We would agree scheduling and cancellation at the intro. This concept project takes no real bookings."],
                ["Is this rehabilitation?", "No. KERN is a strength and mobility training concept. For pain or injury, speak with a qualified clinician."],
              ].map(([question, answer]) => (
                <details className="faq-item" key={question} data-reveal>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="booking-section" id="booking" aria-labelledby="booking-title">
          <div className="site-shell section-grid">
            <div className="section-index">
              <span>07</span>
              <span>Booking</span>
            </div>
            <div className="section-content booking-content">
              <h2 id="booking-title" data-reveal>Start with a conversation.</h2>
              <p className="section-lead" data-reveal>
                The intro is free and takes 30 minutes. Tell us where you are starting,
                and we will suggest a format. No obligation.
              </p>
              <div data-reveal>
                <BookingForm />
              </div>
              <p className="concept-note">
                Concept project. KERN is not a real business, and this form takes no
                real bookings.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-inner">
          <Image
            src="/brand/kern-symbol-white.svg"
            alt=""
            aria-hidden="true"
            className="footer-symbol"
            width={256}
            height={256}
            unoptimized
          />
          <div>
            <p className="footer-brand">KERN</p>
            <p>KERN is a concept project. Not a real business.</p>
            <p>Designed and built by <a href="https://www.belfamuhammad.com">Belfa Muhammad</a>.</p>
          </div>
          <div className="footer-links">
            <Link className="footer-link" href="/credits">Photo credits</Link>
            <a className="footer-link" href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
