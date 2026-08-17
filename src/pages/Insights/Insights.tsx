import { BasePage, StatusBar } from '../../common/components/Layout'
import InsightsOverview from './_components/InsightsOverview'
import InsightsHeader from './_components/InsightsHeader'
import SpendingBreakdown from './_components/SpendingBreakdown'

export default function Insights() {
  return (
    <BasePage tall>
      <StatusBar />
      <InsightsHeader />
      <InsightsOverview />
      <SpendingBreakdown />
    </BasePage>
  )
}
