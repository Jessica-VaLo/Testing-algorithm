function alternatingCharacters(string) {
  let count = 0;
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) count += 1;
  }
  return count;
}

module.exports = alternatingCharacters;
