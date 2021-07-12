const randomTests = arr => {
  let arrRandomIdx = [];

  while (arrRandomIdx.length < 12) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    if (!arrRandomIdx.includes(randomIdx)) {
      arrRandomIdx.push(randomIdx);
    }
  }
  const randomTest = arrRandomIdx.map(idx => arr[idx]);
  return randomTest;
};

module.exports = randomTests;
