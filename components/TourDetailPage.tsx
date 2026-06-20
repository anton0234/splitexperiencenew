import Image from 'next/image';
import Link from 'next/link';
import { Experience } from '@/data/experiences';
import { buildWhatsAppUrl } from '@/lib/referral';

interface TourDetailPageProps {
  exp: Experience;
  hostName?: string | null;
}

export default function TourDetailPage({ exp, hostName }: TourDetailPageProps) {
  const waUrl = exp.whatsappMessage ? buildWhatsAppUrl(exp.whatsappMessage, hostName) : '';

  const meta = [
    { label: 'Duration', value: exp.duration },
    { label: exp.id === 'private-boat-tour' ? 'Guests' : 'Departs', value: exp.id === 'private-boat-tour' ? 'Up to 12' : (exp.departs ?? '—') },
    { label: 'Location', value: exp.location },
    { label: 'Price', value: exp.price ?? 'Ask us' },
  ];

  return (
    <>
      {/* Nav */}
      <nav className="tour-detail-nav">
        <Link href="/" className="tour-detail-logo">
          Split<span>.</span>Experience
        </Link>
        <Link href="/" className="tour-detail-back">← Back</Link>
      </nav>

      {/* Hero */}
      <div className="tour-detail-hero">
        <Image
          src={exp.image}
          alt={exp.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', filter: 'brightness(0.42)' }}
        />
        <div className="tour-detail-hero-overlay">
          <div className="tour-detail-eyebrow">{exp.number} · {exp.categoryLabel}</div>
          <h1 className="tour-detail-h1">
            {exp.title}
            {exp.subtitle && <span className="tour-detail-h1-sub">{exp.subtitle}</span>}
            <span className="tour-detail-h1-duration">{exp.duration}</span>
          </h1>
        </div>
      </div>

      {/* Meta strip */}
      <div className="tour-detail-meta">
        {meta.map((m) => (
          <div key={m.label} className="tour-detail-meta-item">
            <div className="tour-detail-meta-label">{m.label}</div>
            <div className="tour-detail-meta-value">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="tour-detail-body">
        <div className="tour-detail-main">

          <div className="tour-detail-sec-label">About this experience</div>
          <p className="tour-detail-desc">{exp.longDescription ?? exp.description}</p>

          {exp.bring && (
            <>
              <h2 className="tour-detail-sec-title">What to bring</h2>
              <ul className="tour-detail-checklist">
                {exp.bring.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </>
          )}

          {exp.rules && (
            <>
              <h2 className="tour-detail-sec-title">Good to know</h2>
              <div className="tour-detail-rules">
                {exp.rules.map((rule) => (
                  <div key={rule} className="tour-detail-rule">{rule}</div>
                ))}
              </div>
            </>
          )}

          {/* Includes card — shown inline on mobile, hidden on desktop (sidebar shows it) */}
          {exp.includes && (
            <div className="tour-detail-inc-mobile">
              <div className="tour-detail-inc-title">What&apos;s included</div>
              <ul className="tour-detail-inc-list">
                {exp.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop sidebar */}
        <aside className="tour-detail-sidebar">
          <div className="tour-detail-booking-card">
            <div className="tour-detail-bc-label">Price from</div>
            <div className="tour-detail-bc-price">{exp.price ?? 'Ask us'}</div>
            {exp.id === 'krka' && (
              <div className="tour-detail-bc-note">+ National Park entrance fee paid on arrival</div>
            )}
            {exp.id === 'private-boat-tour' && (
              <div className="tour-detail-bc-note">Depends on boat & duration. Split between your group.</div>
            )}
            {exp.id === 'quad-safari' && (
              <div className="tour-detail-bc-note">Depends on route and group size. Bring your driving licence.</div>
            )}
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-pink tour-detail-btn">
              <span className="wa-dot" />Book via WhatsApp
            </a>
            {exp.includes && (
              <>
                <hr className="tour-detail-bc-divider" />
                <div className="tour-detail-inc-title">What&apos;s included</div>
                <ul className="tour-detail-inc-list">
                  {exp.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            )}
          </div>
        </aside>
      </div>

      {/* Mobile sticky bottom CTA */}
      <div className="tour-detail-mobile-cta">
        <div className="tour-detail-mobile-price">
          <small>From</small>
          {exp.price ?? 'Ask us'}
        </div>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-pink tour-detail-mobile-btn">
          <span className="wa-dot" />Book
        </a>
      </div>
    </>
  );
}
