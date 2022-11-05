import { faker } from '@faker-js/faker';
import { ContaRepository } from '../../../../casos-de-uso/conta/conta.repository';
import { formataData } from '../../../../utils/formataData';

test('Salva usuário', () => {
  const contaRepository = new ContaRepository();

  const fakeAccount = {
    id: faker.datatype.uuid(),
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
    dataCriacao: formataData(),
  };

  const saveObject = contaRepository.salvar(fakeAccount);

  expect(saveObject).toBe(fakeAccount);
});
