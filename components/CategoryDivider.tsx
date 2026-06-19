interface CategoryDividerProps {
  id: string;
  label: string;
  range: string;
  tagline: string;
}

export default function CategoryDivider({ id, label, range, tagline }: CategoryDividerProps) {
  return (
    <div id={id} className="reveal cat-divider">
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
        <h3 style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.03em', lineHeight: 1,
        }}>
          {label}
        </h3>
        <span style={{ fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontSize: '14px', color: '#bbb' }}>
          {range}
        </span>
      </div>
      <p style={{ fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontSize: '13px', color: '#aaa', marginTop: '6px' }}>
        {tagline}
      </p>
    </div>
  );
}
