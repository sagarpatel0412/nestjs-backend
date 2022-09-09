import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class usersEventsInput{
  @Field(() => String)
  eventId: string;

   @Field(() => String)
  userId: string;
}