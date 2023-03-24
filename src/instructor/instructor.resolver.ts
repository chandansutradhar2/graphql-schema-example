import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { InstructorService } from './instructor.service';
import { Instructor } from './entities/instructor.entity';
import { CreateInstructorInput } from './dto/create-instructor.input';
import { UpdateInstructorInput } from './dto/update-instructor.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub()

@Resolver(() => Instructor)
export class InstructorResolver {
  constructor(private readonly instructorService: InstructorService) { }


  @Mutation(() => Instructor)
  createInstructor(@Args('createInstructorInput') createInstructorInput: CreateInstructorInput) {
    const newInstructor = this.instructorService.create(createInstructorInput);
    pubSub.publish('instructorAdded', { instructorAdded: newInstructor });
    return newInstructor;
  }

  @Query(() => [Instructor], { name: 'instructors' })
  findAll() {
    return this.instructorService.findAll();
  }

  @Query(() => Instructor, { name: 'instructor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.instructorService.findOne(id);
  }

  @Mutation(() => Instructor)
  updateInstructor(@Args('updateInstructorInput') updateInstructorInput: UpdateInstructorInput) {
    return this.instructorService.update(updateInstructorInput.id, updateInstructorInput);
  }

  @Mutation(() => Instructor)
  removeInstructor(@Args('id', { type: () => Int }) id: number) {
    return this.instructorService.remove(id);
  }


  //exposing method for client to listen to (subscribe to)
  @Subscription((returns) => Instructor)
  instructorAdded() {
    return pubSub.asyncIterator('instructorAdded');
  }
}
