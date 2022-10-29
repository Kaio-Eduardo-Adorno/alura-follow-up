import fs from 'fs';

const listaUsuario = () => {
  const file = fs.readFileSync('./dados/contas.json');

  return JSON.parse(file);
};

export { listaUsuario };
