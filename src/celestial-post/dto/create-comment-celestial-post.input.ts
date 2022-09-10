import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCommentUserPostDto {
  @Field(() => String)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  imageLink: string;

  @Field(() => String)
  slug: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
