import { CreateCarasoulDto } from './create-carasoul.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarasoulDto extends PartialType(CreateCarasoulDto) {
  @Field(() => String)
  id: string;
}
