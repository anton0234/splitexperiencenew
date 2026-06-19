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

      <section id="explore" style={{ background: '#1c1814' }}>
        <CategoryDivider {...categories[0]} dark />
        <div className="reveal exp-grid-3" style={{ paddingBottom: '56px' }}>
          {explore.map((exp) => (
            <ExpCard key={exp.id} exp={exp} hostName={hostName} style={{ height: '46vh' }} />
          ))}
        </div>
      </section>

      <section id="adventure">
        <CategoryDivider {...categories[1]} />
        <div className="reveal exp-grid-3" style={{ paddingBottom: '56px' }}>
          {adventure.map((exp) => (
            <ExpCard key={exp.id} exp={exp} hostName={hostName} style={{ height: '42vh' }} />
          ))}
        </div>
      </section>

      <section id="dining" style={{ background: '#1c1814' }}>
        <CategoryDivider {...categories[2]} dark />
        <div className="reveal exp-grid-3 exp-grid-3--compact" style={{ paddingBottom: '56px' }}>
          {dining.map((exp) => (
            <ExpCard key={exp.id} exp={exp} hostName={hostName} compact style={{ height: '30vh' }} />
          ))}
        </div>
      </section>

      <section id="essentials">
        <CategoryDivider {...categories[3]} />
        <div className="reveal exp-grid-2" style={{ paddingBottom: '56px' }}>
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
