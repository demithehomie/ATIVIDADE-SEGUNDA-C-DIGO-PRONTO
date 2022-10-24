
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from "@nestjs/common";
import { create } from "domain";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { UsersService } from "./users.service";

@Controller("/usuarios")
export class UsersController {
    constructor(private readonly usuarioService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<User[]> {
        return this.usuarioService.findAll();
    }
    @HttpCode(HttpStatus.CREATED)
    @Post('/cadastrar')
    async create(@Body() usuario: User) Promise<User> {
        return await this.usuarioService.create(usuario)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: User): Promise<User> {
        return this.usuarioService.update(usuario)
    }

    }
