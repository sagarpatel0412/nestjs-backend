import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCarasoulDto {

  @Field(() => String)
  image:string

  @Field(() => String)
  description:string

  @Field(() => String)
  title:string

  @Field(() => String)
  qoute:string

}
