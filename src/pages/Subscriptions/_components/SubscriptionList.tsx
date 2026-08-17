import { PaymentRow, SectionTitle } from '../../../common/components/Display'
import { dueSoon, overduePayments, thisMonth } from '../../../common/data'
import type { Navigate } from '../../../common/types'

export default function SubscriptionList({ go }: { go: Navigate }) {
  return <><SectionTitle title="Due Soon" badge="2" action="View All" className="mt-10" /><div className="px-4">{dueSoon.map((payment) => <PaymentRow key={payment.name} payment={payment} onClick={() => go('details')} />)}</div><SectionTitle title="This Month" badge="5" action="View All" className="mt-5" /><div className="px-4">{thisMonth.map((payment) => <PaymentRow key={payment.name} payment={payment} onClick={() => go(payment.logo === 'spotify' ? 'edit' : 'details')} />)}</div><SectionTitle title="OverDue" badge="2" action="View All" className="mt-6" /><div className="px-4">{overduePayments.slice(0, 1).map((payment) => <PaymentRow key={payment.name} payment={payment} onClick={() => go('overdue-details')} />)}</div></>
}
