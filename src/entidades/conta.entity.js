import { formataData } from '../utils/formataData';
import crypto from 'crypto';

export class EntidadeConta {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataCriacao = formataData();
    this.id =  crypto.randomUUID();
  }
}
