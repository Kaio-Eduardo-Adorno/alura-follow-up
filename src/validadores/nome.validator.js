const nomeValidator = (nome) => {
  const validacao = {
    temErro: false,
    erros: [],
    dados: {
      nome: nome,
    },
  };
  if (typeof nome !== 'string') {
    validacao.erros.push({
      campo: 'nome',
      mensagem: 'O nome precisa ser do tipo String',
    });
    nome = '';
  }
  if (!nome)
    validacao.erros.push({
      campo: 'nome',
      mensagem: 'O nome não pode ser vazio',
    });

  if (validacao.erros.length) validacao.temErro = true;

  return validacao;
};

export { nomeValidator };
