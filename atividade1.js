class Usuario {
  constructor(RG, CPF, nome) {
    this._RG = RG || null;
    this._CPF = CPF || null;
    this._nome = nome || "";
  }
  get RG() {
    return this._RG;
  }
  set RG(RG) {
    this._RG = RG;
  }
  get CPF() {
    return this._CPF;
  }
  set CPF(CPF) {
    this._CPF = CPF;
  }
  get nome() {
    return this._nome;
  }
  set nome(nome) {
    this._nome = nome;
  }
}
class Conta {
  constructor(agencia, usuario, saldo) {
    this._agencia = agencia;
    this._usuario = usuario;
    this._saldo = saldo;
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
console.log("Nome: ", conta.usuario.nome);
