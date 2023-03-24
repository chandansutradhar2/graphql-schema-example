import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInstructorInput {
  @Field(() => Int, { description: 'Example field (placeholder)', nullable: false })
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

}
