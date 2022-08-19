import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CarasoulService } from './carasoul.service';
import { CarasoulEntity } from './entities/carasoul.entity';
import { CreateCarasoulDto } from './dto/create-carasoul.input';
import { UpdateCarasoulDto } from './dto/update-carasoul.input';
import { AllowUnauthorized } from 'src/auth/decorators/allow-unauthorized.decorator';

@Resolver(() => CarasoulEntity)
export class CarasoulResolver {
  constructor(private readonly carasoulService: CarasoulService) {}

  @AllowUnauthorized()
  @Mutation(() => CarasoulEntity)
  createCarasoul(
    @Args('createCarasoulInput') createCarasoulInput: CreateCarasoulDto,
  ) {
    return this.carasoulService.createCarasoul(createCarasoulInput);
  }

  @AllowUnauthorized()
  @Query(() => [CarasoulEntity])
  getCarasouls() {
    return this.carasoulService.getCarasouls();
  }

  @AllowUnauthorized()
  @Query(() => CarasoulEntity, { name: 'carasoul' })
  getCarasoul(@Args('id') id: string) {
    return this.carasoulService.getCarasoul(id);
  }

  @AllowUnauthorized()
  @Mutation(() => CarasoulEntity)
  updateCarasoul(
    @Args('id') id: string,
    @Args('updateCarasoulInput') updateCarasoulInput: UpdateCarasoulDto,
  ) {
    return this.carasoulService.updateCarasoul(id, updateCarasoulInput);
  }

  @AllowUnauthorized()
  @Mutation(() => CarasoulEntity)
  deleteCarasoul(@Args('id') id: string) {
    return this.carasoulService.deleteCarasoul(id);
  }
}
