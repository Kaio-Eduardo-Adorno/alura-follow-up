import { emailValidator } from './email.validator.js';
import { nomeValidator } from './nome.validator.js';
import { senhaValidator } from './senha.validator.js';

const criaContaValidator = (conta) => {
  const validacao = {
    temErro: false,
    erros: [],
    dados: conta,
  };
  validacao.erros.push(...senhaValidator(conta?.senha).erros);
  validacao.erros.push(...nomeValidator(conta?.nome).erros);
  validacao.erros.push(...emailValidator(conta?.email).erros);

  if (validacao.erros.length) validacao.temErro = true;

  return validacao;
};

export { criaContaValidator };
