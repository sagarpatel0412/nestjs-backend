import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.input';
import { userEventInput } from 'src/user/input/user-event.input';
import { userInput } from 'src/user/input/user.input';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.input';
import { EnterEventDto } from './dto/enter-event.input';
import { UpdateEventDto } from './dto/update-event.input';
import { EventEntity } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity) private eventEntity: Repository<EventEntity>,
  ) {}

  async createEvent(createEventInput: CreateEventDto): Promise<EventEntity> {
    const eventInput = new EventEntity();
    eventInput.name = createEventInput.name;
    eventInput.description = createEventInput.description;
    eventInput.contact = createEventInput.contact;
    eventInput.location = createEventInput.location;
    eventInput.price = createEventInput.price;
    eventInput.manager = createEventInput.manager;
    eventInput.management_contact = createEventInput.management_contact;
    eventInput.owner = createEventInput.owner;
    eventInput.showDate = createEventInput.showDate;
    eventInput.showTime = createEventInput.showTime;

    const event = await this.eventEntity.save(eventInput);
    return event;
  }

  async updateEvent(
    id: string,
    updateEventInput: UpdateEventDto,
  ): Promise<EventEntity> {
    const eventInput = await this.eventEntity.preload({
      id: id,
      ...updateEventInput,
    });
    if (!eventInput) {
      throw new NotFoundException(`Event with ${id} not found`);
    } else {
      eventInput.name = updateEventInput.name;
      eventInput.description = updateEventInput.description;
      eventInput.contact = updateEventInput.contact;
      eventInput.location = updateEventInput.location;
      eventInput.price = updateEventInput.price;
      eventInput.manager = updateEventInput.manager;
      eventInput.management_contact = updateEventInput.management_contact;
      eventInput.owner = updateEventInput.owner;
      eventInput.showDate = updateEventInput.showDate;
      eventInput.showTime = updateEventInput.showTime;

      const event = await this.eventEntity.save(eventInput);
      return event;
    }
  }

  async deleteEvent(id: string): Promise<EventEntity> {
    const event = await this.eventEntity.findOne({ where: { id } });

    if (!event) {
      throw new NotFoundException(`Event with ${id} not found`);
    } else {
      await this.eventEntity.remove(event);
      return {
        id: id,
        name: '',
        description: '',
        contact: '',
        location: '',
        price: '',
        manager: '',
        management_contact: '',
        owner: '',
        showDate: '',
        showTime: '',
        createdAt: new Date(0),
        updateAt: new Date(0),
        users: null,
      };
    }
  }

  async getEvent(id: string): Promise<EventEntity> {
    const event = await this.eventEntity.findOne({ where: { id } });
    return event;
  }

  async getEvents(): Promise<Array<EventEntity>> {
    const event = await this.eventEntity.find();
    return event;
  }

   async enterEvent(createEventInput: CreateEventDto,user:[userEventInput]): Promise<EventEntity> {
    console.log("user",user)
    const eventInput = new EventEntity();
 
    eventInput.name = createEventInput.name;
    eventInput.description = createEventInput.description;
    eventInput.contact = createEventInput.contact;
    eventInput.location = createEventInput.location;
    eventInput.price = createEventInput.price;
    eventInput.manager = createEventInput.manager;
    eventInput.management_contact = createEventInput.management_contact;
    eventInput.owner = createEventInput.owner;
    eventInput.showDate = createEventInput.showDate;
    eventInput.showTime = createEventInput.showTime;
    console.log('eventInput.users', typeof eventInput.users)
    eventInput.users = Promise.resolve(user)
    const event = await this.eventEntity.save(eventInput);
    return event;
  }
}
