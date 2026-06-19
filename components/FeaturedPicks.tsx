import { experiences, featuredIds } from '@/data/experiences';
import { buildWhatsAppUrl } from '@/lib/referral';

interface FeaturedPicksProps {
  hostName?: string | null;
}

export default function FeaturedPicks({ hostName }: FeaturedPicksProps) {
  const featured = featuredIds.map((id) => experiences.find((e) => e.id === id)!).filter(Boolean);
  const askUrl = buildWhatsAppUrl("Hi, help me plan my time in Split", hostName);

  return (
    <div style={{
      background: '#1e1b19',
      display: 'grid', 
      minHeight: '340px',
    }} className="trips-section">
      <div style={{
        padding: '48px 36px', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.06)',
      }} className="trips-left">
        <div style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '14px' }}>
          This season&apos;s picks
        </div>
        <h2 style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(30px,3.5vw,46px)', fontWeight: 700,
          textTransform: 'uppercase', color: '#fff',
          lineHeight: 0.92, letterSpacing: '0.02em', marginBottom: '16px',
        }}>
          Four<br />to start<br />with
        </h2>
        <p style={{ fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, marginBottom: '24px' }}>
          The ones people message us about most.
        </p>
        <a href={askUrl} target="_blank" rel="noopener noreferrer" className="btn-pink" style={{ width: 'max-content', padding: '10px 20px', fontSize: '10px' }}>
          <span className="wa-dot" />Ask us anything
        </a>
      </div>

      <div style={{ overflowX: 'auto', overflowY: 'hidden' }}>
        <div style={{ display: 'flex', height: '100%', minHeight: '340px' }}>
          {featured.map((exp) => (
            <div key={exp.id} className="trip-card-wrap" style={{
              position: 'relative', minWidth: '240px', flexShrink: 0,
              overflow: 'hidden', cursor: 'pointer',
              borderLeft: '1px solid rgba(255,255,255,0.05)',
            }}>
              <img src={exp.image} alt={exp.imageAlt} className="trip-img" />
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', padding: '22px',
                background: 'linear-gradient(to top,rgba(0,0,0,0.82) 0%,transparent 55%)',
              }}>
                <div style={{ position: 'absolute', top: '14px', right: '14px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.48)' }}>
                  {exp.duration}
                </div>
                <div style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '5px' }}>
                  {exp.location}
                </div>
                <div style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, letterSpacing: '0.04em', marginBottom: '12px' }}>
                  {exp.title}{exp.subtitle && <><br />{exp.subtitle}</>}
                </div>
                <a
                  href={exp.affiliateUrl ?? (exp.whatsappMessage ? buildWhatsAppUrl(exp.whatsappMessage, hostName) : '#')}
                  target="_blank" rel="noopener noreferrer"
                  className="trip-btn"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: '#fff', border: '1px solid rgba(255,255,255,0.32)',
                    padding: '8px 14px', background: 'transparent',
                    fontFamily: 'var(--font-inter), sans-serif', width: 'max-content',
                    textDecoration: 'none', transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  <span className="wa-dot" />{exp.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trip-btn:hover { background: #fff !important; color: #111 !important; }
        @media (max-width: 900px) {
          .trips-section { grid-template-columns: 1fr !important; }
          .trips-left { padding: 36px 24px 24px !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>
    </div>
  );
}
