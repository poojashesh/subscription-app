import { PaymentRow, SectionTitle } from '../../../common/components/Display';
import { dueSoon, thisMonth } from '../../../common/data';
import type { Navigate } from '../../../common/types';

export default function SubscriptionList({ go }: { go: Navigate }) {
  return (
    <>
      <SectionTitle
        title="Upcoming Payments"
        action="View All"
        className="mt-5"
      />
      <div className="px-4">
        {[...dueSoon, thisMonth[3]].map((payment) => (
          <PaymentRow
            key={payment.name}
            payment={payment}
            onClick={() => go('details')}
          />
        ))}
      </div>
    </>
  );
}
