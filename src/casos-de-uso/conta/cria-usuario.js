import { CriaContaValidator } from '../../validadores/cria-conta.validator';
import { ContaRepository } from './conta.repository';

export class CriaUsuarioCasoDeUso {
  #ContaRepository = new ContaRepository();
  #CriaContaValidator = new CriaContaValidator();

  executa(conta) {
    const { erros } = this.#CriaContaValidator.executa(conta);
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
