import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersEventsDto } from './dto/create-users_events.input';
import { UsersEventsEntity } from './users_events.entity';

@Injectable()
export class UsersEventsService {
    constructor(@InjectRepository(UsersEventsEntity) private usersEventsRespository: Repository<UsersEventsEntity>){}

    async createEventEntry(data:CreateUsersEventsDto):Promise<UsersEventsEntity>{
        const event = new UsersEventsEntity();
        event.eventId = data.eventId;
        event.userId = data.userId;
        const eventDone = await this.usersEventsRespository.save(event);
        return eventDone;
    }

}