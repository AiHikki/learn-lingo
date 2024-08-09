// Helper function to build the filter object
const buildFilter = (language, level, price) => {
  const filter = {};
  if (language) filter.languages = language;
  if (level) filter.levels = level;
  if (price) filter.price_per_hour = { $lte: Number(price) };
  return filter;
};

export default buildFilter;
