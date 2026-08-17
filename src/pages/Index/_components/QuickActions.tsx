import {
  BadgeIndianRupee,
  CalendarPlus,
  ReceiptIndianRupee,
  type LucideIcon,
} from 'lucide-react'
import type { Navigate, Screen } from '../../../common/types'

const actions: { label: string; icon: LucideIcon; screen: Screen }[] = [
  { label: 'Add Subscription', icon: CalendarPlus, screen: 'add-subscription' },
  { label: 'Add EMI', icon: BadgeIndianRupee, screen: 'add-emi' },
  { label: 'Add Bill', icon: ReceiptIndianRupee, screen: 'add-bill' },
]

export default function QuickActions({ go }: { go: Navigate }) {
  return (
    <div className="grid grid-cols-3 gap-2 px-4">
      {actions.map((action) => {
        const ActionIcon = action.icon

        return (
          <button
            key={action.label}
            type="button"
            onClick={() => go(action.screen)}
            className="grid h-[84px] place-items-center rounded-lg bg-[#f8f8f8] px-2 text-center text-[10.5px] font-extrabold"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-black">
              <ActionIcon className="h-7 w-7" aria-hidden="true" />
            </span>
            <span>{action.label}</span>
          </button>
        )
      })}
    </div>
  )
}
