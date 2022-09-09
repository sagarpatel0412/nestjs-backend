import { UsersEventsEntity } from './users_events.entity';
import { Module } from '@nestjs/common';
import { UsersEventsResolver } from './users_events.resolver';
import { UsersEventsService } from './users_events.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([UsersEventsEntity])],
  providers: [UsersEventsResolver, UsersEventsService],
})
export class UsersEventsModule {}