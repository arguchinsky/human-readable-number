module.exports = function toReadable (number) {
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const ty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  const getNumsArray = (number) => number.toString().split('').map(el => parseInt(el, 10));

  if (number < 10) return nums[number];
  else if (number < 20) return teens[number % 10];
  else if (number < 100) {
    const nArr = getNumsArray(number);
    return nArr[1] ? `${ty[nArr[0] - 2]} ${nums[nArr[1]]}` : ty[nArr[0] - 2];
  }
  else if (number < 1000) {
    const nArr = getNumsArray(number);
    const tens = parseInt(nArr.slice(1).join(''));

    return number % 100 ? `${nums[nArr[0]]} hundred ${toReadable(tens)}` : `${nums[nArr[0]]} hundred`;
  }
}
