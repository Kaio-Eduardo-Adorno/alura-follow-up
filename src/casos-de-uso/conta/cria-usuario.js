import { criaContaValidator } from '../../validadores/cria-conta.validator';
import { ContaRepository } from './conta.repository';

export class CriaUsuarioCasoDeUso {
  #ContaRepository = new ContaRepository();

  executa(conta) {
    const { erros } = criaContaValidator(conta);
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
