import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NewsletterService } from './newsletter.service';
import { NewsletterEntity } from './entities/newsletter.entity';
import { CreateNewsletterDto } from './dto/create-newsletter.input';
import { UpdateNewsletterInput } from './dto/update-newsletter.input';
import { AllowUnauthorized } from 'src/auth/decorators/allow-unauthorized.decorator';

@Resolver(() => NewsletterEntity)
export class NewsletterResolver {
  constructor(private readonly newsletterService: NewsletterService) {}

  @AllowUnauthorized()
  @Mutation(() => NewsletterEntity)
  createNewsletter(
    @Args('createNewsletterInput') createNewsletterInput: CreateNewsletterDto,
  ) {
    return this.newsletterService.createNewsletter(createNewsletterInput);
  }

  @Query(() => [NewsletterEntity])
  getNewsletters() {
    return this.newsletterService.getNewsletters();
  }

  @Query(() => NewsletterEntity)
  getNewsletter(@Args('id') id: string) {
    return this.newsletterService.getNewsletter(id);
  }

  @Mutation(() => NewsletterEntity)
  deleteNewsletter(@Args('id') id: string) {
    return this.newsletterService.deleteNewsletter(id);
  }
}
