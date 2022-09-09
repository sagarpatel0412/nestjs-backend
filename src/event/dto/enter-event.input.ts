import { InputType, Int, Field } from '@nestjs/graphql';
import { UserEntity } from 'src/user/user.entity';
import { JoinColumn } from 'typeorm';

@InputType()
export class EnterEventDto {
  @Field(() => String)
  name: string;

  @Field(() => String)
  location: string;

  @Field(() => String)
  price: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  owner: string;

  @Field(() => String)
  contact: string;

  @Field(() => String)
  management_contact: string;

  @Field(() => String)
  manager: string;

  @Field(() => String)
  showDate: string;

  @Field(() => String)
  showTime: string;

  @Field(() => UserEntity)
//   @JoinColumn({name:"id"})
  users:UserEntity
}
