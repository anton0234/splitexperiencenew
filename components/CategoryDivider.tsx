interface CategoryDividerProps {
  id: string;
  label: string;
  range: string;
  tagline: string;
  dark?: boolean;
}

export default function CategoryDivider({ id, label, range, tagline, dark }: CategoryDividerProps) {
  return (
    <div id={id} className="reveal cat-divider" style={dark ? { borderTopColor: 'rgba(255,255,255,0.08)' } : undefined}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
        <h3 style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.03em', lineHeight: 1,
          color: dark ? '#fff' : '#111',
        }}>
          {label}
        </h3>
        <span style={{ fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontSize: '14px', color: dark ? 'rgba(255,255,255,0.35)' : '#bbb' }}>
          {range}
        </span>
      </div>
      <p style={{ fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontSize: '13px', color: dark ? 'rgba(255,255,255,0.38)' : '#aaa', marginTop: '6px' }}>
        {tagline}
      </p>
    </div>
  );
}
