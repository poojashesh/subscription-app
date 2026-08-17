import type { Navigate } from '../../common/types'
import AddPaymentForm from './_components/AddSubscriptionForm'

export default function AddSubscription({ go }: { go: Navigate }) { return <AddPaymentForm kind="subscription" go={go} /> }
