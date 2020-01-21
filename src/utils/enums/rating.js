export default {
  1: { text: 'okay', validate: e => +e <= 1 },
  2: { text: 'fair', validate: e => +e > 1 && +e <= 2 },
  3: { text: 'good', validate: e => +e > 2 && +e <= 3 },
  4: { text: 'veryGood', validate: e => +e > 3 && +e <= 4 },
  5: { text: 'excellent', validate: e => +e > 4 }
};
