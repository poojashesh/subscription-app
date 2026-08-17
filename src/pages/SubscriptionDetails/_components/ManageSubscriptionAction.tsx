import { PrimaryButton } from '../../../common/components/Display'
import type { Navigate } from '../../../common/types'

export default function ManageSubscriptionAction({ go }: { go: Navigate }) {
  return (
    <div className="px-[34px] pt-10">
      <PrimaryButton onClick={() => go('edit')}>Manage Subscription</PrimaryButton>
    </div>
  )
}
