import Icon from './Icon'

export function InsightCard({ className = '' }: { className?: string }) {
  return <section className={`flex h-[110px] items-center justify-between rounded-xl bg-[#f4fbdd] px-5 ${className}`}><div className="flex items-start gap-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#83d562]"><Icon name="bulb" className="h-5 w-5 text-[#063b43]" /></span><div><p className="text-[12px] font-extrabold text-black/80">Smart Insight</p><p className="mt-2 text-[14px] font-extrabold text-[#80d662]">You can save ₹499/month</p><p className="mt-2 text-[10px] font-bold">By cancelling 2 unused subscriptions.</p><p className="mt-2 text-[10px] font-extrabold">See Details →</p></div></div><MiniBriefcase /></section>
}

export function InfoLine({ label, value, caption }: { label: string; value: string; caption?: string }) { return <div className="flex min-h-[58px] items-center justify-between border-b border-black/5 last:border-b-0"><span className="text-[12px] font-bold">{label}</span><span className="text-right text-[10.5px] font-bold">{value}{caption ? <span className="mt-1 block text-[8px] text-[#73b945]">{caption}</span> : null}</span></div> }

export function ReminderCard() { return <section className="mx-4 mt-6 flex h-[58px] items-center justify-between rounded-lg bg-[#f8f8f8] px-5"><div className="flex items-center gap-3"><Icon name="bell" className="h-7 w-7 text-[#087c4b]" /><span className="text-[12px] font-bold">Reminder</span></div><span className="text-[12px] font-bold">1 Day before</span></section> }

export function SimpleRow({ left, right, caption }: { left: string; right: string; caption: string }) { return <div className="flex h-[58px] items-center justify-between border-b border-black/5 px-4 text-[10.5px] font-bold"><span>{left}</span><span className="text-right">{right}<span className="mt-1 block text-[8px] text-[#73b945]">{caption}</span></span></div> }

function MiniBriefcase() { return <div className="relative h-[82px] w-[86px] shrink-0"><div className="absolute bottom-0 left-0 h-[58px] w-[76px] rounded bg-[#063b43]" /><div className="absolute bottom-[54px] left-0 h-5 w-[76px] rounded-t bg-[#8ccc4e]" /><div className="absolute bottom-[24px] right-0 h-4 w-7 rounded-l-full bg-[#8ccc4e]" /><div className="absolute right-5 top-1 h-5 w-4 rounded-full bg-[#1b1830]" /><div className="absolute right-[22px] top-5 h-9 w-3 rotate-6 rounded bg-[#1b1830]" /><div className="absolute right-1 top-[30px] h-7 w-1.5 -rotate-[22deg] rounded bg-[#f0a9a0]" /></div> }
