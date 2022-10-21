import fs from 'fs';

const salvaUsuario = (conta) => {
  const contas = JSON.parse(fs.readFileSync('./dados/contas.json'));

  contas.push(conta);

  fs.writeFileSync('./dados/contas.json', JSON.stringify(contas));

  return conta;
};

export { salvaUsuario };
