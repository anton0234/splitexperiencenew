import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = { title: 'Privacy Policy — Split Experience' };

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.9, marginBottom: '18px' }}>{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px', marginTop: '44px', color: '#111' }}>{children}</h2>
);

export default function PrivacyPage() {
  return (
    <StaticPage eyebrow="Split Experience" title="Privacy Policy">
      <P>Last updated: June 2025</P>
      <P>Split Experience (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights.</P>

      <H2>What we collect</H2>
      <P>When you contact us via WhatsApp to make a booking, we receive your name, phone number, and the content of your messages. We do not operate a registration system or collect payment information.</P>
      <P>If you visit our website, we may collect anonymised usage data via Plausible Analytics (a privacy-first analytics tool that does not use cookies and does not track you across sites).</P>

      <H2>How we use your information</H2>
      <P>We use your contact information solely to manage your booking, communicate updates, and provide the services you requested. We do not use it for marketing without your explicit consent.</P>

      <H2>Who we share it with</H2>
      <P>We share your name and booking details with the relevant experience operator in order to fulfil your booking. We do not sell your data to any third party.</P>

      <H2>WhatsApp</H2>
      <P>Our bookings are made via WhatsApp, which is operated by Meta Platforms, Inc. By messaging us on WhatsApp, your messages are subject to WhatsApp&apos;s own privacy policy. We recommend reviewing it at whatsapp.com/legal/privacy-policy.</P>

      <H2>Data retention</H2>
      <P>We retain your contact details and booking history for up to 24 months. You may request deletion at any time by messaging us on WhatsApp.</P>

      <H2>Your rights</H2>
      <P>Under GDPR, you have the right to access the personal data we hold about you, request correction or deletion, and object to certain uses. To exercise any of these rights, contact us on WhatsApp or at hello@splitexperience.com.</P>

      <H2>Cookies</H2>
      <P>This website does not use tracking cookies. Plausible Analytics, which we use to understand site traffic, is cookieless and GDPR-compliant by design.</P>

      <H2>Contact</H2>
      <P>For privacy-related questions, email hello@splitexperience.com or message us on WhatsApp.</P>
    </StaticPage>
  );
}
