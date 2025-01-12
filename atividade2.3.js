const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inverterPalavra(palavra) {
  return palavra.split("").reverse().join("");
}

rl.question("Digite uma palavra: ", (palavraInvertida) => {
  console.log(
    `A palavra '${palavraInvertida}' invertida é: '${inverterPalavra(
      palavraInvertida
    )}'.`
  );
  rl.close();
});
