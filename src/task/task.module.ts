import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './dto/task.schema';

@Module({
   imports: [
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]), // ✅ THIS is required
  ],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
