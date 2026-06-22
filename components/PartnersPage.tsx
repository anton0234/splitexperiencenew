'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const WA_NUMBER = '385912345678';
const EMAIL = 'partners@splitexperience.com';

function buildPartnerWaUrl() {
  const msg = encodeURIComponent('Pozdrav, zanima me partnerski program Split Experience.');
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

const recentBookings = [
  { guest: 'M. Horvat', experience: 'Tura — Plava špilja', date: '18. lip', amount: '€70', commission: '€7,00', status: 'Isplaćeno' },
  { guest: 'S. Novak',  experience: 'Privatni brod — pola dana', date: '17. lip', amount: '€180', commission: '€18,00', status: 'Isplaćeno' },
  { guest: 'L. Babić',  experience: 'Degustacija vina', date: '15. lip', amount: '€45', commission: '€4,50', status: 'Isplaćeno' },
  { guest: 'A. Perić',  experience: 'Kajak — Zlatni rat', date: '14. lip', amount: '€55', commission: '€5,50', status: 'U obradi' },
];

export default function PartnersPage() {
  return (
    <>
      <ScrollReveal />

      {/* NAV */}
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
          fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase',
          color: '#999', textDecoration: 'none',
        }}>
          ← Stranica za goste
        </Link>
      </nav>

      {/* HERO */}
      <section style={{
        marginTop: '68px',
        padding: '110px 56px 90px',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }} className="partners-hero-section">
        <div style={{ fontSize: '10px', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#e8356d', marginBottom: '28px' }}>
          Za Airbnb domaćine · Split
        </div>
        <h1 style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(48px,7vw,100px)',
          fontWeight: 700, lineHeight: 0.92,
          textTransform: 'uppercase', color: '#111',
          letterSpacing: '0.01em', marginBottom: '0',
          maxWidth: '800px',
        }}>
          Vaši gosti<br />zaslužuju više<br />od TripAdvisora.
          <span style={{
            fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(17px,2.2vw,30px)', textTransform: 'none',
            color: '#bbb', display: 'block', lineHeight: 1.5, marginTop: '16px',
          }}>
            Mi se brinemo o njima. Vi se bavite domaćinstvom.
          </span>
        </h1>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '44px' }}>
          <a href={buildPartnerWaUrl()} target="_blank" rel="noopener noreferrer" className="btn-pink">
            <span className="wa-dot" />Postanite partner
          </a>
          <a href={`mailto:${EMAIL}`} style={{
            background: 'transparent', color: '#111',
            padding: '14px 30px', fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', border: '1px solid rgba(0,0,0,0.18)',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
          }}>
            {EMAIL}
          </a>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="reveal partners-steps" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}>
        {[
          {
            n: '01',
            title: 'Manje pitanja od gostiju',
            body: '"Što da radimo?" — pitanje koje svaki domaćin čuje po deset puta tjedno. Vaš link u dobrodošlici odgovara umjesto vas.',
          },
          {
            n: '02',
            title: 'Bolje recenzije',
            body: 'Gosti koji imaju dobro organiziran boravak ostavljaju bolje ocjene. Svako iskustvo koje preporučujemo osobno smo testirali.',
          },
          {
            n: '03',
            title: 'Provizija usput',
            body: 'Za svaku rezervaciju kroz vaš link primate 5–15% vrijednosti. Bez ikakvog dodatnog posla s vaše strane.',
          },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '48px 40px',
            borderRight: i < 2 ? '1px solid rgba(0,0,0,0.07)' : 'none',
          }}>
            <div style={{ fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontSize: '13px', color: '#e8356d', marginBottom: '18px' }}>
              {item.n}
            </div>
            <div style={{
              fontFamily: 'var(--font-oswald), sans-serif', fontSize: '16px',
              fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em',
              color: '#111', marginBottom: '12px',
            }}>
              {item.title}
            </div>
            <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.85 }}>
              {item.body}
            </div>
          </div>
        ))}
      </section>

      {/* DASHBOARD PREVIEW */}
      <section style={{ background: '#0f0f0f', padding: '80px 56px' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#e8356d', marginBottom: '12px' }}>
              Partnerski portal · Preview
            </div>
            <h2 style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 'clamp(26px,3vw,42px)', fontWeight: 700,
              textTransform: 'uppercase', color: '#fff', lineHeight: 0.95,
            }}>
              Sve na jednom mjestu.
              <span style={{
                fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontWeight: 400,
                fontSize: 'clamp(13px,1.6vw,20px)', textTransform: 'none',
                color: 'rgba(255,255,255,0.28)', lineHeight: 1.5, display: 'block', marginTop: '8px',
              }}>
                Rezervacije, zarada, isplate — transparentno.
              </span>
            </h2>
          </div>
          <div style={{
            fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.08)',
            padding: '8px 16px', whiteSpace: 'nowrap',
          }}>
            Ilustracija · U razvoju
          </div>
        </div>

        <div className="reveal" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.06)' }}>
          {/* Top bar */}
          <div style={{
            padding: '14px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: '#141414',
          }}>
            <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>
              Split<span style={{ color: '#e8356d' }}>.</span>Experience &nbsp;
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', fontWeight: 400 }}>Partnerski portal</span>
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '6px', height: '6px', background: '#e8356d', borderRadius: '50%' }} />
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>Villa Adriatica</span>
            </div>
          </div>

          {/* KPIs */}
          <div className="partners-earnings-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { label: 'Zarada ovog mjeseca', value: '€193', delta: 'lipanj 2026' },
              { label: 'Rezervacija', value: '17', delta: 'kroz vaš link' },
              { label: 'Aktivnih gostiju', value: '9', delta: 'trenutno u Splitu' },
              { label: 'Sljedeća isplata', value: '1. srp.', delta: '€193 na čekanju' },
            ].map((kpi, i) => (
              <div key={i} style={{ padding: '22px 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '10px' }}>
                  {kpi.label}
                </div>
                <div style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '28px', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: '5px' }}>
                  {kpi.value}
                </div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)' }}>{kpi.delta}</div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div style={{ padding: '24px 28px' }}>
            <div style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '16px' }}>
              Nedavne rezervacije
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 80px 80px 120px', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }} className="partners-table-row">
              <span>Gost</span><span>Iskustvo</span><span>Datum</span><span>Iznos</span><span>Provizija</span>
            </div>
            {recentBookings.map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 2fr 80px 80px 120px',
                padding: '13px 0',
                borderBottom: i < recentBookings.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                alignItems: 'center',
              }} className="partners-table-row">
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>{row.guest}</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)' }}>{row.experience}</span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>{row.date}</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{row.amount}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '13px', fontWeight: 600, color: '#fff' }}>{row.commission}</span>
                  <span style={{
                    fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: row.status === 'Isplaćeno' ? '#4ade80' : 'rgba(255,255,255,0.25)',
                    padding: '2px 7px', border: `1px solid ${row.status === 'Isplaćeno' ? 'rgba(74,222,128,0.28)' : 'rgba(255,255,255,0.1)'}`,
                  }}>
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.12)', marginTop: '14px', letterSpacing: '0.06em' }}>
          * Ilustrativni podaci. Sučelje je dostupno svim partnerima pri ulasku u program.
        </div>
      </section>

      {/* APPLY */}
      <section className="reveal" style={{ padding: '100px 56px', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '600px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#e8356d', marginBottom: '20px' }}>
            Prijavite se
          </div>
          <h2 style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: 'clamp(36px,5vw,68px)', fontWeight: 700,
            textTransform: 'uppercase', color: '#111', lineHeight: 0.92, marginBottom: '0',
          }}>
            Radimo s odabranim<br />domaćinima.
            <span style={{
              fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontWeight: 400,
              fontSize: 'clamp(15px,1.8vw,24px)', textTransform: 'none',
              color: '#bbb', display: 'block', lineHeight: 1.5, marginTop: '14px',
            }}>
              Javite se — odgovaramo unutar 24 sata.
            </span>
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '40px' }}>
            <a href={buildPartnerWaUrl()} target="_blank" rel="noopener noreferrer" className="btn-pink">
              <span className="wa-dot" />WhatsApp
            </a>
            <a href={`mailto:${EMAIL}?subject=Upit%20%E2%80%94%20partnerski%20program`} style={{
              background: 'transparent', color: '#111',
              padding: '14px 30px', fontSize: '11px', letterSpacing: '0.2em',
              textTransform: 'uppercase', border: '1px solid rgba(0,0,0,0.18)',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
            }}>
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
              Jedanaest iskustava u Splitu. Za goste i domaćine koji ih preporučuju.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#555', marginBottom: '14px' }}>Za goste</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['/#explore', 'Iskustva'], ['/#dining', 'Restorani'], ['/#essentials', 'Osnove'], ['/#concierge', 'Concierge']].map(([href, label]) => (
                <Link key={href} href={href} className="footer-link">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#555', marginBottom: '14px' }}>Info</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['/partners', 'Partnerski program'], ['/faq', 'FAQ'], ['/booking-conditions', 'Uvjeti rezervacije'], ['/privacy', 'Privatnost']].map(([href, label]) => (
                <Link key={href} href={href} className="footer-link">{label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333' }}>Split, Hrvatska · splitexperience.com</div>
          <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333' }}>© {new Date().getFullYear()} Split Experience</div>
        </div>
      </footer>
    </>
  );
}
