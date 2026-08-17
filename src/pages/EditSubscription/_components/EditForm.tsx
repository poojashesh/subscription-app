import { Field } from '../../../common/components/Display'

export default function EditForm() { return <form className="mx-4 mt-8 space-y-6 bg-[#fafafa] pb-8 pt-5"><Field label="Service Name" value="Netflix" select /><Field label="Category" value="Subscription" select /><div className="grid grid-cols-2 gap-5"><Field label="Cost" value="649" prefix="₹" /><Field label="Billing Cycle" value="Monthly" select /></div><Field label="Payment Method" value="HDFC Bank ****1234" select /><Field label="Next Billing Date" value="22 May 2026" icon="calendar" /></form> }
