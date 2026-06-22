import Image from 'next/image';
import { Experience } from '@/data/experiences';
import { buildWhatsAppUrl } from '@/lib/referral';

interface ExpCardProps {
  exp: Experience;
  hostName?: string | null;
  style?: React.CSSProperties;
  compact?: boolean;
}

export default function ExpCard({ exp, hostName, style, compact }: ExpCardProps) {
  const waUrl = exp.whatsappMessage ? buildWhatsAppUrl(exp.whatsappMessage, hostName) : '';

  const hasTourPage = Boolean(exp.bring);
  const tourHref = hasTourPage
    ? `/tour/${exp.id}${hostName ? `?host=${encodeURIComponent(hostName)}` : ''}`
    : null;
  const cardHref = tourHref ?? exp.affiliateUrl ?? waUrl;
  const isExternal = !hasTourPage;

  return (
    <a
      href={cardHref || undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{ display: 'block', textDecoration: 'none' }}
    >
    <div className="exp-card" style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: compact ? '180px' : '240px', ...style }}>
      <Image src={exp.image} alt={exp.imageAlt} fill sizes="(max-width: 900px) 100vw, 33vw" className="exp-img" />

      <div style={{
        position: 'absolute', top: compact ? '10px' : '16px', left: compact ? '10px' : '16px',
        fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.26)',
      }}>
        {exp.number} · {exp.categoryLabel}
      </div>

      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', padding: compact ? '16px' : '24px',
        background: 'linear-gradient(to top,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.1) 55%,transparent 75%)',
      }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: compact ? '4px' : '7px' }}>
          {exp.duration}
          {exp.location && <> · {exp.location}</>}
          {exp.price && <> · <span style={{ color: '#fff', fontWeight: 700, letterSpacing: '0.1em' }}>{exp.price}</span></>}
        </div>

        <h2 style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: compact ? 'clamp(16px,2vw,26px)' : 'clamp(22px,3vw,44px)', fontWeight: 700,
          textTransform: 'uppercase', color: '#fff',
          lineHeight: 0.95, letterSpacing: '0.02em', marginBottom: compact ? '6px' : '10px',
        }}>
          {exp.title}
          {exp.subtitle && <><br />{exp.subtitle}</>}
        </h2>

        {(exp.ctaLabel || hasTourPage) && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontSize: compact ? '9px' : '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#fff', border: '1px solid rgba(255,255,255,0.35)',
            padding: compact ? '7px 14px' : '10px 18px',
            width: 'max-content',
          }}>
            {!hasTourPage && !exp.affiliateUrl && <span className="wa-dot" />}
            {hasTourPage ? 'See details' : exp.ctaLabel}
          </div>
        )}
      </div>
    </div>
    </a>
  );
}
