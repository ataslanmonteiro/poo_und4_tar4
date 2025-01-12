class Usuario {
  constructor(RG, CPF, nome) {
    this.RG = RG || null;
    this.CPF = CPF || null;
    this.nome = nome || "";
  }
  getRG() {
    return this.RG;
  }
  getRG(RG) {
    this.RG = RG;
  }
  getCPF() {
    return this.CPF;
  }
  getCPF(CPF) {
    this.CPF = CPF;
  }
  getNome() {
    return this.nome;
  }
  getNome(nome) {
    this.nome = nome;
  }
}
class Conta {
  constructor(agencia, usuario, saldo) {
    this.agencia = agencia;
    this.usuario = usuario;
    this.saldo = saldo;
  }
  getAgencia() {
    return this.agencia;
  }
  getUsuario() {
    return this.usuario;
  }
  getSaldo() {
    return this.saldo;
  }
}
let usuario = new Usuario();

usuario.setRG(987654321);
usuario.setCPF(123456789);
usuario.setNome("João da Silva");

let conta = new Conta(1234, usuario, 1000.98);

console.log("Dados da Conta: ");
console.log("Agência: ", conta.getAgencia());
console.log("Saldo: ", conta.getSaldo());
console.log("Dados do Usuário: ");
console.log("RG: ", conta.getUsuario().getRG());
console.log("CPF: ", conta.getUsuario().getCPF());
console.log("RG: ", conta.getUsuario().getNome());
