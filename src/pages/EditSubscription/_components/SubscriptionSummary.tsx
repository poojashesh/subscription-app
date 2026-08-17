import { ServiceHeader } from '../../../common/components/Display'

export default function SubscriptionSummary() {
  return (
    <div className="px-4 pt-8">
      <ServiceHeader logo="netflix" title="Netflix" type="Subscription" compact />
    </div>
  )
}
