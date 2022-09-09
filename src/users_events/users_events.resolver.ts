import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AllowUnauthorized } from 'src/auth/decorators/allow-unauthorized.decorator';
import { CreateUsersEventsDto } from './dto/create-users_events.input';
import { UsersEventsEntity } from './users_events.entity';
import { UsersEventsService } from './users_events.service';

Resolver((of) => UsersEventsEntity)
export class UsersEventsResolver{
    constructor(private readonly usersEventsService:UsersEventsService){}

    @AllowUnauthorized()
    @Mutation(() => UsersEventsEntity)
    async createUserEvents(@Args("data") data:CreateUsersEventsDto){
        await this.usersEventsService.createEventEntry(data)
    }
}