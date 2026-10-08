'use client';

import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// لوحة الألوان
const PINK = '#f3b9d0';
const LIGHT_PINK = '#f9dce8';
const BLUE = '#bfe0f0';
const MINT = '#c4e8de';
const YELLOW = '#f6ebb9';

const RIBBON_COLORS = [PINK, BLUE, MINT, YELLOW];

const CREAM = '#fffaf3';
const INK = '#4b3b8f';
const INK_SOFT = '#7b7694';
const INK_MUTED = '#8a80b8';

const SHOW_THIRD = false;

const SCROLL_LENGTH = 9800;
const SCRUB = 3;

const NURSERY_NAME = ['LITTLE', 'NEST'];
const BOTTOM_WORDS = 'KIDS NURSERY';

const HERO_TITLE_IMAGE = '/hero1.png';
const GAP = 220;

const HERO_BOTTOM_IMAGE = '/hero.png';

type IntroPart = { text: string } | { img: string };

const INTRO_PARTS: IntroPart[] = [
  { text: 'A warm second home where' },
  { img: '/hero2.png' },
  { text: 'little ones play, explore and' },
  { img: '/hero3.png' },
  { text: 'make their first friends, with caring teachers and' },
  { img: '/hero4.png' },
  { text: 'safe, joyful days where every child' },
  { img: '/hero5.png' },
  { text: 'feels loved and ready to grow.' },
];

const ARCH_DEPTH = 0.38;

// ==============================
// TEAM
// ==============================

const PEOPLE = [
  {
    name: 'Ms. Sarah',
    role: 'Early Childhood Educator',
    bio: 'Sarah leads our classrooms with over ten years of experience in play-based learning. She designs gentle daily routines that help every child feel confident, curious and ready to explore.',
    image: '/team1.png',
    color: PINK,
    text: INK,
  },
  {
    name: 'Ms. Amina',
    role: 'Child Psychologist',
    bio: 'Amina supports children’s emotional growth and helps them express their feelings in a safe, caring space. She also guides parents with simple, practical tips for everyday life.',
    image: '/team2.png',
    color: LIGHT_PINK,
    text: INK,
  },
  {
    name: 'Ms. Layla',
    role: 'Infant Care Specialist',
    bio: 'Layla looks after our youngest ones with warmth and patience. From feeding and naps to first steps, she makes sure every baby feels safe, comfortable and loved.',
    image: '/team3.png',
    color: BLUE,
    text: INK,
  },
  {
    name: 'Ms. Nour',
    role: 'Child Nutrition Specialist',
    bio: 'Nour plans healthy, tasty and balanced meals for little growing bodies. She teaches children good eating habits through fun food activities and colorful snack times.',
    image: '/team4.png',
    color: MINT,
    text: INK,
  },
  {
    name: 'Ms. Yasmine',
    role: 'Speech & Language Therapist',
    bio: 'Yasmine nurtures early speech and communication through songs, stories and games. She gently supports every child to find their voice and enjoy talking with friends.',
    image: '/team5.png',
    color: YELLOW,
    text: INK,
  },
];

// ==============================
// OUR VALUES
// ==============================

const CURTAINS = [
  {
    title: 'Playful Learning',
    text: 'Our classrooms are full of colors, stories and hands-on activities that turn every day into a little adventure.',
    image: '/kid1.png',
    bg: BLUE,
  },
  {
    title: 'Caring Teachers',
    text: 'Our warm, trained team gives every child the attention, comfort and encouragement they need to shine.',
    image: '/kid2.png',
    bg: LIGHT_PINK,
  },
  {
    title: 'Safe & Happy Spaces',
    text: 'Bright, clean and secure rooms and gardens where children can explore, rest and make new friends.',
    image: '/kid3.png',
    bg: MINT,
  },
];

// ==============================
// FLOATING IMAGES
// ==============================

const FLOAT_IMAGES = [
  { src: '/img1.png', left: '3%', top: '-22%', w: '15vw', ratio: '3/4', depth: 1.5 },
  { src: '/img2.png', left: '12%', top: '78%', w: '9vw', ratio: '1/1', depth: 0.6 },
  { src: '/img3.png', left: '22%', top: '12%', w: '7vw', ratio: '3/4', depth: 0.5 },
  { src: '/img4.png', left: '32%', top: '82%', w: '18vw', ratio: '4/3', depth: 1.4 },
  { src: '/img5.png', left: '44%', top: '-30%', w: '10vw', ratio: '1/1', depth: 0.7 },
  { src: '/img6.png', left: '55%', top: '60%', w: '8vw', ratio: '3/4', depth: 0.55 },
  { src: '/img7.png', left: '66%', top: '-24%', w: '19vw', ratio: '4/3', depth: 1.6 },
  { src: '/img8.png', left: '77%', top: '84%', w: '11vw', ratio: '1/1', depth: 0.8 },
  { src: '/img9.png', left: '88%', top: '-26%', w: '14vw', ratio: '3/4', depth: 1.3 },
];

// ==============================
// VIDEOS
// ==============================

const VIDEOS = [
  {
    src: '/vid1.mp4',
    text: 'Songs, stories and giggles fill our mornings. Every day starts with joy!',
    color: '#d1457f',
    offset: '-12vh',
  },
  {
    src: '/vid2.mp4',
    text: 'Little hands create, build and discover something new every single day.',
    color: '#2f86b3',
    offset: '12vh',
  },
  {
    src: '/vid3.mp4',
    text: 'Outdoor play helps our children grow strong, curious and confident.',
    color: '#2f9a7f',
    offset: '-8vh',
  },
  {
    src: '/vid4.mp4',
    text: 'Every little milestone is celebrated with hugs, cheers and big smiles.',
    color: '#c98a00',
    offset: '10vh',
  },
];

// ==============================
// STEPS
// ==============================

const STEPS = [
  {
    title: 'book a visit',
    bg: PINK,
    color: INK,
    sticker: '/sticker1.png',
    items: ['Call or message us', 'Pick a day and time', 'Tour classrooms & garden', 'Meet our teachers'],
    left: '0%',
    top: '14%',
    rot: -4,
    stickerRot: -12,
    stickerSide: 'right-4',
  },
  {
    title: 'meet & chat',
    bg: BLUE,
    color: INK,
    sticker: '/sticker2.png',
    items: ['Share your child’s needs', 'Ask about daily routines', 'Learn our play-based way', 'Check ages & schedules'],
    left: '19%',
    top: '24%',
    rot: 3,
    stickerRot: 10,
    stickerSide: 'left-4',
  },
  {
    title: 'register',
    bg: YELLOW,
    color: INK,
    sticker: '/sticker3.png',
    items: ['Fill in the form', 'Add your child’s details', 'Bring ID & health records', 'Choose a start date'],
    left: '38%',
    top: '2%',
    rot: -2,
    stickerRot: -8,
    stickerSide: 'right-4',
  },
  {
    title: 'settle in',
    bg: MINT,
    color: INK,
    sticker: '/sticker4.png',
    items: ['Short trial days', 'A gentle first week', 'Daily updates for you', 'Teachers by your side'],
    left: '57%',
    top: '10%',
    rot: 4,
    stickerRot: 12,
    stickerSide: 'left-4',
  },
  {
    title: 'enjoy together',
    bg: LIGHT_PINK,
    color: INK,
    sticker: '/sticker5.png',
    items: ['Play, learn and grow', 'Celebrate every milestone', 'Stay close with us', 'Watch them shine'],
    left: '76%',
    top: '20%',
    rot: -3,
    stickerRot: -10,
    stickerSide: 'right-4',
  },
];

// ==============================
// MENU
// ==============================

const MENU_ITEMS = [
  { id: 'hero', label: 'Home', labelSmall: '01', timeline: 0 },
  { id: 'story', label: 'Our Story', labelSmall: '02', timeline: 1.1 },
  { id: 'approach', label: 'Our Approach', labelSmall: '03', timeline: 2.6 },
  { id: 'values', label: 'Our Values', labelSmall: '04', timeline: 3.6 },
  { id: 'team', label: 'Meet Our Team', labelSmall: '05', timeline: 10.2 },
  { id: 'day', label: 'A Day at Little Nest', labelSmall: '06', timeline: 18.0 },
  { id: 'discover', label: 'Come & Know Us', labelSmall: '07', timeline: 29.3 },
  { id: 'join', label: 'Join Our Family', labelSmall: '08', timeline: 41.6 },
];

