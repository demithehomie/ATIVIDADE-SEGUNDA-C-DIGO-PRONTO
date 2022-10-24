//A Classe AuthService será responsável por criar os Métodos de Autenticação (login) e Validate (validar as credenciais do usuario e gerar o token JWT).

import   {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { Bcrypt } from '../bcrypt/bcrypt';

@Injectable()
export class AuthService {
    constructor (
        private usuarioService: UsersService,
        private  jwtService: JwtService,
        private bcrypt: Bcrypt
    ) {}
//10:20
    async validateUser(username: string, password: string): Promise<any> {
        const buscaUsuario = await this.usuarioService.findByUsuario(username)

        if(!buscaUsuario) 
            throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND)
        
            const match = await this.bcrypt.compararSenhas(buscaUsuario.senha, password)

            if (buscaUsuario && match ) {
                const { senha, ...result } = buscaUsuario;
;               return result;
            } 
            
                //JWT

            // Criamos um Objeto da Classe User do tipo const, chamado buscaUsuario, que receberá o resultado da execução do Método findByUsuario(usuario: Usuario), da Classe UsuarioService, que valida se o usuário existe.

        return null;

    }

    async login(usuarioLogin: any) {
        const payload = { username: usuarioLogin.usuario, sub: "atividade_segunda"} //sub, subject = nome do projeto
       
        return {
            usuario: usuarioLogin.usuario,
            token: `Bearer ${this.jwtService.sign(payload)}`
        };
    
/*

{
    "usuario": "user@user.com"
    "senha": "admin123"
}

*/


    }

    
}