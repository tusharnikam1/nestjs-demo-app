import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import TodoDto from './todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model) {}

    async create(todoData: TodoDto) {
        const createdCat = new this.todoModel(todoData);
        return await createdCat.save();
    }

    async getTodo(id: number): Promise<any> {
        return await this.todoModel.findById(id).exec();
    }

    async findAll(): Promise<any[]> {
        console.log('Todoservice called')
        const allTodos = await this.todoModel.find().exec();
        console.log(allTodos, 'findall called')
        return allTodos;
    }
}
