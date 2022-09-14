import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterResolver } from './newsletter.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsletterEntity } from './entities/newsletter.entity';

@Module({
  imports:[TypeOrmModule.forFeature([NewsletterEntity])],
  providers: [NewsletterResolver, NewsletterService]
})
export class NewsletterModule {}
