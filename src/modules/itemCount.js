const countingFunction = () => {
  const itemCounter = document.querySelectorAll('.tvcard');
  const countDisplay = document.querySelector('.count');
  countDisplay.innerHTML = `(${itemCounter.length}) TV Shows`;
  return itemCounter.length;
};
export default countingFunction;