import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "root",
      password: "root",
      database: "db_atividade_segunda",
      entities: [],
      synchronize: false,
    }),
    AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// constants, controllers, guard, services, strategy
