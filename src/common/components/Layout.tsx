import type { ReactNode } from 'react'
import Icon from './Icon'
import BottomNav from './BottomNav'

export const BasePage = ({ children, tall = false }: { children: ReactNode; tall?: boolean }) => (
  <main className="min-h-screen bg-[#f3f3f3] font-sans text-black">
    <section className={`relative mx-auto w-full bg-white pb-[89px] shadow-2xl shadow-black/10 ${tall ? 'min-h-[1109px]' : 'min-h-screen'}`}>
      {children}
      <BottomNav />
    </section>
  </main>
)

export function PhoneShell({ children, tall = false }: { children: ReactNode; tall?: boolean }) {
  return <BasePage tall={tall}>{children}</BasePage>
}

export function StatusBar() {
  return <div className="flex h-[52px] items-center justify-between px-6 text-[14px] font-bold"><span>9:30</span><div className="flex items-center gap-1.5" aria-hidden="true"><span className="h-3.5 w-4 rounded-t-full bg-black [clip-path:polygon(50%_0,100%_45%,86%_100%,14%_100%,0_45%)]" /><span className="h-3.5 w-3.5 bg-black [clip-path:polygon(100%_0,100%_100%,0_100%)]" /><span className="h-4 w-2 rounded-sm border border-black bg-black" /></div></div>
}

export function TopBar({ title, subtitle, back, right }: { title: string; subtitle?: string; back?: () => void; right?: ReactNode }) {
  return <header className="relative flex h-[38px] items-center justify-center bg-[#fafafa] px-4">{back ? <button type="button" onClick={back} className="absolute left-2 grid h-9 w-9 place-items-center" aria-label="Go back"><Icon name="back" className="h-6 w-6" /></button> : null}<div className="text-center"><h1 className="text-[16px] font-extrabold leading-none">{title}</h1>{subtitle ? <p className="mt-1 text-[14px] font-medium leading-none">{subtitle}</p> : null}</div>{right ? <div className="absolute right-4">{right}</div> : null}</header>
}
