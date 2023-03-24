import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Instructor {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field()
  email: string;
}
