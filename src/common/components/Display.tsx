import type { ReactNode } from 'react'
import type { Payment } from '../types'
import Icon from './Icon'

export function Logo({ logo, size = 'base' }: { logo: string; size?: 'sm' | 'base' | 'md' | 'lg' }) {
  const dims = { sm: 'h-[46px] w-[46px]', base: 'h-12 w-12', md: 'h-14 w-14', lg: 'h-14 w-14' }[size]
  const common = `grid ${dims} shrink-0 place-items-center overflow-hidden rounded-[10px] text-center font-black leading-none`
  if (logo === 'netflix') return <span className={`${common} bg-black text-[32px] text-[#e50914]`}>N</span>
  if (logo === 'hotstar') return <span className={`${common} bg-gradient-to-br from-sky-500 via-violet-600 to-fuchsia-500 text-[14px] text-white`}>H</span>
  if (logo === 'spotify') return <span className={`${common} bg-[#2a243b] text-[#1ed760]`}><Icon name="spotify" className="h-9 w-9" /></span>
  if (logo === 'jio') return <span className={`${common} rounded-full bg-[#ed1b2f] text-[13px] text-white`}>Jio</span>
  if (logo === 'hdfc') return <span className={`${common} bg-[#174f9f] text-[11px] text-white`}>HDFC</span>
  if (logo === 'bescom') return <span className={`${common} bg-[#f0f7ff] text-[10px] text-[#0d5ca6]`}>BESCOM</span>
  if (logo === 'lic') return <span className={`${common} bg-[#f6c500] text-[18px] text-[#164ba8]`}>LIC</span>
  if (logo === 'cambly') return <span className={`${common} bg-[#ffe65c] text-[12px] text-[#123]`}>C</span>
  return <span className={`${common} bg-[#e9f7dc] text-[#087c4b]`}>{logo.slice(0, 1).toUpperCase()}</span>
}

export function ServiceHeader({ logo, title, type, compact = false }: { logo: string; title: string; type: string; compact?: boolean }) {
  return <div className="flex items-center gap-3"><Logo logo={logo} size={compact ? 'md' : 'lg'} /><div><h2 className={`${compact ? 'text-[20px]' : 'text-[24px]'} font-extrabold leading-tight`}>{title}</h2><p className="text-[12px] font-semibold leading-none text-[#0b713a]">{type}</p></div></div>
}

export function ServiceHero({ logo, title, type }: { logo: string; title: string; type: string }) {
  return <section className="grid place-items-center pt-6"><Logo logo={logo} size="lg" /><h1 className="mt-4 text-center text-[24px] font-extrabold leading-tight">{title}</h1><p className="mt-1 rounded-full bg-[#e9f7dc] px-3 py-1 text-[12px] font-bold text-[#0b713a]">{type}</p></section>
}

export function SectionTitle({ title, action, badge, className = '' }: { title: string; action?: string; badge?: string; className?: string }) {
  return <div className={`mb-3 flex items-center justify-between px-4 ${className}`}><div className="flex items-center gap-1"><h2 className="text-[14px] font-extrabold">{title}</h2>{badge ? <span className="grid h-3 w-3 place-items-center rounded-full bg-[#f05c5c] text-[8px] font-bold text-white">{badge}</span> : null}</div>{action ? <button type="button" className="text-[14px] font-medium text-black/70 underline">{action}</button> : null}</div>
}

export function PaymentRow({ payment, onClick, overdue = false }: { payment: Payment; onClick?: () => void; overdue?: boolean }) {
  return <button type="button" onClick={onClick} className={`mb-2 flex h-[58px] w-full items-center rounded-lg px-4 text-left ${overdue ? 'bg-[#fff3f3]' : 'bg-[#f8f8f8]'}`}><Logo logo={payment.logo} /><div className="ml-4 min-w-0 flex-1"><h3 className="truncate text-[12px] font-extrabold">{payment.name}</h3><p className="mt-1 text-[10.5px] font-medium">{overdue ? `Due on ${payment.date}` : payment.type}</p></div><div className="w-[105px] shrink-0 pl-2"><p className={`text-[8px] font-black ${overdue ? 'text-[#e64d4d]' : 'text-[#73b945]'}`}>{overdue ? payment.overdue : 'Due Tomorrow'}</p>{!overdue ? <p className="mt-2 text-[10.5px] font-medium">{payment.date}</p> : null}</div><p className="w-[46px] text-right text-[10.5px] font-extrabold">{payment.amount}</p><Icon name="chevron" className="ml-2 h-6 w-6" /></button>
}

export function Field({ label, value, select, prefix, icon }: { label: string; value: string; select?: boolean; prefix?: string; icon?: string }) {
  return <label className="block"><span className="mb-3 block text-[12px] font-bold leading-none">{label}</span><span className="flex h-12 items-center overflow-hidden rounded-[10px] border border-[#eadada] bg-white">{prefix ? <span className="grid h-full w-[62px] place-items-center bg-[#fafafa] text-[16px] font-bold">{prefix}</span> : null}<input defaultValue={value} className="min-w-0 flex-1 bg-white px-5 text-[12px] font-extrabold outline-none" />{select ? <Icon name="down" className="mr-4 h-6 w-6" /> : null}{icon ? <Icon name={icon} className="mr-4 h-6 w-6" /> : null}</span></label>
}

export function PrimaryButton({ children, onClick }: { children: ReactNode; onClick?: () => void }) { return <button type="button" onClick={onClick} className="h-[57px] w-full rounded-[10px] bg-[#087c4b] text-[16px] font-extrabold text-white shadow-[0_8px_18px_rgba(8,124,75,.22)]">{children}</button> }

export function StatsStrip({ className = '' }: { className?: string }) { return <section className={`mx-4 grid h-[109px] grid-cols-3 rounded-[10px] bg-[#f8f8f8] ${className}`}>{[['Upcoming', '7', 'Next 30 Days'], ['Auto Pay On', '12', 'Total payment'], ['Overdue', '18', 'Payment']].map(([label, value, caption]) => <div key={label} className="flex items-center gap-2 px-3"><span className="grid h-6 w-6 place-items-center rounded-md bg-[#e9f7dc] text-[#087c4b]"><Icon name="calendar" className="h-4 w-4" /></span><div><p className="text-[10.5px] font-bold">{label}</p><p className="mt-2 text-[20px] font-extrabold">{value}</p><p className="mt-1 text-[10.5px] font-bold">{caption}</p></div></div>)}</section> }
