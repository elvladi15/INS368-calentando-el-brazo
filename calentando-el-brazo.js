const multiplicativePersistence = (persistence, n) => {
  const digitArray = String(n)
    .split("")
    .map((n) => parseInt(n));
  if (digitArray.length === 1) {
    return persistence;
  }
  let product = 1;
  for (const n of digitArray) {
    product *= n;
  }
  return multiplicativePersistence(persistence + 1, product);
};

const areAnagrams = (str1, str2) => {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 === str2;
};
console.log(
  "Multiplicative persistence of 1033: " + multiplicativePersistence(0, 1033)
);
console.log(
  `The Words RACE and CARE ${
    areAnagrams("RACE", "CARE") ? "are" : "are not"
  } anagrams.`
);
