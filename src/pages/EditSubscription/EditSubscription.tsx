import { BasePage, StatusBar, TopBar } from '../../common/components/Layout'
import type { Navigate } from '../../common/types'
import EditActions from './_components/EditActions'
import EditForm from './_components/EditForm'
import SubscriptionSummary from './_components/SubscriptionSummary'

export default function EditSubscription({ go }: { go: Navigate }) {
  return (
    <BasePage>
      <StatusBar />
      <TopBar title="Netflix" subtitle="Subscription" back={() => go('details')} />
      <SubscriptionSummary />
      <EditForm />
      <EditActions go={go} />
    </BasePage>
  )
}
