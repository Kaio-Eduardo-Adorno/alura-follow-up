import { emailValidator } from './email.validator.js';
import { nomeValidator } from './nome.validator.js';
import { senhaValidator } from './senha.validator.js';

const criaContaValidator = (nome, email, senha) => {
  const validacao = {
    temErro: false,
    erros: [],
    dados: {
      nome: nome,
      email: email,
      senha: senha,
    },
  };
  validacao.erros.push(...senhaValidator(senha).erros);
  validacao.erros.push(...nomeValidator(nome).erros);
  validacao.erros.push(...emailValidator(email).erros);

  if (validacao.erros.length) validacao.temErro = true;

  return validacao;
};

export { criaContaValidator };