// ==============================
// A DAY AT LITTLE NEST
// ==============================

const DAY = [
  {
    time: '07:30',
    title: 'Warm Welcome',
    text: 'Hugs at the door, a cheerful hello and a calm, happy start to the day.',
    image: '/day1.jpg',
    sticker: '/sticker1.png',
    color: PINK,
    rot: -3,
    stickerRot: -12,
  },
  {
    time: '09:00',
    title: 'Songs & Stories',
    text: 'We gather in a cosy circle to sing, clap and dive into a brand new story.',
    image: '/day2.jpg',
    sticker: '/sticker2.png',
    color: BLUE,
    rot: 3,
    stickerRot: 10,
  },
  {
    time: '10:30',
    title: 'Tasty Snack Time',
    text: 'Fresh, colorful and healthy bites, shared at the table with new friends.',
    image: '/day3.jpg',
    sticker: '/sticker3.png',
    color: MINT,
    rot: -2,
    stickerRot: -8,
  },
  {
    time: '12:00',
    title: 'Garden Play',
    text: 'Running, climbing and splashing outside, where energy turns into confidence.',
    image: '/day4.jpg',
    sticker: '/sticker4.png',
    color: YELLOW,
    rot: 4,
    stickerRot: 12,
  },
  {
    time: '13:30',
    title: 'Cozy Nap',
    text: 'Soft blankets, dim lights and gentle lullabies for a calm, restful break.',
    image: '/day5.jpg',
    sticker: '/sticker5.png',
    color: LIGHT_PINK,
    rot: -4,
    stickerRot: -10,
  },
  {
    time: '15:30',
    title: 'Art & Goodbye Hugs',
    text: 'Little hands create something special to take home, then a big goodbye hug.',
    image: '/day6.jpg',
    sticker: '/sticker1.png',
    color: BLUE,
    rot: 3,
    stickerRot: 8,
  },
];

const DAY_START = 18.0; // when the day section starts sliding in
const DAY_IN = 1.2; // slide-in duration
const DAY_HOLD = 0.8; // pause before the first / after the last moment
const DAY_STEP = 1.6; // time between two moments
const DAY_TRANS = 0.7; // duration of one transition

const DAY_LEN =
  DAY_IN + DAY_HOLD + (DAY.length - 2) * DAY_STEP + DAY_TRANS + DAY_HOLD;

// when the horizontal "Come & know us" section starts
const H_AT = DAY_START + DAY_LEN;

// ==============================
// SHAPES
// ==============================

type Shape = {
  src: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  size: string;
  rot: number;
  amp: number;
  dur: number;
  delay: number;
  translate?: string;
};

const HERO_SHAPES: Shape[] = [
  {
    src: '/shape2.png',
    right: '0%',
    bottom: '20%',
    translate: '50% 0',
    size: 'clamp(120px, 12vw, 220px)',
    rot: 14,
    amp: 12,
    dur: 5.4,
    delay: -1.8,
  },
];

const TEAM_SHAPES: Shape[] = [
  { src: '/shape1.png', left: '6%', top: '12%', size: 'clamp(64px, 8vw, 160px)', rot: -10, amp: 34, dur: 5.2, delay: 0 },
  { src: '/shape2.png', left: '14%', bottom: '14%', size: 'clamp(56px, 6.8vw, 136px)', rot: 12, amp: 40, dur: 6.1, delay: -2 },
  { src: '/shape4.png', right: '28%', top: '12%', size: 'clamp(48px, 5.6vw, 116px)', rot: -14, amp: 30, dur: 5.8, delay: -3 },
  { src: '/shape5.png', right: '8%', top: '18%', size: 'clamp(68px, 8.6vw, 172px)', rot: 10, amp: 36, dur: 6.4, delay: -0.5 },
  { src: '/shape6.png', right: '14%', bottom: '12%', size: 'clamp(56px, 6.8vw, 136px)', rot: -8, amp: 42, dur: 5.6, delay: -2.5 },
  { src: '/shape1.png', right: '40%', bottom: '10%', size: 'clamp(44px, 4.8vw, 100px)', rot: -6, amp: 28, dur: 5, delay: -3.2 },
];

const MENU_SHAPES: Shape[] = [
  { src: '/shape1.png', left: '5%', top: '14%', size: 'clamp(50px, 6vw, 120px)', rot: -10, amp: 26, dur: 5.4, delay: 0 },
  { src: '/shape2.png', left: '8%', bottom: '10%', size: 'clamp(44px, 5.5vw, 110px)', rot: 12, amp: 30, dur: 6.2, delay: -2 },
  { src: '/shape5.png', right: '6%', top: '14%', size: 'clamp(56px, 7vw, 140px)', rot: 10, amp: 28, dur: 6, delay: -1 },
  { src: '/shape6.png', right: '10%', bottom: '8%', size: 'clamp(44px, 5.5vw, 110px)', rot: -8, amp: 32, dur: 5.6, delay: -3 },
];

const DAY_SHAPES: Shape[] = [
  { src: '/shape1.png', left: '2%', bottom: '20%', size: 'clamp(44px, 5vw, 96px)', rot: -10, amp: 26, dur: 5.4, delay: 0 },
  { src: '/shape2.png', right: '3%', top: '24%', size: 'clamp(44px, 5vw, 96px)', rot: 12, amp: 30, dur: 6.2, delay: -2 },
];

// ==============================
// FLOATING SHAPES
// ==============================

