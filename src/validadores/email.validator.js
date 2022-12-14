import validator from 'validator';
import { ContaRepository } from '../casos-de-uso/conta/conta.repository.js';

export class EmailValidator {
  #ContaRepository = new ContaRepository();

  async executa(email) {
    const validacao = {
      temErro: false,
      erros: [],
      dados: {
        email: email,
      },
    };
    if (typeof email !== 'string') {
      validacao.erros.push({
        campo: 'email',
        mensagem: 'O Email precisa ser do tipo String',
      });
      email = '';
    }
    if (!email)
      validacao.erros.push({
        campo: 'email',
        mensagem: 'O Email não pode ser vazio',
      });

    if (!validator.isEmail(email))
      validacao.erros.push({
        campo: 'email',
        mensagem: 'Formato de Email inválido',
      });

    const contasCadastradas = await this.#ContaRepository.listar();

    const existeContaComEmail = contasCadastradas.some(
      (contaCadastrada) => contaCadastrada.email === email
    );

    if (existeContaComEmail)
      validacao.erros.push({
        campo: 'email',
        mensagem: 'O Email já está cadastrado',
      });

    if (validacao.erros.length) validacao.temErro = true;

    return validacao;
  }
}
