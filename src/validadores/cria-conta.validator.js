import { EmailValidator } from './email.validator.js';
import { NomeValidator } from './nome.validator.js';
import { SenhaValidator } from './senha.validator.js';

export class CriaContaValidator {
  #EmailValidator = new EmailValidator();
  #NomeValidator = new NomeValidator();
  #SenhaValidator = new SenhaValidator();

  executa(conta) {
    const validacao = {
      temErro: false,
      erros: [],
      dados: conta,
    };
    validacao.erros.push(...this.#SenhaValidator.executa(conta?.senha).erros);
    validacao.erros.push(...this.#NomeValidator.executa(conta?.nome).erros);
    validacao.erros.push(...this.#EmailValidator.executa(conta?.email).erros);

    if (validacao.erros.length) validacao.temErro = true;

    return validacao;
  }
}
