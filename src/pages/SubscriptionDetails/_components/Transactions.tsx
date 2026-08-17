import { SimpleRow } from '../../../common/components/Cards'
import { SectionTitle } from '../../../common/components/Display'

export default function Transactions() { return <><SectionTitle title="Recent Payments" action="View All" className="mt-6" /><div className="px-4">{['22 May 2026', '22 April 2026', '22 March 2026'].map((date) => <SimpleRow key={date} left={date} right="₹649" caption="Paid" />)}</div></> }
