import {
  salvaUsuario,
  criaUsuario,
  listaUsuario,
} from '../../../../casos-de-uso/conta/conta.repository';

test('Retorna Lista de Usuarios', () => {
  const usuarios = listaUsuario();
  usuarios.forEach((element) => {
    expect(element).toHaveProperty('id');
    expect(element).toHaveProperty('nome');
    expect(element).toHaveProperty('email');
    expect(element).toHaveProperty('senha');
    expect(element).toHaveProperty('dataCriacao');
  });
});
