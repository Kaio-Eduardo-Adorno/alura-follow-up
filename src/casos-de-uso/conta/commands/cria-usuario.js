import crypto from 'crypto';
import { formataData } from '../../../utils/formataData.js';
import { criaContaValidator } from '../../../validadores/cria-conta.validator.js';
import { salvaUsuario, listaUsuario } from '../conta.repository.js';

const criaUsuario = (nome, email, senha) => {
  const { erros } = criaContaValidator(nome, email, senha);

  if (erros?.length > 0) {
    return {
      erros,
      dados: { nome, email, senha },
    };
  }

  const conta = {
    id: crypto.randomUUID(),
    nome: nome,
    email: email,
    senha: senha,
    dataCriacao: formataData(),
  };

  salvaUsuario(conta);

  return conta;
};

export { criaUsuario };
