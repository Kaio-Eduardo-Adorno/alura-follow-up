import { criaUsuario } from '../../../../casos-de-uso/conta/conta.repository';
import { faker } from '@faker-js/faker';

test('Usuario Criado', () => {
  const fakeAccount = {
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
  };
  const result = criaUsuario(
    fakeAccount.nome,
    fakeAccount.email,
    fakeAccount.senha
  );

  expect(result).toHaveProperty('id');
  expect(result.nome).toBe(fakeAccount.nome);
  expect(result.email).toBe(fakeAccount.email);
  expect(result.senha).toBe(fakeAccount.senha);
  expect(result).toHaveProperty('dataCriacao');
});

test('Falha ao criar usuario', () => {
  const result = criaUsuario();
  expect(result.erros).toStrictEqual([
    { campo: 'senha', mensagem: 'A senha precisa ser do tipo String' },
    { campo: 'senha', mensagem: 'Senha não pode ser vazia' },
    { campo: 'senha', mensagem: 'Senha precisa conter no mínimo 8 caracteres' },
    { campo: 'nome', mensagem: 'O nome precisa ser do tipo String' },
    { campo: 'nome', mensagem: 'O nome não pode ser vazio' },
    { campo: 'email', mensagem: 'O Email precisa ser do tipo String' },
    { campo: 'email', mensagem: 'O Email não pode ser vazio' },
    { campo: 'email', mensagem: 'Formato de Email inválido' },
  ]);
});
