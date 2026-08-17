import { StatsStrip } from '../../../common/components/Display'

export default function InsightsOverview() { return <><section className="mx-4 mt-6 flex h-[123px] items-center justify-between rounded-[10px] bg-[#f8f8f8] px-5"><MiniIllustration /><div className="text-right"><p className="text-[16px] font-extrabold">Total Spend</p><p className="mt-5 text-[20px] font-extrabold">₹ 2,450</p></div></section><StatsStrip className="mt-6" /></> }

function MiniIllustration() { return <div className="relative h-[100px] w-[220px] overflow-hidden"><div className="absolute bottom-5 left-0 h-9 w-28 -rotate-12 rounded-full bg-[#f7a1aa]" /><div className="absolute bottom-8 left-16 h-10 w-24 rotate-12 rounded-full bg-[#7bd86a]" /><div className="absolute bottom-0 left-9 h-16 w-32 rounded-t-full bg-[#f2f2f2]" /></div> }
