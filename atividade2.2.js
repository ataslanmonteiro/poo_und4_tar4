function contarUns(string) {
  return (string.match(/1/g) || []).length;
}

let string = prompt("Digite uma string de 0s e 1s: ");
console.log(`A string '${string}' tem ${contarUns(string)} caracteres '1'.`);
