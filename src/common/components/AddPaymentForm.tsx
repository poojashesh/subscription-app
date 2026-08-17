import type { Navigate } from '../types'
import { Field, PrimaryButton, ServiceHeader } from './Display'
import { BasePage, StatusBar, TopBar } from './Layout'

export type AddPaymentKind = 'subscription' | 'emi' | 'bill'

const copy = {
  subscription: { title: 'Add Subscription', service: 'Spotify', category: 'Subscription', button: 'Add Subscription', logo: 'spotify', cost: '199' },
  emi: { title: 'Add EMI', service: 'HDFC Bank', category: 'EMI', button: 'Add EMI', logo: 'hdfc', cost: '12500' },
  bill: { title: 'Add Bill', service: 'BESCOM', category: 'Bills', button: 'Add Bill', logo: 'bescom', cost: '1000' },
} satisfies Record<AddPaymentKind, { title: string; service: string; category: string; button: string; logo: string; cost: string }>

export default function AddPaymentForm({ kind, go }: { kind: AddPaymentKind; go: Navigate }) {
  const content = copy[kind]
  return <BasePage><StatusBar /><TopBar title={content.title} back={() => go('home')} /><div className="px-4 pt-6"><ServiceHeader logo={content.logo} title={content.service} type={content.category} /></div><form className="mx-4 mt-[57px] space-y-6 bg-[#fafafa] pb-8 pt-9"><Field label="Service Name" value={content.service} select /><Field label="Category" value={content.category} select /><div className="grid grid-cols-2 gap-5"><Field label="Cost" value={content.cost} prefix="₹" /><Field label="Billing Cycle" value="Monthly" select /></div><Field label="Billing Date" value="22" icon="calendar" /></form><div className="px-[34px] pt-[72px]"><PrimaryButton onClick={() => go('home')}>{content.button}</PrimaryButton></div></BasePage>
}
