class Usuario {
  constructor(RG, CPF, nome) {
    this.RG = RG || null;
    this.CPF = CPF || null;
    this.nome = nome || "";
  }
  get RG() {
    return this.RG;
  }
  get RG(RG) {
    this.RG = RG;
  }
  get CPF() {
    return this._CPF;
  }
  get CPF(CPF) {
    this._CPF = CPF;
  }
  get nome() {
    return this._nome;
  }
  get nome(nome) {
    this._nome = nome;
  }
}
class Conta {
  constructor(agencia, usuario, saldo) {
    this.agencia = agencia;
    this.usuario = usuario;
    this.saldo = saldo;
  }
  get agencia() {
    return this._agencia;
  }
  get usuario() {
    return this._usuario;
  }
  get saldo() {
    return this._saldo;
  }
}
let usuario = new Usuario();

usuario.RG = 987654321;
usuario.CPF = 123456789;
usuario.nome = "João da Silva";

let conta = new Conta(1234, usuario, 1000.98);

console.log("Dados da Conta: ");
console.log("Agência: ", conta.agencia);
console.log("Saldo: ", conta.saldo);
console.log("Dados do Usuário: ");
console.log("RG: ", conta.usuario.RG);
console.log("CPF: ", conta.usuario.CPF);
console.log("RG: ", conta.usuario.nome);