'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOP_WORDS = 'CREATE BOLD';
const BOTTOM_WORDS = 'DIGITAL STORIES';
const GAP = 220;
const ARCH_DEPTH = 0.38;

export default function HeroStage() {
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const archPathRef = useRef<SVGPathElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const nextContentRef = useRef<HTMLDivElement>(null);
  const thirdTextRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(windowRef.current, { height: 0 });
      gsap.set(bgRef.current, { opacity: 0 });
      gsap.set(subRef.current, { opacity: 0, y: 20 });
      gsap.set(nextContentRef.current, { opacity: 0 });
      gsap.set(thirdTextRef.current, { opacity: 0, x: -40 });

      // مقدمة التحميل
      const introTl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
      introTl
        .from(stageRef.current, { opacity: 0, y: 40, duration: 1, ease: 'power3.out' })
        .to({}, { duration: 0.35 })
        .to(windowRef.current, { height: GAP, duration: 1.2 }, 'open')
        .to(bgRef.current, { opacity: 1, duration: 0.6 }, 'open+=0.3')
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');

      // المراحل 1–3: الكلمات تختفي، النافذة تتكبر ثم تقلص وتتحول لقوس، نص القسم الثالث
      const arch = { depth: 0 };
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          id: 'hero-pin',
          trigger: heroRef.current,
          start: 'top top',
          end: '+=600%',
          scrub: 1,
          pin: true,
        },
      });

      scrollTl
        .to(topRef.current, { opacity: 0, y: -60, duration: 1 }, 0)
        .to(bottomRef.current, { opacity: 0, y: 60, duration: 1 }, 0)
        .to(subRef.current, { opacity: 0, y: -20, duration: 1 }, 0)
        .to(windowRef.current, { width: '100vw', height: '100vh', borderRadius: 0, duration: 1 }, 0.3)
        .to(nextContentRef.current, { opacity: 1, duration: 0.5 }, 1.1)
        .to(nextContentRef.current, { opacity: 0, duration: 0.4 }, 2.0)
        .to(windowRef.current, { width: '52vw', height: '72vh', x: '24vw', duration: 1.1 }, 2.0)
        .to(
          arch,
          {
            depth: ARCH_DEPTH,
            duration: 1.1,
            onUpdate: () => {
              if (!archPathRef.current) return;
              archPathRef.current.setAttribute(
                'd',
                `M0,0 L1,0 L1,1 L0,1 Q${arch.depth},0.5 0,0 Z`
              );
            },
          },
          2.0
        )
        .to(thirdTextRef.current, { opacity: 1, x: 0, duration: 0.6 }, 2.6);

      ScrollTrigger.refresh();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
            <path ref={archPathRef} d="M0,0 L1,0 L1,1 L0,1 Q0,0.5 0,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <section
        ref={heroRef}
        id="hero-section"
        className="relative flex h-screen items-center justify-center overflow-hidden bg-amber-50 text-neutral-800"
      >
        <div className="flex flex-col items-center gap-7 px-6 text-center">
          <div ref={stageRef} className="flex flex-col items-center">
            <span
              ref={topRef}
              className="block whitespace-nowrap text-[clamp(2.2rem,7vw,6rem)] font-extrabold uppercase leading-none tracking-tight"
            >
              {TOP_WORDS}
            </span>

            <div
              ref={windowRef}
              className="relative w-[min(90vw,900px)] overflow-hidden"
              style={{ borderRadius: 24, clipPath: 'url(#arch-clip)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={bgRef}
                src="/bg.png"
                alt=""
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div
                ref={nextContentRef}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-neutral-800"
              >
                <h2 className="text-4xl font-bold">القسم الثاني</h2>
                <p className="max-w-xl text-neutral-700">
                  نص القسم الثاني يظهر هنا فوق الصورة.
                </p>
              </div>
            </div>

            <span
              ref={bottomRef}
              className="block whitespace-nowrap text-[clamp(2.2rem,7vw,6rem)] font-extrabold uppercase leading-none tracking-tight"
            >
              {BOTTOM_WORDS}
            </span>
          </div>

          <p ref={subRef} className="max-w-[520px] text-[1.05rem] leading-relaxed text-neutral-600">
            نصمّم تجارب رقمية تُحكى، لا فقط تُشاهد.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-start px-[8%]">
          <div ref={thirdTextRef} className="max-w-sm text-right md:text-left">
            <h2 className="mb-3 text-4xl font-bold text-neutral-800">القسم الثالث</h2>
            <p className="text-neutral-700">
              نفس النافذة تقلّصت وتحوّلت إلى قوس مقعّر على اليمين، ونص جديد يظهر هنا.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}