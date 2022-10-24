import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './services/auth.service';
import { Bcrypt } from "./bcrypt/bcrypt"
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './controllers/auth.controller';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [
    
  ],
  providers: [AuthService, Bcrypt, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
  exports: [Bcrypt]
})
export class AuthModule {}
