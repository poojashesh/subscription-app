import { Bell } from 'lucide-react'
import Avatar from '../../../common/components/primitives/Avatar'
import type { Navigate } from '../../../common/types'

export default function HomeHeader({ go }: { go: Navigate }) {
  return (
    <section className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-3">
        <Avatar />
        <div>
          <h1 className="text-[16px] font-extrabold leading-tight">Hi, Pooja</h1>
          <p className="text-[10px] font-medium leading-tight">
            Stay on track. We&apos;ll handle the rest.
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => go('notifications')}
        className="grid h-10 w-10 place-items-center rounded-full text-[#063b43] transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#063b43]"
        aria-label="Open notifications"
      >
        <Bell className="h-7 w-7" aria-hidden="true" />
      </button>
    </section>
  )
}
