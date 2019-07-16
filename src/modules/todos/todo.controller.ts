import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { create } from 'domain';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): any {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() createTodoData): any {
      return this.todoService.create(createTodoData);
  }

  @Get(':id')
  getTodoDetails(@Param() params): object {
    return this.todoService.getTodo(params.id);
  }
}
