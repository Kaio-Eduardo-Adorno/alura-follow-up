import { ContaRepository } from './conta.repository.js';

export class RemoveUsuarioCasoDeUso {
  #ContaRepository = new ContaRepository();

  async executa(id) {
    return await this.#ContaRepository.deletar(id);
  }
}
