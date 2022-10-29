import fs from 'fs';
import { listaUsuario } from './lista-usuario';

const salvaUsuario = (conta) => {
  const contas = listaUsuario();

  contas.push(conta);

  fs.writeFileSync('./dados/contas.json', JSON.stringify(contas));

  return conta;
};

export { salvaUsuario };
