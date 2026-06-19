import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';
import { buildWhatsAppUrl } from '@/lib/referral';

export const metadata: Metadata = { title: 'About Us — Split Experience' };

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.9, marginBottom: '24px' }}>{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '22px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px', marginTop: '48px', color: '#111' }}>{children}</h2>
);

export default function AboutPage() {
  const waUrl = buildWhatsAppUrl("Hi, I'd like to get in touch with Split Experience");
  return (
    <StaticPage eyebrow="Split Experience" title="About Us">
      <P>
        Split Experience started with a simple frustration: every tour booking site in Split showed the same ten overpriced things, stuffed with filler and padded reviews. We knew the city differently — the restaurants that don&apos;t take walk-ins, the boat operators who won&apos;t advertise, the exact time to show up at Krka before the tour buses arrive.
      </P>
      <P>
        So we built something different. Eleven experiences. Each one chosen because we&apos;d genuinely send a friend there. No sponsored placements. No algorithm deciding what gets seen first. Just the eleven things actually worth doing in Split.
      </P>

      <H2>How it works</H2>
      <P>
        We work directly with Split&apos;s best Airbnb hosts and boutique hotels — the people who actually care where their guests spend their time. When a host shares our link, their guests arrive knowing they&apos;ve been sent somewhere trustworthy. Every booking goes via WhatsApp, confirmed by a real person, usually within the hour.
      </P>
      <P>
        We take a small commission from the experience operator — never from you. The prices you see are the prices locals pay.
      </P>

      <H2>Who we are</H2>
      <P>
        We&apos;re based in Split. We live here, eat here, and spend our own time in these places. If something stops being worth it, it comes off the list. That&apos;s the only quality control we need.
      </P>

      <H2>Get in touch</H2>
      <P>
        Questions, partnership enquiries, or want to list your property as a distribution partner — message us on{' '}
        <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#e8356d', textDecoration: 'none' }}>
          WhatsApp
        </a>.
      </P>
    </StaticPage>
  );
}
