import AddPaymentForm from './_components/AddBillForm'
import type { Navigate } from '../../common/types'

export default function AddBill({ go }: { go: Navigate }) { return <AddPaymentForm kind="bill" go={go} /> }
