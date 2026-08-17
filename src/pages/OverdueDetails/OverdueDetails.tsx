import { InsightCard, ReminderCard } from '../../common/components/Cards'
import { BasePage, StatusBar, TopBar } from '../../common/components/Layout'
import type { Navigate } from '../../common/types'
import OverdueDetailsAction from './_components/OverdueDetailsAction'
import OverdueDetailsPanel from './_components/OverdueDetailsPanel'
import OverdueServiceHero from './_components/OverdueServiceHero'
import RecentPayments from './_components/RecentPayments'

export default function OverdueDetails({ go }: { go: Navigate }) {
  return (
    <BasePage tall>
      <StatusBar />
      <TopBar title="Overdue Details" back={() => go('overdue')} />
      <OverdueServiceHero />
      <OverdueDetailsPanel />
      <ReminderCard />
      <InsightCard className="mx-4 mt-6" />
      <RecentPayments />
      <OverdueDetailsAction go={go} />
    </BasePage>
  )
}
