interface HostWelcomeProps {
  hostName: string;
  welcomeNote?: string;
}

export default function HostWelcome({ hostName, welcomeNote }: HostWelcomeProps) {
  return (
    <section className="reveal host-welcome">
      <div className="host-welcome-inner">
        <div style={{
          fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#e8356d', marginBottom: '14px',
        }}>
          Welcome
        </div>

        <h2 style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(28px,4.2vw,56px)', fontWeight: 700,
          textTransform: 'uppercase', color: '#111',
          lineHeight: 1.02, letterSpacing: '0.01em', marginBottom: '18px',
        }}>
          {hostName}
          <span style={{
            fontFamily: 'var(--font-lora), serif', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(15px,2vw,24px)', textTransform: 'none',
            color: '#999', display: 'block', lineHeight: 1.5,
            letterSpacing: '0.01em', marginTop: '8px',
          }}>
            guests get the local list
          </span>
        </h2>

        {welcomeNote && (
          <p style={{
            fontFamily: 'var(--font-lora), serif', fontStyle: 'italic',
            fontSize: 'clamp(14px,1.4vw,17px)', color: '#555',
            lineHeight: 1.8, maxWidth: '620px',
          }}>
            &ldquo;{welcomeNote}&rdquo;
          </p>
        )}
      </div>
    </section>
  );
}
