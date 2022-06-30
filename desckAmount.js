function desckAmount(arr) {
  const desck = {};

  for (let a of arr) {
    if (a.suit === "hearts")
      desck[`hearts${a.value}`] = (desck[`hearts${a.value}`] || 0) + 1;
    else if (a.suit === "diamonds")
      desck[`diamonds${a.value}`] = (desck[`diamonds${a.value}`] || 0) + 1;
    else if (a.suit === "clubs")
      desck[`clubs${a.value}`] = (desck[`clubs${a.value}`] || 0) + 1;
    else desck[`spades${a.value}`] = (desck[`spades${a.value}`] || 0) + 1;
  }

  if (Object.keys(desck).length < 52) return 0;
  else {
    return Math.min(...Object.values(desck));
  }
}

module.exports = desckAmount;
