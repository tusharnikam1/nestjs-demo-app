import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodosController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from '../../schemas/todo.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
    controllers: [TodosController],
    providers: [TodoService],
})
export class TodosModule {

}
