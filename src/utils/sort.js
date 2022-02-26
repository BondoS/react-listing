export default {
  // first one is the default
  1: {
    name: 'desc',
    sorting: (hotels) => (a, b) =>
      hotels[b].rating < hotels[a].rating ? -1 : 1,
  },
  2: {
    name: 'asc',
    sorting: (hotels) => (a, b) =>
      hotels[b].rating > hotels[a].rating ? -1 : 1,
  },
};
