'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// القسم الخامس: 5 أشرطة، كل شريط لشخص بلون مختلف
const PEOPLE = [
  { name: 'سارة المنصوري', role: 'مديرة الإبداع', color: '#e53935', text: '#ffffff' },
  { name: 'يوسف العلوي', role: 'مطوّر واجهات', color: '#fb8c00', text: '#ffffff' },
  { name: 'ليلى بن عمر', role: 'مصمّمة حركة', color: '#fdd835', text: '#262626' },
  { name: 'كريم الهاشمي', role: 'فنان ثلاثي الأبعاد', color: '#43a047', text: '#ffffff' },
  { name: 'نور الدين', role: 'كاتب محتوى', color: '#1e88e5', text: '#ffffff' },
];

// التوقيتات نفسها من الـ Timeline الأصلي (الأشرطة تبدأ عند 6.0 من أصل 9.2)
const WAIT = 6.0;

export default function StripsSection() {
  const stripsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const stripsRoot = stripsRef.current!;
      const strips = stripsRoot.querySelectorAll('.strip');
      const fills = stripsRoot.querySelectorAll('.strip-fill');
      const labels = stripsRoot.querySelectorAll('.strip-label');

      gsap.set(strips, { yPercent: -100 });
      gsap.set(fills, { scaleY: 0, transformOrigin: '50% 0%' });
      gsap.set(labels, { opacity: 0, y: 24 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#hero-section',
            start: 'top top',
            end: '+=600%',
            scrub: 1,
          },
        })
        .to({}, { duration: WAIT }) // 1) الأشرطة تنزل عمودياً بالتتابع
        .to(strips, { yPercent: 0, duration: 1.2, ease: 'power3.out', stagger: 0.15 })
        // 2) كل شريط يتلوّن من الأعلى إلى الأسفل
        .to(fills, { scaleY: 1, duration: 0.8, ease: 'power2.inOut', stagger: 0.15 }, '+=0.4')
        // 3) يظهر اسم كل شخص وتخصصه
        .to(labels, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.12 }, '+=0.3');
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={stripsRef} className="pointer-events-none fixed inset-0 z-[60] flex overflow-hidden">
      {PEOPLE.map((p) => (
        <div key={p.name} className="strip relative h-full flex-1 overflow-hidden bg-neutral-900">
          <div className="strip-fill absolute inset-0" style={{ backgroundColor: p.color }} />
          <div
            className="strip-label absolute inset-0 flex flex-col items-center justify-end gap-2 px-2 pb-10 text-center [writing-mode:vertical-rl] md:items-start md:px-5 md:text-right md:[writing-mode:horizontal-tb]"
            style={{ color: p.text }}
          >
            <h3 className="text-lg font-extrabold leading-tight md:text-2xl">{p.name}</h3>
            <p className="text-sm opacity-80 md:text-base">{p.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}