const addUniqueData = (filters, name) =>
  filters.includes(name)
    ? filters.filter(ele => ele !== name)
    : [...filters, name];

export default addUniqueData;
