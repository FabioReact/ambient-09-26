export const generateAlphabet = () => {
  const alphabet: string[] = [];

  for (let index = 65; index <= 90; index++) {
    alphabet.push(String.fromCharCode(index));
  }
  return alphabet;
};
