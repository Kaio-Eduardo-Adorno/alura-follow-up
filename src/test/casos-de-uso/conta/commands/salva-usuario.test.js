import { faker } from '@faker-js/faker';
import { ObjectID } from 'bson';
import { ContaRepository } from '../../../../casos-de-uso/conta/conta.repository';
import { EntidadeConta } from '../../../../entidades/conta.entity';

test('Salva usuário', async () => {
  const contaRepository = new ContaRepository();

  const fakeAccount = new EntidadeConta(
    faker.name.fullName(),
    faker.internet.email(),
    faker.internet.password()
  );

  const saveObject = await contaRepository.salvar(fakeAccount);

  expect(saveObject).toEqual(
    expect.objectContaining({
      acknowledged: expect.any(Boolean),
      insertedId: expect.any(ObjectID),
    })
  );
});
