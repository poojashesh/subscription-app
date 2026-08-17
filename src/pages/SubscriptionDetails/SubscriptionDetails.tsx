import { InsightCard, ReminderCard } from '../../common/components/Cards'
import { BasePage, StatusBar, TopBar } from '../../common/components/Layout'
import type { Navigate } from '../../common/types'
import Details from './_components/Details'
import HeroIcon from './_components/HeroIcon'
import ManageSubscriptionAction from './_components/ManageSubscriptionAction'
import Transactions from './_components/Transactions'

export default function SubscriptionDetails({ go }: { go: Navigate }) {
  return (
    <BasePage tall>
      <StatusBar />
      <TopBar title="Netflix" back={() => go('subscription')} />
      <HeroIcon />
      <Details />
      <ReminderCard />
      <InsightCard className="mx-4 mt-6" />
      <Transactions />
      <ManageSubscriptionAction go={go} />
    </BasePage>
  )
}
