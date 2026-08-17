import Icon from '../../../common/components/Icon'

export default function PaymentAlert() {
  return (
    <div className="mx-4 mt-6 flex h-[82px] items-center justify-between rounded-lg bg-[#f5fbeb] px-5">
      <div className="flex items-center gap-3">
        <Icon name="bell" className="h-9 w-9 text-[#087c4b]" />
        <div>
          <p className="text-[12px] font-extrabold">Never miss a payment</p>
          <p className="mt-1 max-w-[210px] text-[12px] font-medium leading-tight text-black/70">
            Enable alerts to get notified before your subscription renewed.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="rounded-md bg-[#087c4b] px-3 py-2 text-[12px] font-bold text-white"
      >
        Enable
      </button>
    </div>
  )
}
