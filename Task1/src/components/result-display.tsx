import { ResultDisplayProps } from "@/types";
import { formatCurrency } from "@/utils/fomatters";

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  totalAmount,
}) => {
  if (totalAmount === null) return null;

  return (
    <div className="mt-4 p-4 border border-gray-200 rounded-md">
      <p className="text-xl font-bold">
        Tổng tiền: {formatCurrency(totalAmount)}
      </p>
    </div>
  );
};
