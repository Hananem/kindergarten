import Hero from '@/components/Hero';

export default function Page() {
  return (
    <main>
      {/* الأقسام الثلاثة كلها منسّقة معًا داخل Hero: الأول والثاني عبر النافذة المتكبّرة،
          والثالث عبر ستارة تصعد من الأسفل وتغطي كل شيء */}
      <Hero />
    </main>
  );
}
