const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarUns(string) {
  return (string.match(/1/g) || []).length;
}

readline.question("Digite uma string de contenha '0' e '1': ", (string) => {
  console.log(`A string '${string}' tem ${contarUns(string)} caracteres '1'.`);
  readline.close();
});
