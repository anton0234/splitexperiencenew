'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/lib/referral';

interface NavProps {
  hostName?: string | null;
}

export default function Nav({ hostName }: NavProps) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const waUrl = buildWhatsAppUrl("Hi, I'd like to book an experience in Split", hostName);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#explore', label: 'Explore' },
    { href: '#adventure', label: 'Adventure' },
    { href: '#dining', label: 'Dining' },
    { href: '#essentials', label: 'Essentials' },
    { href: '#concierge', label: 'Concierge' },
    { href: '/about', label: 'About' },
  ];

  return (
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

      <div className="desktop-nav" style={{ gap: '32px', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} style={{
            fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: activeSection === link.href.slice(1) ? '#111' : '#666',
            textDecoration: 'none', fontWeight: 400, transition: 'color 0.2s',
            borderBottom: activeSection === link.href.slice(1) ? '2px solid #e8356d' : 'none',
            paddingBottom: activeSection === link.href.slice(1) ? '2px' : '0',
          }}>
            {link.label}
          </a>
        ))}
      </div>

      <button onClick={() => setOpen(!open)} className="hamburger-btn" aria-label="Menu"
        style={{ display: "none", flexDirection: "column", gap: '5px', cursor: 'pointer', background: 'none', border: 'none', padding: '4px' }}>
        <span style={{ display: 'block', width: '22px', height: '2px', background: '#111' }} />
        <span style={{ display: 'block', width: '22px', height: '2px', background: '#111' }} />
        <span style={{ display: 'block', width: '22px', height: '2px', background: '#111' }} />
      </button>

      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-pink nav-book-btn" style={{ padding: '10px 22px', fontSize: '11px', letterSpacing: '0.16em' }}>
        <span className="wa-dot" />Book via WhatsApp
      </a>

      {open && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0,
          background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.07)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column',
          gap: '20px', zIndex: 199,
        }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
              fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#333', textDecoration: 'none', padding: '4px 0',
            }}>
              {link.label}
            </a>
          ))}
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-pink" style={{ marginTop: '8px', justifyContent: 'center' }}>
            <span className="wa-dot" />Book via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
