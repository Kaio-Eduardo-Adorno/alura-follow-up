import { EmailValidator } from './email.validator.js';
import { NomeValidator } from './nome.validator.js';
import { SenhaValidator } from './senha.validator.js';

export class CriaContaValidator {
  #EmailValidator = new EmailValidator();
  #NomeValidator = new NomeValidator();
  #SenhaValidator = new SenhaValidator();

  async executa(conta) {
    const validacao = {
      temErro: false,
      erros: [],
      dados: conta,
    };

    const senhaValidacao = await this.#SenhaValidator.executa(conta?.senha);
    validacao.erros.push(...senhaValidacao.erros);

    const nomeValidacao = await this.#NomeValidator.executa(conta?.nome);
    validacao.erros.push(...nomeValidacao.erros);

    const emailValidacao = await this.#EmailValidator.executa(conta?.email);
    validacao.erros.push(...emailValidacao.erros);

    if (validacao.erros.length) validacao.temErro = true;

    return validacao;
  }
}
