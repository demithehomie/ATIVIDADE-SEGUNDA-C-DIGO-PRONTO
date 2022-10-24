import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class Bcrypt {

    async criptografarSenha(senha: string): Promise<string>{
        let saltos: number = 10
        return await bcrypt.hash(senha, saltos);

    }

    async compararSenhas(senhaBanco: string, senhaDigitada: string): Promise<boolean> {
        return bcrypt
    }

}

/*

Linha 1: Importamos o pacote Common com os respectivos decorators, utilizados na implementação da Classe Bcrypt.

Linha 2: Importamos o pacote Bcrypt.

Linha 4: O decorator @Injectable indica que a classe é do tipo Service (Classe de Serviço), que pode ser Injetada em outras Classes através da Injeção de Dependências.

Linha 7: Criamos o Método Assíncrono (async), chamado criptografarSenha(senha: string), que promete retornar uma Promise contendo uma String (a senha criptografada).

Linha 9: Criamos uma varável chamada saltos, para armazenar o numero de Saltos (salt) que serão utilizados pelo Algoritmo Bcrypt, ou seja, o numero de caracteres aleatórios que serão inseridos na senha criptografada, com o objetivo de aumentar a segurança.

Linha 10: Retorna a execução do Método hash(senha, saltos), da Classe bcrypt. Este Método retornará a senha criptografada através do algoritmo Bcrypt (algoritmo hash).

Hash: É o processo de “esconder a escrita” através da aplicação de algoritmos matemáticos, que modificam qualquer bloco de dados em caracteres de comprimento fixo, chamados hashes. O comprimento dos dados de entrada podem ter qualquer tamanho, porém, os dados de saída sempre terão valores de hash de mesmo comprimento.

Observe que o Método hash(senha, saltos) possui dois parâmetros: o primeiro, do tipo string é a senha e o segundo do tipo number é o numero de saltos. O Numero de saltos padrão é 10.

Linha 14: Criamos o Método Assíncrono (async), chamado compararSenhas(senhaBanco: string, senhaDigitada: string), que promete retornar uma Promise contendo um Boolean (retorna true caso a senha digitada seja igual a senha persistida no Banco de dados).

Linha 16: Retorna a execução do Método compareSync(senhaDigitada, senhaBanco), da Classe bcrypt. Este Método retornará true se a senha digitada for igual a senha persistida no Banco de dados.


*/