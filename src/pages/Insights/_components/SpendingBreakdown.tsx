import { SectionTitle } from '../../../common/components/Display'
import SpendCards from './SpendCards'
import SpendingsChart from './SpendingsChart'

export default function SpendingBreakdown() {
  return (
    <>
      <SectionTitle title="Spending Breakdown" action="View All" className="mt-5" />
      <SpendingsChart />
      <SpendCards />
    </>
  )
}
