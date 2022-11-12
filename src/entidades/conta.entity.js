import { formataData } from '../utils/formataData.js';

export class EntidadeConta {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataCriacao = formataData();
  }
}
