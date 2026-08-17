export type Screen =
  | 'home' | 'subscription' | 'details' | 'edit'
  | 'add-subscription' | 'add-emi' | 'add-bill'
  | 'overdue' | 'overdue-details' | 'recharge' | 'insights'
  | 'notifications'

export type Navigate = (screen: Screen) => void

export type Payment = {
  name: string
  type: string
  date: string
  amount: string
  logo: string
  overdue?: string
}
