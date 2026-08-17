import { Logo } from '../../../common/components/Display'

const top = [['hdfc', 'HDFC', '12500', '27%'], ['netflix', 'Netflix', '₹649/month', '26%'], ['hotstar', 'Hotstar', '₹649/month', '10%'], ['cambly', 'Cambly', '₹649/month', '9%']]
const renewals = [['netflix', 'Netflix', '₹649/month', '₹499'], ['spotify', 'Spotify', '₹649/month', '₹499'], ['bescom', 'BESCOM', '₹649/month', '₹499'], ['lic', 'LIC', '₹649/month', '₹499']]

export default function SpendCards() { return <section className="mx-4 mt-12 grid grid-cols-2 gap-2"><SpendCard title="Top Spending" rows={top} /><SpendCard title="Upcoming Renewals" rows={renewals} /></section> }

function SpendCard({ title, rows }: { title: string; rows: string[][] }) { return <div className="rounded-[10px] bg-[#f8f8f8] p-2"><div className="mb-3 flex items-center justify-between px-1 pt-1"><h3 className="text-[10.5px] font-extrabold">{title}</h3><button type="button" className="text-[10.5px] font-medium underline">View All</button></div>{rows.map(([logo, name, price, stat]) => <div key={name} className="grid h-[67px] grid-cols-[46px_1fr_auto] items-center gap-2 text-[10.5px] font-bold"><Logo logo={logo} size="sm" /><div className="min-w-0"><p className="truncate">{name}</p><p className="mt-1 truncate">{price}</p></div><span>{stat}</span></div>)}</div> }
