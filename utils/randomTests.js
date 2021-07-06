const randomTests = (arr) => {
  let arrRandomIdx = [];

  while (arrRandomIdx.length < 12) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    if (!arrRandomIdx.includes(randomIdx)) {
      arrRandomIdx.push(randomIdx);
    }
  }
  const randomTests = arrRandomIdx.map((idx) => arr[idx]);
  return randomTests;
};

module.exports = randomTests;
