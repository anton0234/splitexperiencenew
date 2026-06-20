import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { experiences } from '@/data/experiences';
import { slugToName } from '@/lib/referral';
import TourDetailPage from '@/components/TourDetailPage';

interface Props {
  params: Promise<{ host: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const exp = experiences.find((e) => e.id === id);
  if (!exp) return {};
  return {
    title: `${exp.title}${exp.subtitle ? ' ' + exp.subtitle : ''} — Split Experience`,
    description: exp.description,
  };
}

export default async function HostTourPage({ params }: Props) {
  const { host, id } = await params;
  const exp = experiences.find((e) => e.id === id && e.bring);
  if (!exp) notFound();
  const hostName = slugToName(host);
  return <TourDetailPage exp={exp} hostName={hostName} />;
}

export const dynamicParams = true;
