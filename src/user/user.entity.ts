import { Field, Int, ObjectType } from '@nestjs/graphql';
import { isEmpty } from 'class-validator';
import { CelestialPost } from 'src/celestial-post/entities/celestial-post.entity';
import { EventEntity } from 'src/event/entities/event.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

@Entity('user')
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column('varchar', { length: 500, unique: true })
  @Field(() => String)
  email: string;

  @Column('varchar', { length: 500 })
  @Field(() => String)
  firstname: string;

  @Column('varchar', { length: 500 })
  @Field(() => String)
  lastname: string;

  @Column('varchar', { length: 500, unique: true })
  @Field(() => String)
  username: string;

  @Column('varchar', { length: 500 })
  @Field(() => String)
  password: string;

  @Column('varchar')
  @Field(() => String)
  address: string;

  @Column('int')
  @Field(() => Int)
  contact: number;

  @OneToMany(
    () => CelestialPost,
    (celestialPosts: CelestialPost) => celestialPosts.users,
  )
  @Field(() => [CelestialPost], { nullable: true })
  celestialPosts?: CelestialPost[] | null;

  @ManyToMany(() => EventEntity, (event) => event.users)
  @Field(() => [EventEntity], { nullable: true })
  events?: EventEntity[] | null;
}
