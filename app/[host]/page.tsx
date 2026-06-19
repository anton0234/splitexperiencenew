import { slugToName } from '@/lib/referral';
import { getHostConfig } from '@/data/hosts';
import HomePage from '@/components/HomePage';

interface HostPageProps {
  params: Promise<{ host: string }>;
}

export default async function HostPage({ params }: HostPageProps) {
  const { host } = await params;
  const hostName = slugToName(host);
  const hostConfig = getHostConfig(host);
  return <HomePage hostName={hostName} welcomeNote={hostConfig?.welcomeNote} />;
}

// Allow any slug — no static list needed
export const dynamicParams = true;
