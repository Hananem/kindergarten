import type { CSSProperties } from 'react';

const PINK = '#f3b9d0';
const LIGHT_PINK = '#f9dce8';
const BLUE = '#bfe0f0';
const BLUE_BASE = '#eaf4fa';
const MINT = '#c4e8de';
const YELLOW = '#f6ebb9';

const INK = '#4b3b8f';
const INK_SOFT = '#7b7694';

const RIBBON = [PINK, BLUE, MINT, YELLOW, LIGHT_PINK];

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Story', href: '#story' },
  { label: 'Our Values', href: '#values' },
  { label: 'Meet Our Team', href: '#team' },
  { label: 'Come & Know Us', href: '#discover' },
  { label: 'Join Our Family', href: '#join' },
];

const CONTACT = [
  { label: 'Call us', value: '+213 000 000 000', color: PINK },
  { label: 'Email', value: 'hello@littlenest.com', color: BLUE },
  { label: 'Visit', value: 'Algeria', color: MINT },
  { label: 'Open', value: 'Sun – Thu, 7:30 – 16:30', color: YELLOW },
];

const FOOTER_SHAPES = [
  { src: '/shape2.png', right: '4%', top: '14%', size: 'clamp(50px, 6vw, 110px)', rot: 12, amp: 22, dur: 5.6, delay: 0 },
  { src: '/shape5.png', left: '3%', bottom: '22%', size: 'clamp(46px, 5.5vw, 100px)', rot: -10, amp: 26, dur: 6.2, delay: -2 },
  { src: '/shape1.png', right: '10%', bottom: '10%', size: 'clamp(36px, 4vw, 76px)', rot: 8, amp: 18, dur: 5.2, delay: -3 },
];

export default function Footer() {
  return (
    <footer
      data-site-footer
      className="relative overflow-hidden text-[#4b3b8f]"
      style={{ backgroundColor: BLUE_BASE }}
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(75, 59, 143, 0.22) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(75, 59, 143, 0.22) 1px, transparent 1px)
          `,
          backgroundSize: '42px 42px',
        }}
      />

      {/* Floating shapes */}
      <style>{`
        @keyframes footer-float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, var(--amp), 0);
          }
        }

        .footer-float {
          animation: footer-float var(--dur) ease-in-out var(--delay) infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-float {
            animation: none;
          }
        }
      `}</style>

      {FOOTER_SHAPES.map((sh, i) => (
        <img
          key={`${sh.src}-${i}`}
          src={sh.src}
          alt=""
          draggable={false}
          className="footer-float pointer-events-none absolute z-[1] select-none"
          style={
            {
              left: sh.left,
              right: sh.right,
              top: sh.top,
              bottom: sh.bottom,
              width: sh.size,
              rotate: `${sh.rot}deg`,
              '--amp': `${-sh.amp}px`,
              '--dur': `${sh.dur}s`,
              '--delay': `${sh.delay}s`,
            } as CSSProperties
          }
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tight">
              Little
              <img
                src="/hero1.png"
                alt=""
                draggable={false}
                className="mx-[0.2em] inline-block h-[0.8em] w-[1.6em] select-none rounded-full object-cover align-middle"
              />
              Nest
            </h2>

            <p
              className="mt-5 max-w-md text-base font-medium leading-relaxed"
              style={{ color: INK_SOFT }}
            >
              A warm second home where little ones play, explore and make their
              first friends, with caring teachers and safe, joyful days.
            </p>

            <a
              href="#join"
              className="mt-7 inline-flex items-center rounded-full px-7 py-3 text-sm font-bold text-white shadow-lg transition duration-300 hover:scale-105"
              style={{ backgroundColor: INK }}
            >
              Book a visit
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em]">
              Explore
            </h3>

            <ul className="mt-5 space-y-3 text-sm font-medium">
              {NAV_LINKS.map((l, i) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 transition duration-300 hover:translate-x-1"
                    style={{ color: INK_SOFT }}
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: RIBBON[i % RIBBON.length] }}
                    />
                    <span className="transition group-hover:text-[#4b3b8f]">
                      {l.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em]">
              Say hello
            </h3>

            <ul className="mt-5 space-y-4 text-sm">
              {CONTACT.map((c) => (
                <li key={c.label}>
                  <span
                    className="inline-block rounded-full px-3 py-0.5 text-xs font-bold"
                    style={{ backgroundColor: c.color, color: INK }}
                  >
                    {c.label}
                  </span>

                  <p className="mt-1.5 font-medium" style={{ color: INK_SOFT }}>
                    {c.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-3 border-t-2 border-[#4b3b8f]/20 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-medium" style={{ color: INK_SOFT }}>
            © {new Date().getFullYear()} Little Nest Kids Nursery. All rights
            reserved.
          </p>

          <p className="text-sm font-bold">Play • Learn • Grow • Smile</p>
        </div>
      </div>
    </footer>
  );
}