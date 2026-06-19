import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HostWelcome from '@/components/HostWelcome';
import TrustStrip from '@/components/TrustStrip';
import CategoryDivider from '@/components/CategoryDivider';
import ExpCard from '@/components/ExpCard';
import Concierge from '@/components/Concierge';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { experiences, categories } from '@/data/experiences';

interface HomePageProps {
  hostName?: string | null;
  welcomeNote?: string;
}

export default function HomePage({ hostName, welcomeNote }: HomePageProps) {
  const explore    = experiences.filter((e) => e.category === 'explore');
  const adventure  = experiences.filter((e) => e.category === 'adventure');
  const dining     = experiences.filter((e) => e.category === 'dining');
  const essentials = experiences.filter((e) => e.category === 'essentials');

  return (
    <>
      <ScrollReveal />
      <Nav hostName={hostName} />
      <Hero hostName={hostName} />
      {hostName && <HostWelcome hostName={hostName} welcomeNote={welcomeNote} />}
      <TrustStrip hostName={hostName} />

      <CategoryDivider {...categories[0]} />
      <div className="reveal exp-grid-3">
        {explore.map((exp) => (
          <ExpCard key={exp.id} exp={exp} hostName={hostName} style={{ height: '46vh' }} />
        ))}
      </div>

      <CategoryDivider {...categories[1]} />
      <div className="reveal exp-grid-3">
        {adventure.map((exp) => (
          <ExpCard key={exp.id} exp={exp} hostName={hostName} style={{ height: '42vh' }} />
        ))}
      </div>

      <CategoryDivider {...categories[2]} />
      <div className="reveal exp-grid-3 exp-grid-3--compact">
        {dining.map((exp) => (
          <ExpCard key={exp.id} exp={exp} hostName={hostName} compact style={{ height: '30vh' }} />
        ))}
      </div>

      <section id="essentials" className="ess-section">
        <CategoryDivider {...categories[3]} />
        <div className="reveal exp-grid-2">
          {essentials.map((exp) => (
            <ExpCard key={exp.id} exp={exp} hostName={hostName} style={{ height: '40vh' }} />
          ))}
        </div>
      </section>

      <Concierge hostName={hostName} />
      <Footer />
    </>
  );
}
