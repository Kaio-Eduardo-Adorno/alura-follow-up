import { CriaUsuarioCasoDeUso } from '../casos-de-uso/conta/cria-usuario.js';
import { EntidadeConta } from '../entidades/conta.entity.js';

export class CriaContaRequest {
  async executa(req, res) {
    try {
      const criaUsuarioCasoDeUso = new CriaUsuarioCasoDeUso();
      const conta = new EntidadeConta(
        req?.body?.nome,
        req?.body?.email,
        req?.body?.senha
      );

      const result = await criaUsuarioCasoDeUso.executa(conta);
      console.log(result);
      res.status(201);

      if (result?.erros?.length > 0) {
        res.status(400);
      }

      return res.send(result);
    } catch (err) {
      console.log(err);
      res.status(500);
      res.send(err);
    }
  }
}
