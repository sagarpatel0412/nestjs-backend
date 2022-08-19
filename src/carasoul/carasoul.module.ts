import { Module } from '@nestjs/common';
import { CarasoulService } from './carasoul.service';
import { CarasoulResolver } from './carasoul.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarasoulEntity } from './entities/carasoul.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CarasoulEntity])],
  providers: [CarasoulResolver, CarasoulService],
  exports:[CarasoulService]
})
export class CarasoulModule {}
