import { ObjectId } from 'mongodb';
import { RemoveUsuarioCasoDeUso } from '../casos-de-uso/conta/remove-conta.js';

export class RemoveContaRequest {
  async executa(req, res) {
    try {
      const removeUsuarioCasoDeUso = new RemoveUsuarioCasoDeUso();

      const result = await removeUsuarioCasoDeUso.executa(
        new ObjectId(req?.params?.id)
      );

      res.status(200);

      if (result?.deletedCount === 0) {
        res.status(404);
      }

      return res.send();
    } catch (err) {
      res.status(500);
      res.send(err);
    }
  }
}
