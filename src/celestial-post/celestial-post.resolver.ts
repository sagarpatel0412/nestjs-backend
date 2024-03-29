import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CelestialPostService } from './celestial-post.service';
import { CelestialPost } from './entities/celestial-post.entity';
import { CreateCelestialPostDto } from './dto/create-celestial-post.input';
import { UpdateCelestialPostInput } from './dto/update-celestial-post.input';
import { CelestialPostModel } from './model/celestial-post.model';
import { CreateUserPostDto } from './dto/create-user-celestial-post.input';
import { createUserPostInput } from 'src/user/input/create-user-post.input';
import { AllowUnauthorized } from 'src/auth/decorators/allow-unauthorized.decorator';

@Resolver(() => CelestialPost)
export class CelestialPostResolver {
  constructor(private readonly celestialPostService: CelestialPostService) {}

  @Query((returns) => [CelestialPost])
  async getPosts(): Promise<Array<CelestialPostModel>> {
    return this.celestialPostService.getPosts();
  }

  @Mutation((returns) => CelestialPostModel)
  async createPost(
    @Args('celestialPostData') celestialPostData: CreateCelestialPostDto,
  ): Promise<CelestialPost> {
    return this.celestialPostService.createPost(celestialPostData);
  }

  @Query((returns) => CelestialPostModel)
  async getPost(@Args('id') id: string): Promise<CelestialPostModel> {
    return this.celestialPostService.getPost(id);
  }

  @Mutation((returns) => CelestialPostModel)
  async deletePost(@Args('id') id: string): Promise<CelestialPost> {
    return this.celestialPostService.deletePost(id);
  }

  @Mutation((returns) => CelestialPostModel)
  async updatePost(
    @Args('id') id: string,
    @Args('updateCelestialPost') updateCelestialPost: CreateCelestialPostDto,
  ): Promise<CreateCelestialPostDto> {
    return this.celestialPostService.updatePost(id, updateCelestialPost);
  }


  @AllowUnauthorized()
  @Mutation((returns) => CelestialPost)
  async createUserPost(
    @Args('postInput') postInput:CreateUserPostDto,
    @Args({name:"user",type:() => createUserPostInput}) user:createUserPostInput
  ) {
    return await this.celestialPostService.createUserPost(postInput,user)
  }
}
