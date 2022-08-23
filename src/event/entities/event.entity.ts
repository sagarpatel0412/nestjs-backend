import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('event')
@ObjectType()
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column('varchar')
  @Field(() => String)
  name: string;

  @Column('varchar')
  @Field(() => String)
  location: string;

  @Column('varchar')
  @Field(() => String)
  price: string;

  @Column('varchar')
  @Field(() => String)
  description: string;

  @Column('varchar')
  @Field(() => String)
  owner: string;

  @Column('varchar')
  @Field(() => String)
  contact: string;

  @Column('varchar')
  @Field(() => String)
  management_contact: string;

  @Column('varchar')
  @Field(() => String)
  manager: string;

  @Column('varchar')
  @Field(() => String)
  showDate: string;

  @Column('varchar')
  @Field(() => String)
  showTime: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
