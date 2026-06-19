import Image from 'next/image';
import { buildWhatsAppUrl } from '@/lib/referral';

interface HeroProps {
  hostName?: string | null;
}

export default function Hero({ hostName }: HeroProps) {
  const talkUrl = buildWhatsAppUrl("Hi, I'd like to plan my trip to Split", hostName);

  return (
    <section className="hero-section">
      <Image
        src="/images/hero.jpg"
        alt="Split Croatia aerial"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(0,0,0,0.76) 0%,rgba(0,0,0,0.18) 65%)' }} />

      <div className="hero-content">
        <div style={{ fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)', marginBottom: '22px' }}>
          Split, Croatia &nbsp;·&nbsp; Eleven hand-picked experiences
        </div>

        <h1 style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(48px,8.5vw,118px)',
          fontWeight: 700, lineHeight: 0.92,
          textTransform: 'uppercase', color: '#fff',
          letterSpacing: '0.01em', marginBottom: '14px',
        }}>
          Split,<br />done<br />right.
          <span style={{
            fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(18px,2.8vw,38px)', textTransform: 'none',
            color: 'rgba(255,255,255,0.55)', display: 'block',
            lineHeight: 1.5, letterSpacing: '0.01em', marginTop: '8px',
          }}>
            No filler. No algorithm.
          </span>
        </h1>

        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.85, maxWidth: '340px', marginBottom: '32px' }}>
          Eleven things worth doing in Split — curated by locals, booked via WhatsApp in sixty seconds.
        </p>

        <div className="hero-ctas">
          <a href={talkUrl} target="_blank" rel="noopener noreferrer" className="btn-pink">
            <span className="wa-dot" />
            Talk to a local
          </a>
          <a href="#explore" className="btn-outline-dark">See all eleven</a>
        </div>
      </div>
    </section>
  );
}
