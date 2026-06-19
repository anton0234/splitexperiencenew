interface TrustStripProps {
  hostName?: string | null;
}

const items = [
  { title: '60 seconds to book', body: 'WhatsApp a local, get a confirmation. No forms, no accounts.' },
  { title: 'Zero filler', body: 'Eleven experiences. Every one tested, argued over, and worth your time.' },
  { title: 'Host trusted', body: "Recommended by Split's top Airbnb hosts — not TripAdvisor." },
  { title: 'Local prices', body: "You pay what you'd pay if you knew someone here." },
];

export default function TrustStrip({ hostName }: TrustStripProps) {
  return (
    <div className="reveal">
      {hostName && (
        <div style={{
          background: '#111', display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '10px', padding: '11px 20px',
          flexWrap: 'wrap',
        }}>
          <div style={{ width: '5px', height: '5px', background: '#e8356d', borderRadius: '50%', flexShrink: 0 }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
            Recommended by your host
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px' }}>·</span>
          <span style={{ fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}>
            {hostName}
          </span>
        </div>
      )}

      <div className="trust-grid">
        {items.map((item, i) => (
          <div key={i} className="trust-item">
            <strong style={{ display: 'block', color: '#111', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '5px' }}>
              {item.title}
            </strong>
            <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
