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

let palavraOriginal = prompt("Digite uma palavra:");
let caractere = prompt("Digite um caractere para substituir as vogais:");
let numVogais = contarVogais(palavraOriginal);
let novaPalavra = substituirVogais(palavraOriginal, caractere);

console.log(`A palavra '${palavraOriginal}' tem ${numVogais} vogais.`);
console.log(
  `A palavra '${palavraOriginal}' com as vogais substituídas por '${caractere}' é '${novaPalavra}'.`
);
