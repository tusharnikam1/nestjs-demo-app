import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './modules/todos/todos.module';
import { UsersModule } from './modules/users/user.modules';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ AuthModule, UsersModule, TodosModule, MongooseModule.forRoot('mongodb://localhost/toos_nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
