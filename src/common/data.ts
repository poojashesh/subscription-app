import type { Payment } from './types'

export const dueSoon: Payment[] = [
  { name: 'Netflix', type: 'Subscription', date: '22 May 2026', amount: '₹649', logo: 'netflix' },
  { name: 'Hotstar', type: 'Subscription', date: '22 May 2026', amount: '₹649', logo: 'hotstar' },
]

export const thisMonth: Payment[] = [
  { name: 'HDFC Bank Home Loan', type: 'EMI', date: '22 May 2026', amount: '₹12,500', logo: 'hdfc' },
  { name: 'Cambly', type: 'Subscription', date: '22 May 2026', amount: '₹649', logo: 'cambly' },
  { name: 'Spotify Premium', type: 'Subscription', date: '22 May 2026', amount: '₹199', logo: 'spotify' },
  { name: 'Life Insurance Premium', type: 'Insurance', date: '22 May 2026', amount: '₹649', logo: 'lic' },
]

export const overduePayments: Payment[] = [
  { name: 'Jio Mobile Recharge', type: 'Bill', date: '06 June 2026', amount: '₹239', logo: 'jio', overdue: '7 days overdue' },
  { name: 'BESCOM electricity bill', type: 'Bill', date: '01 June 2026', amount: '₹1000', logo: 'bescom', overdue: '11 days overdue' },
]
