import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNewsletterDto {
  @Field(() => String)
  email: string;
}
