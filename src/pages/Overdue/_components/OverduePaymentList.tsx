import { PaymentRow } from '../../../common/components/Display'
import { overduePayments } from '../../../common/data'
import type { Navigate } from '../../../common/types'

export default function OverduePaymentList({ go }: { go: Navigate }) {
  return (
    <div className="mt-7 px-4">
      {overduePayments.map((payment) => (
        <PaymentRow
          key={payment.name}
          payment={payment}
          onClick={() => go('overdue-details')}
          overdue
        />
      ))}
    </div>
  )
}
