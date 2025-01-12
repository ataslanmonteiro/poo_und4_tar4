function contarLetras(nome) {
  return nome.length;
}
let nome = prompt("Digite um nome: ");
console.log(`O nome '${nome}' tem ${contarLetras(nome)} letras.`);

function contarUns(string) {
  return (string.match(/1/g) || []).length;
}
let string = prompt("Digite uma string de 0s e 1s: ");
console.log(`A string '${string}' tem ${contarUns(string)} caracteres '1'.`);

function inverterPalavra(palavra) {
  return palavra.split("").reverse().join("");
}
let palavra = prompt("Digite uma palavra: ");
console.log(
  `A palavra '${palavra}' invertida é '${inverterPalavra(palavra)}'.`
);

function contarVogais(palavra) {
  let vogais = "aeiouAEIOU";
  let count = 0;
  for (let letra of palavra) {
    if (vogais.includes(letra)) {
      count++;
    }
  }
  return count;
}

function substituirVogais(palavra, caractere) {
  let vogais = "aeiouAEIOU";
  let novaPalavra = "";
  for (let letra of palavra) {
    if (vogais.includes(letra)) {
      novaPalavra += caractere;
    } else {
      novaPalavra += letra;
    }
  }
  return novaPalavra;
}

let palavra = prompt("Digite uma palavra:");
let caractere = prompt("Digite um caractere para substituir as vogais:");
let numVogais = contarVogais(palavra);
let novaPalavra = substituirVogais(palavra, caractere);

console.log(`A palavra '${palavra}' tem ${numVogais} vogais.`);
console.log(
  `A palavra '${palavra}' com as vogais substituídas por '${caractere}' é '${novaPalavra}'.`
);
