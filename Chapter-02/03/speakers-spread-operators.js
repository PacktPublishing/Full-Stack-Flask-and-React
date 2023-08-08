const speakers = ["John", "Walke", "Dan", "Sophie"];
const [, ...rest] = speakers // the … used is called the spread operator
console.log(rest)//output: "Walke", "Dan", "Sophie" John will be skipped