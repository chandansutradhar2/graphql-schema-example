import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InstructorService } from './instructor.service';
import { CreateInstructorInput } from './dto/create-instructor.input';
import { UpdateInstructorInput } from './dto/update-instructor.input';

@Resolver('Instructor')
export class InstructorResolver {
  constructor(private readonly instructorService: InstructorService) { }

  @Mutation('createInstructor')
  create(@Args('createInstructorInput') createInstructorInput: CreateInstructorInput) {
    return this.instructorService.create(createInstructorInput);
  }

  @Query('instructors')
  findAll() {
    return this.instructorService.findAll();
  }

  @Query('instructor')
  findOne(@Args('id') id: number) {
    return this.instructorService.findOne(id);
  }

  @Mutation('updateInstructor')
  update(@Args('updateInstructorInput') updateInstructorInput: UpdateInstructorInput) {
    return this.instructorService.update(updateInstructorInput.id, updateInstructorInput);
  }

  @Mutation('removeInstructor')
  remove(@Args('id') id: number) {
    return this.instructorService.remove(id);
  }
}
