import { SimpleRow } from '../../../common/components/Cards'
import { SectionTitle } from '../../../common/components/Display'

const paymentDates = ['22 May 2026', '22 April 2026', '22 March 2026']

export default function RecentPayments() {
  return (
    <>
      <SectionTitle title="Recent Payments" action="View All" className="mt-6" />
      <div className="px-4">
        {paymentDates.map((date) => (
          <SimpleRow key={date} left={date} right="₹649" caption="Paid" />
        ))}
      </div>
    </>
  )
}
