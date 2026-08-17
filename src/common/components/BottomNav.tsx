import { House, IndianRupee, Lightbulb, type LucideIcon } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router'

type Tab = 'home' | 'subscription' | 'insights'

const items: ReadonlyArray<{
  key: Tab
  label: string
  path: string
  icon: LucideIcon
}> = [
  { key: 'home', label: 'Home', path: '/', icon: House },
  {
    key: 'subscription',
    label: 'Subscription',
    path: '/subscriptions',
    icon: IndianRupee,
  },
  { key: 'insights', label: 'Insights', path: '/insights', icon: Lightbulb },
]

function BottomNav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const active: Tab =
    pathname === '/insights'
      ? 'insights'
      : pathname.startsWith('/subscriptions') ||
          pathname.startsWith('/overdue') ||
          pathname === '/recharge'
        ? 'subscription'
        : 'home'

  return (
    <nav
      aria-label="Primary navigation"
      className="absolute inset-x-0 bottom-0 z-20 flex h-[89px] justify-between bg-white px-[11px]"
    >
      {items.map((item) => {
        const selected = active === item.key
        const NavIcon = item.icon

        return (
          <button
            key={item.key}
            type="button"
            onClick={() => navigate(item.path)}
            aria-current={selected ? 'page' : undefined}
            className={`grid h-[79px] w-[75px] content-start justify-items-center gap-[7px] rounded-b-[38px] pt-1 text-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#007e58] ${
              selected ? 'bg-white shadow-[0_6px_7px_rgba(0,0,0,0.24)]' : ''
            }`}
          >
            <span className="text-[10.5px] font-extrabold leading-[10px]">
              {item.label}
            </span>
            <span
              className={`grid h-[50px] w-[50px] place-items-center rounded-full text-[#8fe05b] ${
                selected ? 'bg-[#007e58]' : 'bg-black'
              }`}
            >
              <NavIcon className="h-7 w-7" aria-hidden="true" />
            </span>
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNav
