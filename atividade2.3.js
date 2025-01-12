function inverterPalavra(palavra) {
  return palavra.split("").reverse().join("");
}

let palavraInvertida = prompt("Digite uma palavra: ");
console.log(
  `A palavra '${palavraInvertida}' invertida é '${inverterPalavra(
    palavraInvertida
  )}'.`
);
