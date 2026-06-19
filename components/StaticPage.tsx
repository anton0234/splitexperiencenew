import Link from 'next/link';

interface StaticPageProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export default function StaticPage({ eyebrow, title, children }: StaticPageProps) {
  return (
    <>
      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '0 56px', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', height: '68px',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '20px',
          letterSpacing: '0.06em', color: '#111', textTransform: 'uppercase', textDecoration: 'none',
        }}>
          Split<span style={{ color: '#e8356d' }}>.</span>Experience
        </Link>
        <Link href="/" style={{
          fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#666', textDecoration: 'none',
        }}>
          ← Back
        </Link>
      </nav>

      {/* Header */}
      <div style={{ marginTop: '68px', padding: '72px 56px 48px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#e8356d', marginBottom: '16px' }}>
          {eyebrow}
        </div>
        <h1 style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(38px,5vw,68px)', fontWeight: 700,
          textTransform: 'uppercase', lineHeight: 0.92, letterSpacing: '0.02em',
        }}>
          {title}
        </h1>
      </div>

      {/* Content */}
      <div style={{ padding: '56px 56px 96px', maxWidth: '780px' }}>
        {children}
      </div>

      {/* Footer */}
      <footer style={{
        background: '#111', padding: '32px 56px',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '16px',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '17px',
          letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none',
        }}>
          Split<span style={{ color: '#e8356d' }}>.</span>Experience
        </Link>
        <div style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3a3a3a' }}>
          Split, Croatia · splitexperience.com
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          nav, footer { padding-left: 24px !important; padding-right: 24px !important; }
          div[style*="padding: '72px 56px'"] { padding: 48px 24px 36px !important; }
          div[style*="padding: '56px 56px'"] { padding: 36px 24px 72px !important; }
        }
      `}</style>
    </>
  );
}
