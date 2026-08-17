import { SectionTitle } from '../../common/components/Display';
import { BasePage } from '../../common/components/Layout';
import type { Navigate } from '../../common/types';
import HeroCard from './_components/HeroCard';
import HomeHeader from './_components/HomeHeader';
import InsightCard from './_components/InsightsCard';
import QuickActions from './_components/QuickActions';
import SubscriptionList from './_components/SubscriptionList';

export default function Index({ go }: { go: Navigate }) {
  return (
    <BasePage>
      <HomeHeader go={go} />
      <HeroCard />
      <SubscriptionList go={go} />
      <SectionTitle title="Quick Action" className="mt-4" />
      <QuickActions go={go} />
      <InsightCard className="mx-4 mt-5" />
    </BasePage>
  );
  
}
