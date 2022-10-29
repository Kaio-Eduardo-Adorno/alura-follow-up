import { ContaRepository } from '../../../../casos-de-uso/conta/conta.repository';

test('Retorna Lista de Usuarios', () => {
  const contaRepository = new ContaRepository();
  const usuarios = contaRepository.listar();
  expect(usuarios).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
        nome: expect.any(String),
        email: expect.any(String),
        senha: expect.any(String),
        dataCriacao: expect.any(String),
      }),
    ])
  );
});
