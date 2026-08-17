import { PrimaryButton } from '../../../common/components/Display'
import Button from '../../../common/components/primitives/Button'
import type { Navigate } from '../../../common/types'

export default function EditActions({ go }: { go: Navigate }) {
  return (
    <div className="px-[34px] pt-12">
      <Button type="button" variant="outline" className="mb-4 h-[48px] w-full text-[12px]">
        Delete subscription
      </Button>
      <PrimaryButton onClick={() => go('details')}>Save Changes</PrimaryButton>
    </div>
  )
}
