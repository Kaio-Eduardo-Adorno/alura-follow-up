import fs from 'fs';

export class ContaRepository {
  salvar(conta) {
    const contas = this.listar();

    contas.push(conta);

    fs.writeFileSync('./dados/contas.json', JSON.stringify(contas));

    return conta;
  }

  listar() {
    const file = fs.readFileSync('./dados/contas.json');

    return JSON.parse(file);
  }
}
