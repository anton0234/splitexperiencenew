import { buildWhatsAppUrl } from '@/lib/referral';

const conciergeItems = [
  { title: 'Restaurant Reservations', desc: 'The places that are always full. We get you in, at the right table, at the right time.' },
  { title: 'Full Itinerary Planning', desc: 'Tell us how long you have. We plan every day from arrival to departure — nothing left to chance.' },
  { title: 'Special Occasions', desc: "Birthdays, proposals, anniversaries. Tell us what matters and we'll build something around it." },
  { title: 'Hidden Beaches', desc: "The spots locals actually go to on their days off. Not what's on TripAdvisor. Directions provided." },
];

interface ConciergeProps {
  hostName?: string | null;
}

export default function Concierge({ hostName }: ConciergeProps) {
  const waUrl = buildWhatsAppUrl("Hi, I'd like to arrange something custom in Split", hostName);

  return (
    <div id="concierge" className="reveal concierge-grid" style={{ background: '#1e1b19' }}>
      <div className="con-left">
        <div style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#e8356d', marginBottom: '22px' }}>
          11 of 11 · Local Concierge
        </div>
        <h2 style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(32px,4.2vw,56px)', fontWeight: 700,
          textTransform: 'uppercase', color: '#fff', lineHeight: 0.92, marginBottom: '6px',
        }}>
          Want<br />Something<br />Else?
          <span style={{
            fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(15px,2vw,24px)', textTransform: 'none',
            color: 'rgba(255,255,255,0.32)', display: 'block',
            lineHeight: 1.5, marginTop: '10px',
          }}>
            Name it. We&apos;ll make it happen.
          </span>
        </h2>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.85, margin: '24px 0 32px' }}>
          Private boat. Hidden beach. Birthday dinner inside a Roman palace. A full week planned from the moment you land — usually sorted within the hour.
        </p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-pink">
          <span className="wa-dot" />Talk to a local
        </a>
      </div>

      <div className="con-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {conciergeItems.map((item, i) => (
          <div key={i} style={{
            padding: '18px 0',
            borderBottom: i < conciergeItems.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            display: 'grid', gridTemplateColumns: '16px 1fr', gap: '16px', alignItems: 'start',
          }}>
            <div style={{ fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', color: '#e8356d', fontSize: '18px' }}>—</div>
            <div>
              <div style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: '4px' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.33)', lineHeight: 1.7 }}>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
