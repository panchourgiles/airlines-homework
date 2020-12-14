export const convertArrayToSelectFormat = (items) => {
  let resultArray = [];
  items.forEach((item) => {
    if (
      !resultArray.some((resultItem) => {
        return resultItem.value === item;
      })
    ) {
      resultArray.push({
        label: item,
        value: item
      });
    }
  });
  return resultArray;
};
