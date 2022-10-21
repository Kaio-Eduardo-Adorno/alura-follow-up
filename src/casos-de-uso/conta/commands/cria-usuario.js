import crypto from 'crypto';
import { criaContaValidator } from '../../../validadores/cria-conta.validator.js';
import { salvaUsuario, listaUsuario } from '../conta.repository.js';

const criaUsuario = (nome, email, senha) => {
  const { erros } = criaContaValidator(nome, email, senha);

  if (erros?.length > 0) {
    return erros;
  }

  const conta = {
    id: crypto.randomUUID(),
    nome: nome,
    email: email,
    senha: senha,
    dataCriacao: new Date().toISOString().split('T')[0],
  };

  const contasCadastradas = listaUsuario();

  for (let i = 0; i < contasCadastradas.length; i++) {
    if (contasCadastradas[i].email === conta.email)
      return [
        {
          campo: 'email',
          mensagem: 'O Email ja está cadastrado',
        },
      ];
  }

  salvaUsuario(conta);

  return conta;
};

export { criaUsuario };
