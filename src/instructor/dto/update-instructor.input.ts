import { CreateInstructorInput } from './create-instructor.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateInstructorInput extends PartialType(CreateInstructorInput) {
  id: number;
}
