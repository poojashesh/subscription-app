import { PrimaryButton } from '../../../common/components/Display'
import type { Navigate } from '../../../common/types'

export default function OverdueDetailsAction({ go }: { go: Navigate }) {
  return (
    <div className="px-[34px] pt-10">
      <PrimaryButton onClick={() => go('recharge')}>Go To App</PrimaryButton>
    </div>
  )
}
