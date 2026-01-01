/**
 * Claims are be capped at the deposit amount.
 */
type DeductionItem = {
  amount: number;
  description: string;
};

type DepositRelease = {
  totalDeductions: number;
  landlordShare: number;
  tenantShare: number;
};

function calculateDepositRelease(
  depositAmount: number,
  deductionItems: DeductionItem[]
): DepositRelease {
  const totalDeductions = deductionItems.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const landlordShare = Math.min(totalDeductions, depositAmount);
  const tenantShare = depositAmount - landlordShare;

  return {
    totalDeductions,
    landlordShare,
    tenantShare,
  };
}
