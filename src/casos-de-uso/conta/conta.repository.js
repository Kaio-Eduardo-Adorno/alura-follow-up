import { ConexaoBanco } from '../../infra/conexao-banco.js';

export class ContaRepository {
  #conexaoBanco = new ConexaoBanco();

  async deletar(id) {
    const conexao = await this.#conexaoBanco.conecta();

    const contaDeletada = conexao.collection('contas').deleteOne({
      _id: id,
    });

    return contaDeletada;
  }

  async salvar(conta) {
    const conexao = await this.#conexaoBanco.conecta();

    const contaCriada = conexao.collection('contas').insertOne({
      ...conta,
    });

    return contaCriada;
  }

  async listar() {
    const conexao = await this.#conexaoBanco.conecta();

    return await conexao.collection('contas').find({}).toArray();
  }
}
