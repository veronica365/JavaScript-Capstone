const countingFunction = async () => {
  const itemCounter = document.querySelectorAll('.tvcard');
  const countDisplay = document.querySelector('.count');
  countDisplay.innerHTML = `(${itemCounter.length})  TV Shows`;
};
export default countingFunction;