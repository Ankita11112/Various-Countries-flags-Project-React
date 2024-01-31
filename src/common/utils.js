export const searching = (arr, searchBy, keyword) => {
    return arr?.filter((item) =>
      item[searchBy].toLowerCase().includes(keyword.toLowerCase())
    );
  };

export const paginate = (arr, currentPage, pageSize) => {
    let startIndex = currentPage * pageSize; // 0 * 12 = 0
    let endIndex = startIndex + pageSize; // 0 + 12 = 12
    return arr?.slice(startIndex, endIndex);
  };

export const filterByRegion = (arr, filterBy) => {
 return arr?.filter((item) =>
   filterBy.length ? item["region"] === filterBy : item );
};