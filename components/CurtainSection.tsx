'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// التوقيتات نفسها من الـ Timeline الأصلي (القسم الرابع يبدأ عند 3.6 من أصل 9.2)
const WAIT = 3.6;

export default function CurtainSection() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const curtainTextRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(curtainRef.current, { yPercent: 100 });
      gsap.set(curtainTextRef.current, { opacity: 0, y: 30 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#hero-section',
            start: 'top top',
            end: '+=600%',
            scrub: 1,
          },
        })
        .to({}, { duration: WAIT }) // انتظار حتى يحين دور الستارة
        .to(curtainRef.current, { yPercent: 0, duration: 1.2, ease: 'power2.inOut' })
        .to(curtainTextRef.current, { opacity: 1, y: 0, duration: 0.6 }, '+=0.4');
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-sky-100 text-neutral-800"
    >
      <div ref={curtainTextRef} className="px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold">القسم الرابع</h2>
        <p className="mx-auto max-w-xl text-neutral-700">
          هذا القسم صعد من الأسفل كستارة وغطّى المحتوى السابق بالكامل، والآن تظهر نصوصه.
        </p>
      </div>
    </div>
  );
}