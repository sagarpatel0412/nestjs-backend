import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventService } from './event.service';
import { EventEntity } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.input';
import { UpdateEventDto } from './dto/update-event.input';
import { AllowUnauthorized } from 'src/auth/decorators/allow-unauthorized.decorator';

@Resolver(() => Event)
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
}
