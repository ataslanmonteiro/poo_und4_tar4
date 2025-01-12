const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um nome: ", (nome) => {
  console.log(`O nome '${nome}' tem ${contarLetras(nome)} letras.`);
  rl.close();
});

function contarLetras(nome) {
  return nome.length;
}
