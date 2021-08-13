import { brandEnglishList } from 'utils/constants/brandEnglishList';
import { getEnglishName } from 'utils/getEnglishName';

const getFilteredItems = (items, filters) => {
  if (filters.length <= 1 && !brandEnglishList.includes(filters[0])) {
    return items.filter(
      ({ isInterested }) => !filters.includes('isInterested') || isInterested,
    );
  }
  return items.filter(({ brand, isInterested }) =>
    filters.includes('isInterested')
      ? filters.includes(getEnglishName[brand]) && isInterested
      : filters.includes(getEnglishName[brand]),
  );
};
export default getFilteredItems;
