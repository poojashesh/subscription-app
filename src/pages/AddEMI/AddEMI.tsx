import AddPaymentForm from './_components/AddEMIForm'
import type { Navigate } from '../../common/types'

export default function AddEMI({ go }: { go: Navigate }) { return <AddPaymentForm kind="emi" go={go} /> }
