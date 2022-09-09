import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventService } from './event.service';
import { EventEntity } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.input';
import { UpdateEventDto } from './dto/update-event.input';
import { AllowUnauthorized } from 'src/auth/decorators/allow-unauthorized.decorator';
import { EnterEventDto } from './dto/enter-event.input';
import { UserEntity } from 'src/user/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.input';
import { userInput } from 'src/user/input/user.input';
import { userEventInput } from 'src/user/input/user-event.input';

@Resolver(() => EventEntity)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @AllowUnauthorized()
  @Mutation(() => EventEntity)
  createEvent(@Args('createEventInput') createEventInput: CreateEventDto) {
    return this.eventService.createEvent(createEventInput);
  }

  @AllowUnauthorized()
  @Mutation(() => EventEntity)
  updateEvent(
    @Args('id') id: string,
    @Args('updateEventInput') updateEventInput: UpdateEventDto,
  ) {
    return this.eventService.updateEvent(id, updateEventInput);
  }

  @AllowUnauthorized()
  @Mutation(() => EventEntity)
  deleteEvent(@Args('id') id: string) {
    return this.eventService.deleteEvent(id);
  }

  @AllowUnauthorized()
  @Query(() => EventEntity)
  getEvent(@Args('id') id: string) {
    return this.eventService.getEvent(id);
  }

  @AllowUnauthorized()
  @Query(() => [EventEntity])
  getEvents() {
    return this.eventService.getEvents();
  }

  @AllowUnauthorized()
  @Mutation(() => EventEntity)
  enterEvent(@Args('createEventInput') createEventInput: CreateEventDto, @Args({name:"users", type: () => [userEventInput]}) user: [userEventInput]) {
    return this.eventService.enterEvent(createEventInput,user);
  }
}
