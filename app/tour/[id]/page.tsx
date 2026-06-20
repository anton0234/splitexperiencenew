import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { experiences } from '@/data/experiences';
import TourDetailPage from '@/components/TourDetailPage';

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ host?: string }>;
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

export default async function TourPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { host } = await searchParams;
  const exp = experiences.find((e) => e.id === id && e.bring);
  if (!exp) notFound();
  return <TourDetailPage exp={exp} hostName={host ?? null} />;
}

export const dynamicParams = true;
