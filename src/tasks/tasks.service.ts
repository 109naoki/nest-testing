import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  create(CreateTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.save(CreateTaskDto);
  }

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: string): Promise<Task> {
    return this.tasksRepository.findOne({ where: { id: Number(id) } });
  }

  async update(id: string, UpdateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOne({
      where: { id: Number(id) },
    });

    task.name = UpdateTaskDto.name;
    task.isCompleted = UpdateTaskDto.isCompleted;
    return this.tasksRepository.save(task);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.tasksRepository.delete(id);
  }
}
