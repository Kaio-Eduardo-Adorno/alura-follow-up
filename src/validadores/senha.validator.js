export class SenhaValidator {
  executa(senha) {
    const validacao = {
      temErro: false,
      erros: [],
      dados: {
        senha: senha,
      },
    };
    if (typeof senha !== 'string') {
      validacao.erros.push({
        campo: 'senha',
        mensagem: 'A senha precisa ser do tipo String',
      });
      senha = '';
    }
    if (!senha)
      validacao.erros.push({
        campo: 'senha',
        mensagem: 'Senha não pode ser vazia',
      });

    if (senha?.length < 8)
      validacao.erros.push({
        campo: 'senha',
        mensagem: 'Senha precisa conter no mínimo 8 caracteres',
      });

    if (validacao.erros.length) validacao.temErro = true;

    return validacao;
  }
}
