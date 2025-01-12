function contarLetras(nome) {
  return nome.length;
}

let nome = prompt("Digite um nome: ");
console.log(`O nome '${nome}' tem ${contarLetras(nome)} letras.`);
