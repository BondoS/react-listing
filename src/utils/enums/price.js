const prices = { 1: 'low', 2: 'medium', 3: 'high' };

export default prices;

export const getPriceKeyByName = price => {
  return Object.keys(prices).find(key => key === price);
};
