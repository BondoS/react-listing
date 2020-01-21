export const listWithIds = arr => {
  const list = {};
  arr.forEach(item => {
    list[item.id] = item;
  });
  return {
    ids: arr.map(item => item.id),
    list
  };
};

// these two functions originally made to fix this issue https://github.com/facebook/react/issues/9402
// in a real life project I would just write a function to handle float onChange, or use select option instead of input text
const fields = [
  'distance_to_venue',
  'distance',
  'rating',
  'price_category',
  'price',
  'max_occupancy',
  'price_in_usd'
];

export const numberToString = obj => {
  const newObj = { ...obj };
  Object.keys(obj).forEach(key => {
    if (fields.includes(key) && newObj[key]) newObj[key] = obj[key].toString();
  });
  return newObj;
};

export const stringToNumber = obj => {
  const newObj = { ...obj };
  Object.keys(obj).forEach(key => {
    if (fields.includes(key) && newObj[key]) newObj[key] = Number(obj[key]);
  });
  return newObj;
};
