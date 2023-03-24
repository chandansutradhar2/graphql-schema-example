import { Injectable } from '@nestjs/common';
import { CreateInstructorInput } from './dto/create-instructor.input';
import { UpdateInstructorInput } from './dto/update-instructor.input';
import { Instructor } from './entities/instructor.entity';

@Injectable()
export class InstructorService {

  instructors: Instructor[] = [];

  constructor() {
    this.instructors.push({
      email: 'abc@gmail.com',
      id: 1,
      name: 'Xavier Stevan'
    })
  }
  create(c: CreateInstructorInput) {
    this.instructors.push({
      id: c.id,
      email: c.email,
      name: c.name
    });
    return c;
  }

  findAll() {
    return this.instructors;
  }

  findOne(id: number) {
    return `This action returns a #${id} instructor`;
  }

  update(id: number, updateInstructorInput: UpdateInstructorInput) {
    return `This action updates a #${id} instructor`;
  }

  remove(id: number) {
    return `This action removes a #${id} instructor`;
  }
}
