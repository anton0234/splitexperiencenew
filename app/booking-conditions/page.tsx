import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = { title: 'Booking Conditions — Split Experience' };

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.9, marginBottom: '18px' }}>{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px', marginTop: '44px', color: '#111' }}>{children}</h2>
);

export default function BookingConditionsPage() {
  return (
    <StaticPage eyebrow="Split Experience" title="Booking Conditions">
      <P>These conditions apply to all bookings made through Split Experience (splitexperience.com). By completing a booking, you agree to the following terms.</P>

      <H2>Bookings</H2>
      <P>All bookings are made via WhatsApp and are confirmed by a member of our team. A booking is only confirmed once you receive written confirmation from us. We reserve the right to decline any booking.</P>

      <H2>Payment</H2>
      <P>Payment is made directly to the experience operator, typically on the day of the activity. The price shown on the website is indicative — final pricing is confirmed at the time of booking. Split Experience does not process payments directly.</P>

      <H2>Cancellations by you</H2>
      <P>Cancellations made more than 48 hours before the experience start time are refunded in full. Cancellations made within 48 hours may be subject to a charge at the discretion of the operator. No-shows are non-refundable.</P>
      <P>To cancel, message us on WhatsApp with your booking details.</P>

      <H2>Cancellations by us or the operator</H2>
      <P>If an experience must be cancelled due to weather, safety concerns, or circumstances beyond our control, we will offer you a full refund or rescheduling at no additional cost. We are not liable for any consequential costs (flights, accommodation, etc.).</P>

      <H2>Changes to bookings</H2>
      <P>If you need to change the date or time of your booking, message us as early as possible. Changes are subject to availability and cannot always be guaranteed.</P>

      <H2>Health and safety</H2>
      <P>Guests participate in all activities at their own risk. Some experiences have age, health, or fitness requirements — these will be communicated at the time of booking. Please disclose any relevant medical conditions before confirming.</P>

      <H2>Liability</H2>
      <P>Split Experience acts as an intermediary between guests and experience operators. We are not the operator of any experience and accept no liability for injury, loss, or damage arising from participation in any activity. All operators carry their own insurance.</P>

      <H2>Contact</H2>
      <P>For any questions about these conditions, message us on WhatsApp or email us at hello@splitexperience.com.</P>
    </StaticPage>
  );
}
