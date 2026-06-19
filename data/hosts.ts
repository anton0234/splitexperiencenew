// ─────────────────────────────────────────────────────────────
// SPLIT EXPERIENCE — Host / Apartment Config
// One entry per subdomain. Add a new apartment by adding a key
// here that matches the subdomain slug (e.g. "villanova" for
// villanova.splitexperience.com).
//
// If a slug has no entry here, the page still works — it just
// won't show a welcome note (only the auto-generated name).
// ─────────────────────────────────────────────────────────────

export interface HostConfig {
  welcomeNote?: string;
}

export const hosts: Record<string, HostConfig> = {
  // Example — replace slug + note with real apartments as you onboard them.
  villanova: {
    welcomeNote:
      "We've stayed in this neighborhood for years and these are the only places we actually send our friends. Enjoy Split.",
  },
  apartmentspalatum: {
    welcomeNote:
      "You're staying steps from Diocletian's Palace — one of the best-preserved Roman monuments in the world. These are the experiences we'd choose ourselves. Enjoy every minute.",
  },
};

/**
 * Look up a host's welcome note by slug. Case-insensitive.
 */
export function getHostConfig(slug: string): HostConfig | undefined {
  return hosts[slug.toLowerCase()];
}
