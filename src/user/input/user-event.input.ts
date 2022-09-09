import { Field, InputType, Int } from '@nestjs/graphql';
import { CelestialPost } from 'src/celestial-post/entities/celestial-post.entity';
import { EventEntity } from 'src/event/entities/event.entity';

@InputType()
export class userEventInput {
  @Field(() => String)
  id: string;
  @Field(() => String)
  email: string;
  @Field(() => String)
  username: string;
  @Field(() => String)
  firstname: string;
  @Field(() => String)
  lastname: string;
  @Field(() => String)
  password: string;
  @Field(() => Int)
  contact: number;
  @Field(() => String)
  address: string;
  // @Field(() => [CelestialPost], {nullable:true})
  // celestialPosts?: [CelestialPost] | null;
  // @Field(() => [EventEntity], {nullable:true})
  // events?: EventEntity[] | null;
}
