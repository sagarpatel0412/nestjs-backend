import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewsletterDto } from './dto/create-newsletter.input';
import { UpdateNewsletterInput } from './dto/update-newsletter.input';
import { NewsletterEntity } from './entities/newsletter.entity';

@Injectable()
export class NewsletterService {
  constructor(
    @InjectRepository(NewsletterEntity)
    private newsLetterRepository: Repository<NewsletterEntity>,
  ) {}
  async createNewsletter(
    createNewsletterInput: CreateNewsletterDto,
  ): Promise<NewsletterEntity> {
    const newsletterInput = new NewsletterEntity();
    newsletterInput.email = createNewsletterInput.email;
    const newsletter = await this.newsLetterRepository.save(newsletterInput);
    return newsletter;
  }

  async getNewsletters(): Promise<Array<NewsletterEntity>> {
    const newsletter = await this.newsLetterRepository.find();
    return newsletter;
  }

  async getNewsletter(id: string): Promise<NewsletterEntity> {
    const newsletter = await this.newsLetterRepository.findOne({
      where: { id },
    });
    return newsletter;
  }

  async deleteNewsletter(id: string): Promise<NewsletterEntity> {
    const newsletter = await this.newsLetterRepository.findOne({
      where: { id },
    });
    if (!newsletter) {
      throw new NotFoundException(`comment with ${id} not found`);
    } else {
      await this.newsLetterRepository.remove(newsletter);

      return {
        id: id,
        email: '',
        createdAt: new Date(0),
        updatedAt: new Date(0),
      };
    }
  }
}
