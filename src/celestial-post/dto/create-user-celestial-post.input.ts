import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserPostDto {
  @Field(() => String)
  userId: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  imageLink: string;

  @Field(() => String)
  slug: string;
}
