import { BasePage, StatusBar, TopBar } from '../../common/components/Layout'
import type { Navigate } from '../../common/types'
import OverduePaymentList from './_components/OverduePaymentList'
import OverdueSummary from './_components/OverdueSummary'
import PaymentGuidance from './_components/PaymentGuidance'

export default function Overdue({ go }: { go: Navigate }) {
  return (
    <BasePage>
      <StatusBar />
      <TopBar title="Overdue" back={() => go('subscription')} />
      <OverdueSummary />
      <OverduePaymentList go={go} />
      <PaymentGuidance />
    </BasePage>
  )
}
