import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity("user_event")
@ObjectType()
export class UsersEventsEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column('varchar')
  @Field(() => String)
  eventId: string;

  @Column('varchar')
  @Field(() => String)
  userId: string;

}