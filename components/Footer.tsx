import Link from 'next/link';

export default function Footer() {
  const siteLinks = [
    { href: '#explore', label: 'Experiences' },
    { href: '#dining', label: 'Dining' },
    { href: '#essentials', label: 'Essentials' },
    { href: '#concierge', label: 'Concierge' },
  ];
  const legalLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/booking-conditions', label: 'Booking Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="site-footer" style={{ background: '#111' }}>
      <div className="footer-grid">
        <div>
          <Link href="/" style={{
            fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '20px',
            letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff',
            textDecoration: 'none', display: 'block', marginBottom: '12px',
          }}>
            Split<span style={{ color: '#e8356d' }}>.</span>Experience
          </Link>
          <p style={{ fontSize: '12px', color: '#444', lineHeight: 1.75, maxWidth: '200px' }}>
            Eleven hand-picked experiences in Split. Booked via WhatsApp in sixty seconds.
          </p>
        </div>

        <div>
          <div style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#555', marginBottom: '14px' }}>Experiences</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {siteLinks.map((l) => <a key={l.href} href={l.href} className="footer-link">{l.label}</a>)}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#555', marginBottom: '14px' }}>Info</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {legalLinks.map((l) => <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>)}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333' }}>
          Split, Croatia · splitexperience.com
        </div>
        <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333' }}>
          © {new Date().getFullYear()} Split Experience
        </div>
      </div>
    </footer>
  );
}
