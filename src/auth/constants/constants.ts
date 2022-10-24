//  ARMAZENAMENTO DA CHAVE DE ASSINATURA DO TOKEN JWT

//  Todos os Tokens JWT gerados na aplicação serão assinados com esta const. Para uma aplicação em produção, quanto mais complexa for a chave, mais seguro será o Token JWT. Importante destacar que quando uma requisição receber o Token JWT ele será validado através desta chave.

export const jwtConstants = {
    secret: 'secretKey',
};