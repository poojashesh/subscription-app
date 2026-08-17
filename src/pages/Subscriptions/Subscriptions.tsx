import { BasePage, StatusBar } from '../../common/components/Layout'
import type { Navigate } from '../../common/types'
import Filters from './_components/Filters'
import PaymentAlert from './_components/PaymentAlert'
import SubscriptionList from './_components/SubscriptionList'
import SubscriptionsHeader from './_components/SubscriptionsHeader'
import SubscriptionsOverview from './_components/SubscriptionsOverview'

export default function Subscriptions({ go }: { go: Navigate }) {
  return (
    <BasePage tall>
      <StatusBar />
      <SubscriptionsHeader />
      <SubscriptionsOverview />
      <Filters />
      <SubscriptionList go={go} />
      <PaymentAlert />
    </BasePage>
  )
}
