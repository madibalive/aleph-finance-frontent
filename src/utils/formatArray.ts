import BigNumber from 'bignumber.js';

// remove rows with amount less than 0
export const filterWalletsData = (data: any[]) => {
  return data.filter((t) => new BigNumber(t.balanceUSD || t.amount || 0).isGreaterThanOrEqualTo(1));
};
