import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity('carasoul')
@ObjectType()
export class CarasoulEntity {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id:string;

  @Column('varchar')
  @Field(() => String)
  image:string;

  @Column('varchar')
  @Field(() => String)
  description:string;

  @Column('varchar')
  @Field(() => String)
  title:string;

  @Column('varchar')
  @Field(() => String)
  quote:string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  upadateAt: Date;

}