function FloatingShapes({ shapes }: { shapes: Shape[] }) {
  return (
    <>
      <style>{`
        @keyframes shape-float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, var(--amp), 0);
          }
        }

        .shape-float {
          animation:
            shape-float
            var(--dur)
            ease-in-out
            var(--delay)
            infinite;

          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .shape-float {
            animation: none;
          }
        }
      `}</style>

      {shapes.map((sh, i) => (
        <img
          key={`${sh.src}-${i}`}
          src={sh.src}
          alt=""
          draggable={false}
          className="shape-float pointer-events-none absolute select-none"
          style={
            {
              left: sh.left,
              right: sh.right,
              top: sh.top,
              bottom: sh.bottom,
              width: sh.size,
              rotate: `${sh.rot}deg`,
              translate: sh.translate,
              '--amp': `${-sh.amp}px`,
              '--dur': `${sh.dur}s`,
              '--delay': `${sh.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </>
  );
}

// ==============================
// CIRCLE BADGE
// ==============================

function CircleBadge({
  text = 'PLAY • LEARN • GROW • SMILE • ',
  size = 'clamp(90px, 9vw, 170px)',
}: {
  text?: string;
  size?: string;
}) {
  return (
    <>
      <style>{`
        @keyframes badge-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .badge-spin {
          animation: badge-spin 16s linear infinite;
          transform-origin: 50% 50%;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .badge-spin {
            animation: none;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 200 200"
        className="badge-spin h-full w-full"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <defs>
          <path
            id="badge-circle"
            d="M100,100 m-64,0 a64,64 0 1,1 128,0 a64,64 0 1,1 -128,0"
          />
        </defs>

        <circle cx="100" cy="100" r="98" fill={YELLOW} />

        <text fontSize="17.5" fontWeight="800" letterSpacing="3" fill={INK}>
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
    </>
  );
}

// ==============================
// BLUE
// ==============================

const BLUE_BASE = '#eaf4fa';

// ==============================
// TEAM INTERACTION
// ==============================

function setTeamActive(root: HTMLElement | null, next: number | null) {
  if (!root) return;

  root.dataset.active = next === null ? '' : String(next);

  const hasActive = next !== null;

  const strips = root.querySelectorAll<HTMLElement>('.strip');

  strips.forEach((strip, i) => {
    const isActive = next === i;
    const showMini = hasActive && !isActive;

    const compact = strip.querySelector('.strip-compact');
    const mini = strip.querySelector('.strip-mini');
    const detail = strip.querySelector('.strip-detail');

    gsap.to(strip, {
      flexGrow: !hasActive ? 1 : isActive ? 10 : 0.6,
      duration: 0.9,
      ease: 'power3.inOut',
      overwrite: 'auto',
    });

    gsap.to(compact, {
      autoAlpha: hasActive ? 0 : 1,
      duration: 0.3,
      delay: hasActive ? 0 : 0.6,
      overwrite: 'auto',
    });

    gsap.to(mini, {
      autoAlpha: showMini ? 1 : 0,
      duration: 0.3,
      delay: showMini ? 0.6 : 0,
      overwrite: 'auto',
    });

    gsap.to(detail, {
      autoAlpha: isActive ? 1 : 0,
      duration: isActive ? 0.5 : 0.25,
      delay: isActive ? 0.55 : 0,
      overwrite: 'auto',
    });
  });
}

// ==============================
// RIBBON TYPES
// ==============================

type RibbonSeg = {
  el: SVGPathElement;
  start: number;
  len: number;
};

type RibbonData = {
  total: number;
  segments: RibbonSeg[];
};

// ==============================
// HERO
// ==============================

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const archPathRef = useRef<SVGPathElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroShapesRef = useRef<HTMLDivElement>(null);
  const nextContentRef = useRef<HTMLDivElement>(null);
  const thirdTextRef = useRef<HTMLDivElement>(null);
  const curtainsRef = useRef<HTMLDivElement>(null);
  const stripsRef = useRef<HTMLDivElement>(null);
  const horizRef = useRef<HTMLDivElement>(null);
  const horizTrackRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const horizTextRef = useRef<HTMLDivElement>(null);
  const videosGroupRef = useRef<HTMLDivElement>(null);
  const ribbonSvgRef = useRef<SVGSVGElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const windowGridRef = useRef<HTMLDivElement>(null);

  // ==============================
  // MENU NAVIGATION
  // ==============================

  const navigateToSection = (id: string) => {
    const trigger = scrollTriggerRef.current;
    const timeline = trigger?.animation as gsap.core.Timeline | undefined;
    const target = document.getElementById(id); // العنصر بالـ id
    const overlay = overlayRef.current;
    const item = MENU_ITEMS.find((m) => m.id === id);

    if (!trigger || !timeline || !target || !overlay || !item) {
      setMenuOpen(false);
      return;
    }

    // وقت هبوط القسم: لابل land-<id> (حيث يكتمل ظهور القسم)
    const label = timeline.labels[`land-${id}`] ?? timeline.labels[id];
    const targetTime = typeof label === 'number' ? label : item.timeline;

    const duration = timeline.duration();
    const progress =
      duration > 0 ? Math.min(1, Math.max(0, targetTime / duration)) : 0;

    const targetScroll = trigger.start + (trigger.end - trigger.start) * progress;

    setMenuOpen(false);

    // انتقال مباشر: تلاشي -> قفز للقسم -> ظهور
    gsap
      .timeline()
      .to(overlay, { autoAlpha: 1, duration: 0.35, ease: 'power2.inOut' })
      .add(() => {
        window.scrollTo({ top: targetScroll, behavior: 'auto' });
        ScrollTrigger.update();
        trigger.getTween()?.progress(1); // ينهي تأثير scrub فوراً
      })
      .to(overlay, {
        autoAlpha: 0,
        duration: 0.45,
        ease: 'power2.inOut',
        delay: 0.1,
      });
  };

  const openTeam = (i: number) => {
    const root = stripsRef.current;

    if (!root || root.dataset.active === String(i)) {
      return;
    }

    setTeamActive(root, i);
  };

  const closeTeam = () => setTeamActive(stripsRef.current, null);

  // ==============================
  // GSAP
  // ==============================

  useLayoutEffect(() => {
    type Pt = { x: number; y: number };

    // عند الريفرش: لا نسمح للمتصفح باسترجاع موضع التمرير (كان يهبط على الفوتر)
    // ونقفل التمرير حتى تنتهي حركة الدخول ويُنشأ الـ ScrollTrigger.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    document.documentElement.style.overflow = 'hidden';

    let ribbonData: RibbonData | null = null;

    let ribbonP = 0;
    let kneeP = 0.78;

    const TEXT_UNITS = 5.7;
    const VIDEO_UNITS = 6;

    const HORIZ_UNITS = TEXT_UNITS + VIDEO_UNITS;

    const tk = TEXT_UNITS / HORIZ_UNITS;

    const easeHoriz = (t: number) =>
      t < tk
        ? (t / tk) * kneeP
        : kneeP + ((t - tk) / (1 - tk)) * (1 - kneeP);

    const updateRibbon = () => {
      const data = ribbonData;

      if (!data) return;

      const f = Math.min(1, Math.max(0, (ribbonP - kneeP) / (0.97 - kneeP)));

      const drawn = data.total * f;

      data.segments.forEach((s) => {
        const visible = Math.min(s.len, Math.max(0, drawn - s.start));

        s.el.style.strokeDashoffset = String(s.len - visible);
      });
    };

    const buildRibbon = () => {
      const group = videosGroupRef.current;
      const track = horizTrackRef.current;
      const svg = ribbonSvgRef.current;

      if (!group || !track || !svg) return;

      const items = Array.from(group.querySelectorAll<HTMLElement>('.vid-item'));

      if (items.length < 4) return;

      const W = group.offsetWidth;
      const H = group.offsetHeight;

      const vh = window.innerHeight;
      const vw = window.innerWidth;

      const pad = vh * 0.5;

      const stroke = Math.max(16, vw * 0.014);

      svg.setAttribute('width', String(W));
      svg.setAttribute('height', String(H + pad * 2));
      svg.setAttribute('viewBox', `0 0 ${W} ${H + pad * 2}`);

      svg.style.top = `${-pad}px`;

      const rect = (el: HTMLElement, parent: HTMLElement) => {
        const l = parent.offsetLeft + el.offsetLeft;
        const t = pad + parent.offsetTop + el.offsetTop;

        return {
          l,
          t,
          r: l + el.offsetWidth,
          b: t + el.offsetHeight,
          w: el.offsetWidth,
          h: el.offsetHeight,
        };
      };

      const V = items.map((it) =>
        rect(it.querySelector<HTMLElement>('.vid-media')!, it)
      );

      const T = items.map((it) =>
        rect(it.querySelector<HTMLElement>('.vid-text')!, it)
      );

      const vpTop = pad + H / 2 - vh / 2;
      const vpBottom = pad + H / 2 + vh / 2;

      const rx = Math.max(56, vh * 0.1);
      const ry = rx * 0.9;
      const c = rx * 0.22;

      const loopAdvance = 2 * Math.PI * c;

      const yStart = V[0].t + V[0].h * 0.8;

      const yAbove2 = Math.min(
        V[1].t - stroke * 1.4,
        Math.max(V[1].t - vh * 0.07, vpTop + ry * 1.7 + stroke * 1.6)
      );

      const yBelow3 = Math.min(V[2].b + vh * 0.06, vpBottom - stroke * 1.6);

      const gap1 = (T[0].r + V[1].l) / 2;
      const gap2 = (T[1].r + V[2].l) / 2;
      const gap3 = (T[2].r + V[3].l) / 2;

      const yEnd = Math.min(
        V[3].b - stroke,
        Math.max(V[3].t + stroke, yBelow3 - vh * 0.03)
      );

      const xEnd = V[3].l + stroke * 0.6;

      const xLoopA = V[0].r + 70;
      const xLoopB = V[1].l + 20;

      const afterA = xLoopA + loopAdvance;
      const afterB = xLoopB + loopAdvance;

      type Seg =
        | { k: 'p'; x: number; y: number }
        | { k: 'loop'; x: number; y: number; dir: 1 | -1; s: number };

      const spec: Seg[] = [
        { k: 'p', x: V[0].r, y: yStart },
        { k: 'p', x: V[0].r + 30, y: yStart },
        { k: 'loop', x: xLoopA, y: yStart, dir: 1, s: 1 },
        { k: 'p', x: Math.max(afterA + 40, T[0].r - 10), y: yStart },
        { k: 'p', x: gap1 - 10, y: (yStart + yAbove2) / 2 },
        { k: 'p', x: gap1 + 22, y: yAbove2 + (yStart - yAbove2) * 0.06 },
        { k: 'p', x: xLoopB - 30, y: yAbove2 },
        { k: 'loop', x: xLoopB, y: yAbove2, dir: -1, s: 0.85 },
        { k: 'p', x: afterB + 40, y: yAbove2 },
        { k: 'p', x: gap2 - 30, y: yAbove2 + vh * 0.02 },
        { k: 'p', x: gap2, y: (yAbove2 + yBelow3) / 2 },
        { k: 'p', x: gap2 + 40, y: yBelow3 - vh * 0.02 },
        { k: 'p', x: V[2].l + V[2].w * 0.5, y: yBelow3 },
        { k: 'p', x: T[2].l + T[2].w * 0.5, y: yBelow3 - vh * 0.01 },
        { k: 'p', x: gap3, y: yBelow3 - vh * 0.02 },
        { k: 'p', x: xEnd, y: yEnd },
      ];

      const crSample = (P: Pt[]) => {
        const out: Pt[] = [];

        for (let i = 0; i < P.length - 1; i++) {
          const p0 = P[Math.max(0, i - 1)];
          const p1 = P[i];
          const p2 = P[i + 1];
          const p3 = P[Math.min(P.length - 1, i + 2)];

          const n = Math.max(
            2,
            Math.ceil(Math.hypot(p2.x - p1.x, p2.y - p1.y) / 8)
          );

          for (let k = 0; k < n; k++) {
            const t = k / n;
            const t2 = t * t;
            const t3 = t2 * t;

            const f = (a: number, b: number, c2: number, d: number) =>
              0.5 *
              (2 * b +
                (-a + c2) * t +
                (2 * a - 5 * b + 4 * c2 - d) * t2 +
                (-a + 3 * b - 3 * c2 + d) * t3);

            out.push({
              x: f(p0.x, p1.x, p2.x, p3.x),
              y: f(p0.y, p1.y, p2.y, p3.y),
            });
          }
        }

        out.push(P[P.length - 1]);

        return out;
      };

      const loopPts = (x0: number, y0: number, dir: 1 | -1, sc: number) => {
        const out: Pt[] = [];

        for (let th = Math.PI; th <= 3 * Math.PI + 0.0001; th += 0.08) {
          out.push({
            x: x0 + c * sc * (th - Math.PI) - rx * sc * Math.sin(th),
            y: y0 + dir * ry * sc * (1 + Math.cos(th)),
          });
        }

        return out;
      };

      const pts: Pt[] = [];
      let run: Pt[] = [];

      const flush = () => {
        if (run.length > 1) {
          pts.push(...crSample(run));
        } else if (run.length === 1) {
          pts.push(run[0]);
        }

        run = [];
      };

      for (const sg of spec) {
        if (sg.k === 'p') {
          run.push({ x: sg.x, y: sg.y });
        } else {
          run.push({ x: sg.x - 30, y: sg.y });

          flush();

          pts.push(...loopPts(sg.x, sg.y, sg.dir, sg.s));

          const end = pts[pts.length - 1];

          run = [end, { x: end.x + 30, y: end.y }];
        }
      }

      flush();

      const cum = [0];

      for (let i = 1; i < pts.length; i++) {
        cum.push(
          cum[i - 1] +
            Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y)
        );
      }

      const total = cum[cum.length - 1];

      svg.replaceChildren();

      const NS = 'http://www.w3.org/2000/svg';

      const bounds = V.slice(0, -1).map((v, i) => (v.r + V[i + 1].l) / 2);

      const segPts: Pt[][] = RIBBON_COLORS.map(() => []);

      let maxX = -Infinity;

      for (const q of pts) {
        maxX = Math.max(maxX, q.x);

        let idx = bounds.findIndex((b) => maxX < b);

        if (idx === -1) {
          idx = RIBBON_COLORS.length - 1;
        }

        segPts[idx].push(q);
      }

      const segments: RibbonSeg[] = [];

      let segStart = 0;

      segPts.forEach((seg, i) => {
        if (seg.length < 2) {
          return;
        }

        const d = seg
          .map((q, k) => `${k ? 'L' : 'M'}${q.x.toFixed(1)},${q.y.toFixed(1)}`)
          .join(' ');

        let segLen = 0;

        for (let k = 1; k < seg.length; k++) {
          segLen += Math.hypot(seg[k].x - seg[k - 1].x, seg[k].y - seg[k - 1].y);
        }

        const el = document.createElementNS(NS, 'path');

        el.setAttribute('fill', 'none');
        el.setAttribute('stroke', RIBBON_COLORS[i]);
        el.setAttribute('stroke-width', String(stroke));
        el.setAttribute('stroke-linecap', 'round');
        el.setAttribute('stroke-linejoin', 'round');
        el.setAttribute('d', d);

        el.style.strokeDasharray = String(segLen);
        el.style.strokeDashoffset = String(segLen);

        svg.appendChild(el);

        segments.push({ el, start: segStart, len: segLen });

        segStart += segLen;
      });

      const D = Math.max(1, track.scrollWidth - vw);

      kneeP = Math.min(
        0.9,
        Math.max(0.2, (group.offsetLeft + V[0].r - vw * 0.72) / D)
      );

      ribbonData = { total, segments };

      updateRibbon();
    };

    const ctx = gsap.context(() => {
      gsap.set(windowRef.current, { height: 0 });
      gsap.set(bgRef.current, { opacity: 0 });
      gsap.set(backdropRef.current, { opacity: 0 });
      gsap.set(heroShapesRef.current, { opacity: 0 });
      gsap.set(subRef.current, { opacity: 0, y: 20 });
      gsap.set(nextContentRef.current, { opacity: 0 });
      gsap.set(thirdTextRef.current, { opacity: 0, x: -40 });

      // ==============================
      // OUR VALUES
      // ==============================

      const curtainsRoot = curtainsRef.current!;

      const pages = curtainsRoot.querySelectorAll('.page');

      const firstContent = curtainsRoot.querySelector('.page-content');

      gsap.set(curtainsRoot, { yPercent: 100 });
      gsap.set(pages, { transformOrigin: '50% 0%' });
      gsap.set(firstContent, { opacity: 0, y: 30 });

      // ==============================
      // TEAM
      // ==============================

      const stripsRoot = stripsRef.current!;

      const teamBackdrop = stripsRoot.querySelector('.team-backdrop');
      const teamTitle = stripsRoot.querySelector('.team-title');
      const fills = stripsRoot.querySelectorAll('.strip-fill');
      const labels = stripsRoot.querySelectorAll('.strip-label');

      gsap.set(teamBackdrop, { yPercent: -100 });
      gsap.set(teamTitle, { opacity: 0, y: 30 });
      gsap.set(fills, { scaleY: 0, transformOrigin: '50% 0%' });
      gsap.set(labels, { opacity: 0, y: 24 });
      gsap.set(stripsRoot.querySelectorAll('.strip-detail, .strip-mini'), {
        autoAlpha: 0,
      });

      // ==============================
      // HORIZONTAL
      // ==============================

      gsap.set(horizRef.current, { yPercent: 100 });

      // ==============================
      // A DAY AT LITTLE NEST
      // ==============================

      const dayRoot = dayRef.current!;

      const daySlides = gsap.utils.toArray<HTMLElement>('.day-slide', dayRoot);
      const dayPhotos = gsap.utils.toArray<HTMLElement>('.day-photo', dayRoot);
      const dayStickers = gsap.utils.toArray<HTMLElement>('.day-sticker', dayRoot);
      const dayDots = gsap.utils.toArray<HTMLElement>('.day-dot', dayRoot);

      const dayFill = dayRoot.querySelector<HTMLElement>('.day-fill');
      const daySun = dayRoot.querySelector<HTMLElement>('.day-sun');

      gsap.set(dayRoot, { yPercent: 100 });
      gsap.set(daySlides.slice(1), { autoAlpha: 0, y: 50 });

      dayPhotos.forEach((el, i) => {
        gsap.set(el, {
          rotation: i === 0 ? DAY[i].rot : DAY[i].rot + 10,
          scale: i === 0 ? 1 : 0.8,
        });
      });

      dayStickers.forEach((el, i) => {
        gsap.set(el, {
          rotation: DAY[i].stickerRot,
          scale: i === 0 ? 1 : 0,
        });
      });

      gsap.set(dayDots[0], { backgroundColor: INK, scale: 1.3 });
      gsap.set(dayFill, { scaleX: 0, transformOrigin: '0% 50%' });
      gsap.set(daySun, { left: '0%' });

      // ==============================
      // STEPS
      // ==============================

      const stepsRoot = stepsRef.current!;

      const stepsTitle = stepsRoot.querySelector('.steps-title');

      const stepCards = stepsRoot.querySelectorAll<HTMLElement>('.step-card');

      const stepStickers =
        stepsRoot.querySelectorAll<HTMLElement>('.step-sticker');

      gsap.set(stepsRoot, { yPercent: 100 });
      gsap.set(stepsTitle, { opacity: 0, y: 30 });

      stepCards.forEach((el) =>
        gsap.set(el, {
          x: window.innerWidth + 200,
          rotation: Number(el.dataset.rot) + 420,
        })
      );

      stepStickers.forEach((el) =>
        gsap.set(el, {
          scale: 0,
          rotation: Number(el.dataset.rot) - 40,
        })
      );

      // ==============================
      // INTRO
      // ==============================

      const introTl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete: initScrollAnimation,
      });

      introTl
        .from(stageRef.current, {
          opacity: 0,
          y: 40,
          duration: 2,
          ease: 'power3.out',
        })
        .to({}, { duration: 0.6 })
        .to(windowRef.current, { height: GAP, duration: 2.5 }, 'open')
        .to(bgRef.current, { opacity: 1, duration: 1.2 }, 'open+=0.6')
        .to(heroShapesRef.current, { opacity: 1, duration: 1.2 }, 'open+=0.6')
        .to(subRef.current, { opacity: 1, y: 0, duration: 1.2 }, '-=0.6');

      // ==============================
      // MAIN SCROLL TIMELINE
      // ==============================

      function initScrollAnimation() {
        const arch = { depth: 0 };

        // انتهت حركة الدخول: نفتح التمرير ونُظهر الفوتر
        document.documentElement.style.overflow = '';
        document.documentElement.dataset.heroReady = 'true';

        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: `+=${SCROLL_LENGTH}%`,
            scrub: SCRUB,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        scrollTriggerRef.current = scrollTl.scrollTrigger!;

        // ==============================
        // MENU TIMELINE LABELS
        // ==============================

        scrollTl.addLabel('hero', 0);

        scrollTl
          .to(topRef.current, { opacity: 0, y: -60, duration: 1 }, 0)
          .to(bottomRef.current, { opacity: 0, y: 60, duration: 1 }, 0)
          .to(subRef.current, { opacity: 0, y: -20, duration: 1 }, 0)
          .to(
            heroImgRef.current,
            { opacity: 0, scale: 0.8, duration: 0.3 },
            0.3
          )
          .to(heroShapesRef.current, { opacity: 0, duration: 0.3 }, 0.3)
          .to(
            windowRef.current,
            {
              width: '100vw',
              height: '110vh',
              minHeight: '100vh',
              borderRadius: 0,
              duration: 1,
            },
            0.3
          )
          .to(
            bgRef.current,
            {
              borderRadius: 0,
              clipPath: 'none',
              height: '100%',
              minHeight: '100vh',
              duration: 1,
            },
            0.3
          )
          // خلفية زرقاء بطول الشاشة كاملة تظهر أثناء توسّع النافذة
          .to(backdropRef.current, { opacity: 1, duration: 1, ease: 'none' }, 0.3)
          .to(windowGridRef.current, { opacity: 0, duration: 1, ease: 'none' }, 0.3)
          .to(nextContentRef.current, { opacity: 1, duration: 0.5 }, 1.1);

        scrollTl.addLabel('story', 1.1);

        // ==============================
        // APPROACH
        // ==============================

        if (SHOW_THIRD) {
          scrollTl
            .to(nextContentRef.current, { opacity: 0, duration: 0.4 }, 2.0)
            .to(backdropRef.current, { opacity: 0, duration: 0.6 }, 2.0)
            .to(windowGridRef.current, { opacity: 0.1, duration: 0.6 }, 2.0)
            .to(
              windowRef.current,
              {
                width: '52vw',
                height: '72vh',
                x: '24vw',
                duration: 1.1,
              },
              2.0
            )
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
        }

        scrollTl.addLabel('approach', SHOW_THIRD ? 2.6 : 2);

        // ==============================
        // OUR VALUES
        // ==============================

        scrollTl
          .to(
            curtainsRoot,
            { yPercent: 0, duration: 1.2, ease: 'power2.inOut' },
            3.6
          )
          .to(firstContent, { opacity: 1, y: 0, duration: 0.6 }, 4.8);

        scrollTl.addLabel('values', 3.6);

        pages.forEach((page, i) => {
          if (i === pages.length - 1) return;

          const start = 6.0 + i * 1.8;

          scrollTl
            .to(
              page,
              { rotationX: -180, duration: 1.2, ease: 'power2.inOut' },
              start
            )
            .to(page, { opacity: 0, duration: 0.3, ease: 'none' }, start + 0.9);
        });

        // ==============================
        // TEAM
        // ==============================

        scrollTl
          .to(
            teamBackdrop,
            { yPercent: 0, duration: 1.4, ease: 'power2.inOut' },
            10.2
          )
          .to(
            teamTitle,
            { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' },
            11.6
          )
          .to(
            fills,
            {
              scaleY: 1,
              duration: 1.2,
              ease: 'power2.inOut',
              stagger: 0.25,
            },
            13.4
          )
          .to(
            labels,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              stagger: 0.15,
            },
            15.8
          );

        scrollTl.addLabel('team', 10.2);

        // ==============================
        // HORIZONTAL
        // ==============================

        // ==============================
        // A DAY AT LITTLE NEST
        // ==============================

        scrollTl.to(
          dayRoot,
          { yPercent: 0, duration: DAY_IN, ease: 'power2.inOut' },
          DAY_START
        );

        scrollTl.addLabel('day', DAY_START);

        {
          const dayPct = (i: number) => `${(i / (DAY.length - 1)) * 100}%`;

          for (let i = 1; i < DAY.length; i++) {
            const at = DAY_START + DAY_IN + DAY_HOLD + (i - 1) * DAY_STEP;

            scrollTl
              .to(
                daySlides[i - 1],
                {
                  autoAlpha: 0,
                  y: -50,
                  duration: DAY_TRANS * 0.8,
                  ease: 'power2.in',
                },
                at
              )
              .to(
                daySlides[i],
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: DAY_TRANS,
                  ease: 'power2.out',
                },
                at + DAY_TRANS * 0.4
              )
              .to(
                dayPhotos[i],
                {
                  scale: 1,
                  rotation: DAY[i].rot,
                  duration: DAY_TRANS,
                  ease: 'back.out(1.6)',
                },
                at + DAY_TRANS * 0.4
              )
              .to(
                dayStickers[i],
                { scale: 1, duration: 0.5, ease: 'back.out(2.2)' },
                at + DAY_TRANS * 0.9
              )
              .fromTo(
                dayRoot,
                { backgroundColor: DAY[i - 1].color },
                {
                  backgroundColor: DAY[i].color,
                  duration: DAY_TRANS,
                  ease: 'none',
                },
                at
              )
              .to(
                daySun,
                { left: dayPct(i), duration: DAY_TRANS, ease: 'power2.inOut' },
                at
              )
              .to(
                dayFill,
                {
                  scaleX: i / (DAY.length - 1),
                  duration: DAY_TRANS,
                  ease: 'power2.inOut',
                },
                at
              )
              .to(
                dayDots[i],
                { backgroundColor: INK, scale: 1.3, duration: 0.3 },
                at + DAY_TRANS * 0.5
              );
          }
        }

        scrollTl
          .to(
            horizRef.current,
            { yPercent: 0, duration: 1.2, ease: 'power2.inOut' },
            H_AT
          )
          .to(
            horizTrackRef.current,
            {
              x: () =>
                -(horizTrackRef.current!.scrollWidth - window.innerWidth),
              duration: HORIZ_UNITS,
              ease: easeHoriz,
            },
            H_AT + 1.4
          );

        scrollTl.addLabel('discover', H_AT + 1.4);

        // ==============================
        // TEAM INTERACTION
        // ==============================

        scrollTl
          .set(stripsRoot, { pointerEvents: 'auto' }, 17.2)
          .call(() => setTeamActive(stripsRoot, null), [], 17.95)
          .set(stripsRoot, { pointerEvents: 'none' }, 18.0);

        // ==============================
        // FLOATING IMAGES
        // ==============================

        const floaters =
          horizTrackRef.current!.querySelectorAll<HTMLElement>('.float-img');

        floaters.forEach((el) => {
          const depth = Number(el.dataset.depth);

          scrollTl.to(
            el,
            {
              x: () =>
                -Math.max(
                  0,
                  horizTextRef.current!.offsetWidth - window.innerWidth
                ) *
                (depth - 1),
              duration: HORIZ_UNITS,
              ease: easeHoriz,
            },
            H_AT + 1.4
          );
        });

        // ==============================
        // RIBBON
        // ==============================

        buildRibbon();

        ScrollTrigger.addEventListener('refreshInit', buildRibbon);

        const ribbon = { p: 0 };

        scrollTl.to(
          ribbon,
          {
            p: 1,
            duration: HORIZ_UNITS,
            ease: easeHoriz,
            onUpdate: () => {
              ribbonP = ribbon.p;

              updateRibbon();
            },
          },
          H_AT + 1.4
        );

        // ==============================
        // STEPS
        // ==============================

        const STEPS_AT = H_AT + 1.4 + HORIZ_UNITS + 0.6;

        scrollTl
          .to(
            horizRef.current,
            { yPercent: -100, duration: 1.4, ease: 'none' },
            STEPS_AT
          )
          .to(
            stepsRoot,
            { yPercent: 0, duration: 1.4, ease: 'none' },
            STEPS_AT
          )
          .to(
            stepsTitle,
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            STEPS_AT + 1.2
          );

        scrollTl.addLabel('join', STEPS_AT);

        stepCards.forEach((card, i) => {
          const inner = card.querySelector('.step-card-inner');

          const rot = Number(card.dataset.rot);

          const at = STEPS_AT + 1.8 + i * 0.55;

          scrollTl
            .fromTo(
              card,
              {
                x: () => window.innerWidth + 200,
                rotation: rot + 420,
              },
              {
                x: 0,
                rotation: rot,
                duration: 1.3,
                ease: 'power2.out',
              },
              at
            )
            .fromTo(
              inner,
              { y: 70 },
              { y: -190, duration: 0.65, ease: 'power2.out' },
              at
            )
            .to(inner, { y: 0, duration: 0.65, ease: 'bounce.out' }, at + 0.65);

          const sticker = card.querySelector<HTMLElement>('.step-sticker');

          if (sticker) {
            scrollTl.to(
              sticker,
              {
                scale: 1,
                rotation: Number(sticker.dataset.rot),
                duration: 0.5,
                ease: 'back.out(2.2)',
              },
              at + 1.3
            );
          }
        });

        // نقاط الهبوط: اللحظة التي يكتمل فيها ظهور كل قسم
        // (تُضاف قبل shiftChildren ليتم ترحيلها معه تلقائياً)
        scrollTl.addLabel('land-hero', 0);
        scrollTl.addLabel('land-story', 1.6);
        scrollTl.addLabel('land-approach', 2.0);
        scrollTl.addLabel('land-values', 5.4);
        scrollTl.addLabel('land-team', 17.2);
        scrollTl.addLabel('land-day', DAY_START + DAY_IN + DAY_HOLD);
        scrollTl.addLabel('land-discover', H_AT + 1.4);
        scrollTl.addLabel('land-join', STEPS_AT + 5.8);

        scrollTl.to({}, { duration: 1 }, STEPS_AT + 6.5);

        if (!SHOW_THIRD) {
          scrollTl.shiftChildren(-1.4, true, 3.0);
        }

        ScrollTrigger.refresh();
      }
    }, heroRef);

    return () => {
      document.documentElement.style.overflow = '';
      delete document.documentElement.dataset.heroReady;

      ScrollTrigger.removeEventListener('refreshInit', buildRibbon);

      scrollTriggerRef.current = null;

      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* الفوتر مخفي حتى يجهز الـ ScrollTrigger (يمنع ظهوره قبل الباقي) */}
      <style>{`
        html:not([data-hero-ready='true']) [data-site-footer] {
          display: none !important;
        }
      `}</style>

      <svg
        width="0"
        height="0"
        style={{ position: 'absolute' }}
        aria-hidden="true"
      >
        <defs>
          <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
            <path ref={archPathRef} d="M0,0 L1,0 L1,1 L0,1 Q0,0.5 0,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Transition overlay */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[240] bg-[#fffaf3]"
        style={{ opacity: 0, visibility: 'hidden' }}
      />

      {/* =====================================================
          FIXED MENU BUTTON (toggle: hamburger <-> close)
          ===================================================== */}

      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        className="fixed right-5 top-5 z-[300] grid h-14 w-14 place-items-center rounded-full bg-[#4b3b8f] text-white shadow-lg transition duration-300 hover:scale-105 md:right-8 md:top-8 md:h-16 md:w-16"
      >
        <span className="relative block h-6 w-6">
          {/* Top line */}
          <span
            className={`absolute left-0 h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
              menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[3px]'
            }`}
          />

          {/* Middle line */}
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Bottom line */}
          <span
            className={`absolute left-0 h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
              menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-[3px]'
            }`}
          />
        </span>
      </button>

      {/* =====================================================
          FULL SCREEN MENU
          ===================================================== */}

      <div
        className={`fixed inset-0 z-[250] overflow-hidden bg-[#bfe0f0] transition-all duration-500 ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(75, 59, 143, 0.25) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(75, 59, 143, 0.25) 1px,
                transparent 1px
              )
            `,
            backgroundSize: '48px 48px',
          }}
        />

        <FloatingShapes shapes={MENU_SHAPES} />

        <nav
          className="relative z-[1] flex h-full w-full items-center justify-center overflow-y-auto px-8 py-24"
          aria-label="Main navigation"
        >
          <div className="w-full max-w-5xl">
            <div className="mb-8 flex items-center justify-between border-b-2 border-[#4b3b8f]/30 pb-4">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#4b3b8f]">
                Little Nest
              </span>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#4b3b8f]/60">
                Menu
              </span>
            </div>

            <div className="flex flex-col">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateToSection(item.id)}
                  className="group flex w-full items-center gap-5 py-4 transition duration-300 hover:px-4 md:py-5"
                >
                  <span className="text-[33px] font-black uppercase leading-[0.9] tracking-tight text-[#4b3b8f] transition duration-300 group-hover:translate-x-2">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* =====================================================
          MAIN HERO
          ===================================================== */}

      <section
        ref={heroRef}
        id="hero"
        className="relative flex h-screen items-center justify-center overflow-hidden bg-[#fffaf3] text-[#4b3b8f]"
      >
        {/* Full-screen blue backdrop (Our Story) */}
        <div
          ref={backdropRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{ backgroundColor: BLUE_BASE }}
        >
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(75, 59, 143, 0.22) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(75, 59, 143, 0.22) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '42px 42px',
            }}
          />
        </div>

        <div className="relative z-[1] flex flex-col items-center gap-7 px-6 text-center">
          <div ref={stageRef} className="flex flex-col items-center">
            <span
              ref={topRef}
              className="block whitespace-nowrap text-[clamp(2.2rem,7vw,6rem)] font-extrabold uppercase leading-none tracking-tight"
            >
              {NURSERY_NAME[0]}

              <img
                src={HERO_TITLE_IMAGE}
                alt=""
                draggable={false}
                className="mx-[0.2em] inline-block h-[0.85em] w-[1.7em] select-none rounded-full object-cover align-middle"
              />

              {NURSERY_NAME[1]}
            </span>

            <div
              ref={windowRef}
              className="relative w-[min(65vw,560px)]"
              style={{ borderRadius: 110 }}
            >
              <div
                ref={bgRef}
                className="absolute inset-0 overflow-hidden"
                style={{
                  borderRadius: 110,
                  clipPath: 'url(#arch-clip)',
                  backgroundColor: BLUE_BASE,
                }}
              >
                <div
                  ref={windowGridRef}
                  className="pointer-events-none absolute inset-0 opacity-[0.10]"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        to right,
                        rgba(75, 59, 143, 0.22) 1px,
                        transparent 1px
                      ),
                      linear-gradient(
                        to bottom,
                        rgba(75, 59, 143, 0.22) 1px,
                        transparent 1px
                      )
                    `,
                    backgroundSize: '42px 42px',
                  }}
                />

                <img
                  ref={heroImgRef}
                  src={HERO_BOTTOM_IMAGE}
                  alt=""
                  draggable={false}
                  className="pointer-events-none absolute bottom-0 left-1/2 z-[1] h-[85%] w-auto max-w-[80%] -translate-x-1/2 select-none object-contain object-bottom"
                />

                {/* Our Story */}
                <div
                  ref={nextContentRef}
                  id="story"
                  className="absolute inset-0 z-10 flex items-center justify-center px-[6vw] text-center text-[#4b3b8f]"
                >
                  <p className="max-w-[1400px] text-[clamp(1.7rem,4.7vw,5.2rem)] font-extrabold leading-[1.08] tracking-tight">
                    {INTRO_PARTS.map((part, i) =>
                      'img' in part ? (
                        <img
                          key={`intro-img-${i}`}
                          src={part.img}
                          alt=""
                          draggable={false}
                          className="mx-[0.2em] inline-block h-[1em] w-[1.9em] select-none rounded-full object-cover align-middle"
                        />
                      ) : (
                        <span key={`intro-text-${i}`}>{part.text} </span>
                      )
                    )}
                  </p>
                </div>
              </div>

              <div
                ref={heroShapesRef}
                className="pointer-events-none absolute inset-0"
              >
                <FloatingShapes shapes={HERO_SHAPES} />

                <div
                  className="shape-float pointer-events-none absolute"
                  style={
                    {
                      left: '0%',
                      top: '22%',
                      translate: '-50% 0',
                      '--amp': '-10px',
                      '--dur': '4.6s',
                      '--delay': '0s',
                    } as CSSProperties
                  }
                >
                  <CircleBadge size="clamp(80px, 8vw, 150px)" />
                </div>
              </div>
            </div>

            <span
              ref={bottomRef}
              className="block whitespace-nowrap text-[clamp(2.2rem,7vw,6rem)] font-extrabold uppercase leading-none tracking-tight"
            >
              {BOTTOM_WORDS}
            </span>
          </div>

          <div ref={subRef} className="flex flex-col items-center gap-5">
            <p className="max-w-[520px] text-[1.05rem] font-medium leading-relaxed text-[#7b7694]">
              Play &amp; learn, grow together. A warm, playful nursery where
              every child feels safe, curious and loved.
            </p>

            <button
              type="button"
              onClick={() => navigateToSection('join')}
              className="rounded-full bg-[#4b3b8f] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Contact us
            </button>
          </div>
        </div>

        {/* =====================================================
            OUR APPROACH
            ===================================================== */}

        <div
          id="approach"
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-start px-[8%]"
        >
          <div ref={thirdTextRef} className="max-w-sm text-left">
            <h2 className="mb-3 text-4xl font-bold text-[#4b3b8f]">
              Our Approach
            </h2>

            <p className="font-medium leading-relaxed text-[#7b7694]">
              Play-based learning, gentle routines and caring teachers help
              every child grow at their own pace.
            </p>
          </div>
        </div>

        {/* =====================================================
            OUR VALUES
            ===================================================== */}

        <div
          ref={curtainsRef}
          id="values"
          dir="ltr"
          className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#fffaf3]"
        >
          <div
            className="relative h-[min(80vh,640px)] w-[min(88vw,1100px)]"
            style={{ perspective: 1800 }}
          >
            {CURTAINS.map((c, i) => {
              const sectionId =
                i === 0
                  ? 'playful-learning'
                  : i === 1
                    ? 'caring-teachers'
                    : 'safe-spaces';

              return (
                <div
                  key={c.title}
                  id={sectionId}
                  className="page absolute inset-0"
                  style={{
                    zIndex: 30 - i * 10,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 flex flex-col-reverse items-center overflow-hidden rounded-3xl text-[#4b3b8f] md:flex-row"
                    style={{
                      backgroundColor: c.bg,
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 z-0 opacity-[0.10]"
                      style={{
                        backgroundImage: `
                          linear-gradient(
                            to right,
                            rgba(75, 59, 143, 0.22) 1px,
                            transparent 1px
                          ),
                          linear-gradient(
                            to bottom,
                            rgba(75, 59, 143, 0.22) 1px,
                            transparent 1px
                          )
                        `,
                        backgroundSize: '42px 42px',
                      }}
                    />

                    <div
                      className={`${
                        i === 0 ? 'page-content ' : ''
                      }relative z-10 w-full px-[6%] py-6 text-left md:w-[45%] md:py-0`}
                    >
                      <h2 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
                        {c.title}
                      </h2>

                      <p className="max-w-md text-sm font-medium leading-relaxed text-[#7b7694] md:text-lg">
                        {c.text}
                      </p>
                    </div>

                    <div className="relative z-10 h-1/2 w-full p-10 md:h-full md:w-[55%] md:p-20">
                      <img
                        src={c.image}
                        alt=""
                        draggable={false}
                        className="h-full w-full rounded-2xl object-cover"
                      />
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-3xl"
                    style={{
                      backgroundColor: c.bg,
                      backfaceVisibility: 'hidden',
                      transform: 'rotateX(180deg)',
                      filter: 'brightness(0.92)',
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.10]"
                      style={{
                        backgroundImage: `
                          linear-gradient(
                            to right,
                            rgba(75, 59, 143, 0.22) 1px,
                            transparent 1px
                          ),
                          linear-gradient(
                            to bottom,
                            rgba(75, 59, 143, 0.22) 1px,
                            transparent 1px
                          )
                        `,
                        backgroundSize: '42px 42px',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            TEAM
            ===================================================== */}

        <div
          ref={stripsRef}
          id="team"
          className="pointer-events-none absolute inset-0 z-[60] flex overflow-hidden"
        >
          <div
            className="team-backdrop absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: BLUE_BASE }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage: `
                  linear-gradient(
                    to right,
                    rgba(75, 59, 143, 0.22) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    to bottom,
                    rgba(75, 59, 143, 0.22) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: '42px 42px',
              }}
            />

            <FloatingShapes shapes={TEAM_SHAPES} />

            <h2 className="team-title relative z-10 px-6 text-center text-[clamp(2.6rem,9vw,8rem)] font-black uppercase leading-none tracking-tight text-[#4b3b8f]">
              Meet our team
            </h2>
          </div>

          {PEOPLE.map((p, i) => (
            <div
              key={p.name}
              onClick={() => openTeam(i)}
              className="strip relative z-10 h-full min-w-0 flex-1 cursor-pointer overflow-hidden"
            >
              <div
                className="strip-fill absolute inset-0"
                style={{ backgroundColor: p.color }}
              />

              <div className="strip-label absolute inset-0" style={{ color: p.text }}>
                <div className="strip-compact absolute inset-0 flex flex-col">
                  <div className="flex shrink-0 flex-col items-center gap-1 px-2 pt-6 text-center md:items-start md:px-5 md:pt-8 md:text-left">
                    <h3 className="text-sm font-extrabold leading-tight [writing-mode:vertical-rl] md:text-2xl md:[writing-mode:horizontal-tb]">
                      {p.name}
                    </h3>

                    <p className="hidden text-sm opacity-80 md:block md:text-base">
                      {p.role}
                    </p>
                  </div>

                  <div className="relative mx-2 mt-4 min-h-0 flex-1 overflow-hidden rounded-t-2xl md:mx-5">
                    <img
                      src={p.image}
                      alt={p.name}
                      draggable={false}
                      className="h-full w-full object-cover object-top grayscale"
                    />
                  </div>
                </div>

                <div className="strip-mini absolute inset-0 flex items-start justify-center pt-8 [writing-mode:vertical-rl]">
                  <span className="text-sm font-extrabold tracking-wide">
                    {p.name}
                  </span>
                </div>

                <div className="strip-detail absolute inset-0 flex cursor-default flex-col gap-4 p-5 md:flex-row md:items-center md:gap-12 md:p-14">
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeTeam();
                    }}
                    className="absolute right-4 top-4 z-10 grid h-10 w-10 cursor-pointer place-items-center rounded-full text-lg font-bold shadow-md ring-2 ring-white/70 transition duration-200 hover:scale-110 hover:shadow-lg"
                    style={{ backgroundColor: p.color, color: INK }}
                  >
                    ✕
                  </button>

                  <div className="pr-10 text-left md:w-1/2 md:pr-0">
                    <h3 className="text-3xl font-black leading-none tracking-tight md:text-6xl">
                      {p.name}
                    </h3>

                    <p className="mt-2 text-base font-bold text-[#5a4d99] md:text-2xl">
                      {p.role}
                    </p>

                    <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-[#7b7694] md:text-lg">
                      {p.bio}
                    </p>
                  </div>

                  <div className="relative flex min-h-0 flex-1 items-end justify-center md:h-[90%] md:w-1/2 md:flex-none">
                    <img
                      src={p.image}
                      alt={p.name}
                      draggable={false}
                      className="h-full w-full object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            A DAY AT LITTLE NEST
            ===================================================== */}

        <div
          ref={dayRef}
          id="day"
          dir="ltr"
          className="pointer-events-none absolute inset-0 z-[65] overflow-hidden text-[#4b3b8f]"
          style={{ backgroundColor: DAY[0].color }}
        >
          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(75, 59, 143, 0.22) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(75, 59, 143, 0.22) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '42px 42px',
            }}
          />

          <FloatingShapes shapes={DAY_SHAPES} />

          {/* Label */}
          <div className="absolute left-5 top-6 z-30 md:left-12 md:top-8">
            <span className="inline-block rounded-full bg-[#4b3b8f] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg md:text-xs">
              A Day at Little Nest
            </span>
          </div>

          {/* Slides */}
          {DAY.map((d, i) => (
            <div
              key={d.time}
              className={`day-slide absolute inset-0 z-10 flex items-center ${
                i === 0 ? '' : 'invisible opacity-0'
              }`}
            >
              <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 px-6 pb-32 pt-24 md:grid-cols-2 md:gap-10 md:px-12 md:pt-20">
                {/* Text */}
                <div className="order-2 text-left md:order-1">
                  <span className="mb-2 inline-block rounded-full bg-white/60 px-3 py-1 text-xs font-extrabold tracking-widest md:mb-4">
                    {String(i + 1).padStart(2, '0')} /{' '}
                    {String(DAY.length).padStart(2, '0')}
                  </span>

                  <div className="text-[clamp(4.2rem,15vw,13rem)] font-black leading-[0.85] tracking-tighter">
                    {d.time}
                  </div>

                  <h3 className="mt-3 text-[clamp(1.7rem,4vw,3.4rem)] font-black leading-tight tracking-tight md:mt-5">
                    {d.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm font-medium leading-relaxed text-[#5a4d99] md:mt-3 md:text-lg">
                    {d.text}
                  </p>
                </div>

                {/* Photo */}
                <div className="order-1 flex justify-center md:order-2 md:justify-end md:pr-[6%]">
                  <div className="relative">
                    <div className="day-photo aspect-[3/4] h-[min(34vh,340px)] overflow-hidden rounded-b-[2rem] rounded-t-[999px] bg-[#eaf4fa] shadow-xl md:h-[min(62vh,620px)]">
                      <img
                        src={d.image}
                        alt={d.title}
                        draggable={false}
                        className="h-full w-full select-none object-cover"
                      />
                    </div>

                    <div className="day-sticker absolute -right-6 -top-4 h-16 w-16 md:-right-10 md:-top-6 md:h-28 md:w-28">
                      <img
                        src={d.sticker}
                        alt=""
                        draggable={false}
                        className="shape-float h-full w-full select-none object-contain"
                        style={
                          {
                            '--amp': '-10px',
                            '--dur': '3.8s',
                            '--delay': `${-i * 0.6}s`,
                          } as CSSProperties
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Progress track */}
          <div className="absolute inset-x-0 bottom-6 z-20 md:bottom-10">
            <div className="relative mx-auto h-10 w-[min(84vw,880px)]">
              <div
                className="absolute left-0 h-[3px] w-full rounded-full bg-[#4b3b8f]/20"
                style={{ top: 'calc(50% - 1.5px)' }}
              />

              <div
                className="day-fill absolute left-0 h-[3px] w-full rounded-full bg-[#4b3b8f]"
                style={{ top: 'calc(50% - 1.5px)' }}
              />

              {DAY.map((d, i) => (
                <div key={`dot-${d.time}`}>
                  <span
                    className="day-dot absolute h-3 w-3 rounded-full bg-[#4b3b8f]/25"
                    style={{
                      left: `${(i / (DAY.length - 1)) * 100}%`,
                      top: 'calc(50% - 6px)',
                      marginLeft: -6,
                    }}
                  />

                  <span
                    className="absolute hidden whitespace-nowrap text-[11px] font-bold sm:block"
                    style={{
                      left: `${(i / (DAY.length - 1)) * 100}%`,
                      top: 'calc(50% + 14px)',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    {d.time}
                  </span>
                </div>
              ))}

              <div
                className="day-sun absolute z-10 h-9 w-9"
                style={{ top: 'calc(50% - 18px)', marginLeft: -18 }}
              >
                <span className="badge-spin absolute -inset-1.5 rounded-full border-2 border-dashed border-[#4b3b8f]" />

                <span
                  className="absolute inset-0 rounded-full border-[3px] border-[#4b3b8f]"
                  style={{ backgroundColor: YELLOW }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DISCOVER / HORIZONTAL
            ===================================================== */}

        <div
          ref={horizRef}
          id="discover"
          dir="ltr"
          className="pointer-events-none absolute inset-0 z-[70] flex items-center overflow-hidden bg-[#fffaf3] text-[#4b3b8f]"
        >
          <div
            ref={horizTrackRef}
            className="relative flex w-max items-center px-[5vw] will-change-transform"
          >
            <div ref={horizTextRef} className="relative shrink-0">
              <h2 className="relative z-10 whitespace-nowrap text-[32vw] font-black uppercase leading-none tracking-tighter">
                Come and know us more
              </h2>

              {FLOAT_IMAGES.map((img) => {
                const near = img.depth >= 1;

                return (
                  <img
                    key={img.src}
                    src={img.src}
                    alt=""
                    draggable={false}
                    data-depth={img.depth}
                    className={`float-img absolute rounded-2xl object-cover ${
                      near ? 'z-20' : 'z-0'
                    }`}
                    style={{
                      left: img.left,
                      top: img.top,
                      width: img.w,
                      aspectRatio: img.ratio,
                    }}
                  />
                );
              })}
            </div>

            <div
              ref={videosGroupRef}
              className="relative z-10 flex shrink-0 items-center gap-[8vw] pl-[12vw] pr-[6vw]"
            >
              <svg
                ref={ribbonSvgRef}
                className="pointer-events-none absolute left-0 z-[5] overflow-visible"
                aria-hidden="true"
              />

              {VIDEOS.map((v) => (
                <div
                  key={v.src}
                  className="vid-item relative flex shrink-0 items-center gap-4 md:gap-6"
                  style={{ top: v.offset }}
                >
                  <div className="vid-media relative z-[6] aspect-[9/16] h-[56vh] shrink-0 overflow-hidden rounded-3xl md:h-[62vh]">
                    <video
                      src={v.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p
                    className="vid-text relative z-10 w-[52vw] text-lg font-extrabold leading-snug md:w-[24vw] md:text-3xl lg:text-4xl"
                    style={{ color: v.color }}
                  >
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            JOIN
            ===================================================== */}

        <div
          ref={stepsRef}
          id="join"
          dir="ltr"
          className="pointer-events-none absolute inset-0 z-[90] flex flex-col items-center justify-center gap-6 overflow-hidden bg-[#fffaf3] px-4 text-[#4b3b8f] md:gap-10"
        >
          <h2 className="steps-title text-center text-[clamp(1.7rem,4.2vw,3.6rem)] font-black leading-tight tracking-tight">
            join our family in{' '}
            <span>5 steps:</span>
          </h2>

          <div className="grid w-full max-w-md grid-cols-2 gap-3 md:relative md:block md:h-[min(60vh,540px)] md:w-[min(92vw,1100px)] md:max-w-none">
            {STEPS.map((st, i) => (
              <div
                key={st.title}
                data-rot={st.rot}
                className="step-card relative md:absolute md:left-[var(--l)] md:top-[var(--t)] md:h-[78%] md:w-[23%]"
                style={
                  {
                    zIndex: i + 1,
                    '--l': st.left,
                    '--t': st.top,
                  } as CSSProperties
                }
              >
                <div
                  className="step-card-inner relative h-full rounded-2xl p-4 md:p-5"
                  style={{ backgroundColor: st.bg, color: st.color }}
                >
                  <div
                    data-rot={st.stickerRot}
                    className={`step-sticker pointer-events-none absolute -top-6 ${st.stickerSide} h-14 w-14 md:-top-8 md:h-20 md:w-20`}
                  >
                    <img
                      src={st.sticker}
                      alt=""
                      draggable={false}
                      className="h-full w-full select-none object-contain"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-black lowercase leading-none tracking-tight md:mt-8 md:text-[clamp(1.1rem,1.9vw,1.7rem)]">
                    {st.title}
                  </h3>

                  <div className="my-3 h-[2px] w-full bg-current opacity-90 md:my-4" />

                  <ul className="space-y-1 pr-[4%] text-[10px] leading-snug text-[#6b6585] md:space-y-2 md:text-[clamp(0.6rem,0.95vw,0.85rem)]">
                    {st.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}