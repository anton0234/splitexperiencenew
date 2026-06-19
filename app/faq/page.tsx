import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = { title: 'FAQ — Split Experience' };

const faqs = [
  {
    q: 'How do I book?',
    a: 'Click any "Book via WhatsApp" button and a pre-filled message opens in WhatsApp. Send it and we\'ll confirm your booking — usually within an hour.',
  },
  {
    q: 'Do I pay online?',
    a: 'No. Payment is arranged directly with the experience operator, typically on the day. We\'ll confirm the payment method when we confirm your booking.',
  },
  {
    q: 'Are the prices shown per person?',
    a: 'Yes, all prices listed are per person unless otherwise stated. Group rates may be available — just ask when you message us.',
  },
  {
    q: 'Can I book last minute?',
    a: 'Most experiences can be arranged same-day or next-day. Some (particularly boat charters and restaurant reservations at popular spots) need more notice. Message us and we\'ll tell you what\'s possible.',
  },
  {
    q: 'What if the weather is bad?',
    a: 'For outdoor experiences, we\'ll always check the forecast with you before confirming. If conditions change, we\'ll reschedule at no charge.',
  },
  {
    q: 'Do you do custom experiences?',
    a: 'Yes — that\'s what the Concierge section is for. Private boats, full itineraries, special occasions. Tell us what you\'re after and we\'ll make it work.',
  },
  {
    q: 'How were these eleven experiences chosen?',
    a: 'We chose them ourselves — no paid placements, no sponsored listings. Each one was tested, argued over, and only made the list because we\'d genuinely recommend it to someone we like.',
  },
  {
    q: 'I\'m an Airbnb host. How do I partner with you?',
    a: 'Message us on WhatsApp. We\'ll set you up with your own referral link (e.g. splitexperience.com/yourapartment). Every booking from your guests comes tagged with your name, and we\'ll keep you updated on what\'s popular.',
  },
];

export default function FaqPage() {
  return (
    <StaticPage eyebrow="Split Experience" title="FAQ">
      <div style={{ marginTop: '8px' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{
            padding: '28px 0',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: '17px', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.06em',
              color: '#111', marginBottom: '10px',
            }}>
              {faq.q}
            </h3>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.85 }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </StaticPage>
  );
}
