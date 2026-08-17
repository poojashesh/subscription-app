import Icon from '../../common/components/Icon'
import { BasePage, StatusBar, TopBar } from '../../common/components/Layout'
import type { Navigate } from '../../common/types'
import RechargeSummary from './_components/RechargeSummary'

export default function Recharge({ go }: { go: Navigate }) { return <BasePage><StatusBar /><TopBar title="Recharge" subtitle="9876543210" back={() => go('overdue-details')} right={<Icon name="filter" className="h-5 w-5" />} /><RechargeSummary /></BasePage> }
