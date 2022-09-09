import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateUsersEventsDto{
  @Field(() => String)
  eventId: string;

  @Field(() => String)
  userId: string;
}