import { ObjectID } from 'bson';
import { ContaRepository } from '../../../../casos-de-uso/conta/conta.repository';

test('Retorna Lista de Usuarios', async () => {
  const contaRepository = new ContaRepository();
  const usuarios = await contaRepository.listar();
  expect(usuarios).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        _id: expect.any(ObjectID),
        nome: expect.any(String),
        email: expect.any(String),
        senha: expect.any(String),
        dataCriacao: expect.any(String),
      }),
    ])
  );
});
