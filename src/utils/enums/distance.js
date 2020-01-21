export default {
  1: { text: 'lessThan500', validate: e => +e <= 500 },
  2: { text: '501To1500', validate: e => +e > 500 && +e <= 1500 },
  3: { text: '1501To2500', validate: e => +e > 1500 && +e <= 2500 },
  4: { text: '2501To3500', validate: e => +e > 2500 && +e <= 3500 },
  5: { text: 'moreThen3500', validate: e => +e > 3500 }
};
