import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { TodoSchema } from '../../schemas/todo.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
const demoTodos = [{"name": "test", "description": "sssss"}];


describe('TodosController', () => {
  let todoController: TodosController;
  let todoService : TodoService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
        controllers: [TodosController],
        providers:[TodoService, {provide: getModelToken('Todo'), useValue: TodoSchema}]
    }).compile();

    todoController = app.get<TodosController>(TodosController);
    todoService = app.get<TodoService>(TodoService);
  });

  describe('get todos', () => {
    it('should return list of todos', async () => {
        jest.spyOn(todoService, 'findAll').mockImplementation(async () => {return demoTodos});
        const newTodos = await todoController.getTodos()
        console.log(newTodos, 'newTodos')
        expect(newTodos.length).toEqual(1);
    });
  });
});
