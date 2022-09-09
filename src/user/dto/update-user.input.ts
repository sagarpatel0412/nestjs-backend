import { CreateUserDto } from './create-user.input';
import { InputType, Field, Int, PartialType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdateUserInput extends PartialType(CreateUserDto) {
  @Field(() => String)
  id: string;
  // @Field(() => String)
  // email?: string;
  // @Field(() => String)
  // username?: string;
  // @Field(() => String)
  // firstname?: string;
  // @Field(() => String)
  // lastname?: string;
  // @Field(() => String)
  // password?: string;
  // @Field(() => Int)
  // contact?: number;
  // @Field(() => String)
  // address?: string;
}
