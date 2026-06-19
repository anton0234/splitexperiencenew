import { SITE_CONFIG } from '@/data/experiences';

/**
 * Convert a URL slug to a display name.
 * "apartmentdiana" → "Apartment Diana"
 * "villa-marijana" → "Villa Marijana"
 * "HotelPeristil"  → "Hotel Peristil"
 */
export function slugToName(slug: string): string {
  return slug
    .replace(/([a-z])([A-Z])/g, '$1 $2')   // camelCase → "Apartment Diana"
    .replace(/[-_]/g, ' ')                   // hyphens/underscores → spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalise each word
}

/**
 * Build a WhatsApp deep-link URL.
 * If a hostName is provided, prepends the referral greeting.
 */
export function buildWhatsAppUrl(baseMessage: string, hostName?: string | null): string {
  const referral = hostName
    ? `Hello, I've been referred by ${hostName}. `
    : '';
  const full = referral + baseMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(full)}`;
}
