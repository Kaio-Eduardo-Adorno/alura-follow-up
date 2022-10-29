import validator from 'validator';

const emailValidator = (email) => {
  const validacao = {
    temErro: false,
    erros: [],
    dados: {
      email: email,
    },
  };
  if (typeof email !== 'string') {
    validacao.erros.push({
      campo: 'email',
      mensagem: 'O Email precisa ser do tipo String',
    });
    email = '';
  }
  if (!email)
    validacao.erros.push({
      campo: 'email',
      mensagem: 'O Email não pode ser vazio',
    });

  if (!validator.isEmail(email))
    validacao.erros.push({
      campo: 'email',
      mensagem: 'Formato de Email inválido',
    });

  if (validacao.erros.length) validacao.temErro = true;

  return validacao;
};

export { emailValidator };
