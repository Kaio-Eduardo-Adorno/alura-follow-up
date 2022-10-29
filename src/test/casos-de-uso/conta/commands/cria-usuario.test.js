import { criaUsuario } from '../../../../casos-de-uso/conta/conta.repository';
import { faker } from '@faker-js/faker';
import { EntidadeConta } from '../../../../entidades/conta.entity';

test('Usuario Criado', () => {
  const fakeAccount = new EntidadeConta(
    faker.name.fullName(),
    faker.internet.email(),
    faker.internet.password()
  );

  const result = criaUsuario(
    fakeAccount.nome,
    fakeAccount.email,
    fakeAccount.senha
  );

  expect(result instanceof EntidadeConta).toBe(true);
  expect(result.nome).toBe(fakeAccount.nome);
  expect(result.email).toBe(fakeAccount.email);
  expect(result.senha).toBe(fakeAccount.senha);
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
