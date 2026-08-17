import Icon from '../../../common/components/Icon'

export default function InsightsHeader() {
  return (
    <section className="flex h-[51px] items-center justify-between px-4">
      <h1 className="text-[16px] font-extrabold">Insights</h1>
      <button
        type="button"
        className="flex h-[22px] items-center gap-2 rounded-md bg-[#f4f4f4] px-2 text-[14px] font-bold"
      >
        <Icon name="calendar" className="h-4 w-4" />
        This Month
      </button>
    </section>
  )
}
