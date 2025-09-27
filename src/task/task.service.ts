import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './dto/task.schema';

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task')private readonly taskModel:Model<Task>,){}
    async findAll():Promise<Task[]> {
        return this.taskModel.find().exec();

    }
}
