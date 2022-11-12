import { faker } from '@faker-js/faker';
import { EntidadeConta } from '../../entidades/conta.entity.js';
import { CriaContaValidator } from '../../validadores/cria-conta.validator.js';
import { ContaRepository } from './conta.repository.js';

export class CriaUsuarioCasoDeUso {
  #ContaRepository = new ContaRepository();
  #CriaContaValidator = new CriaContaValidator();

  async executa(conta) {
    const { erros } = await this.#CriaContaValidator.executa(conta);
    if (erros?.length > 0) {
      return {
        erros,
        dados: conta,
      };
    }

    this.#ContaRepository.salvar(conta);

    return conta;
  }
}
