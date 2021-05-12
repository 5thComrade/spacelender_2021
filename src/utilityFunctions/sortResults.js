export const sortLowToHigh = (arr) => {
  const newArray = [...arr];
  newArray.sort((a, b) => {
    return a.pricing - b.pricing;
  });
    return newArray;
};

export const sortHighToLow = (arr) => {
  const newArray = [...arr];
  newArray.sort((a, b) => {
    return b.pricing - a.pricing;
  });
  return newArray;
};
