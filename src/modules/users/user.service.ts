import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model) { }

    async create(userData): Promise<any>{
        const createdCat = new this.userModel(userData);
        return await createdCat.save();
    }

    async getUsers(): Promise<any> {
        return await this.userModel.findAll().exec();
    }

    async findOne(username): Promise<any> {
        return await this.userModel.findOne({username}).exec();
    }

    async getUser(id: string): Promise<any> {
        return await this.userModel.findById(id).exec();
    }
}
