import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostLikesService } from './post-likes.service';
import { PostLikeEntity } from './entities/post-like.entity';
import { CreatePostLikeDto } from './dto/create-post-like.input';
import { UpdatePostLikeDto } from './dto/update-post-like.input';
import { CreateCommentUserPostDto } from 'src/celestial-post/dto/create-comment-celestial-post.input';
import { AllowUnauthorized } from 'src/auth/decorators/allow-unauthorized.decorator';

@Resolver(() => PostLikeEntity)
export class PostLikesResolver {
  constructor(private readonly postLikesService: PostLikesService) {}

  @Mutation(() => PostLikeEntity)
  createLike(
    @Args('createPostLikeInput') createPostLikeInput: CreatePostLikeDto,
  ): Promise<PostLikeEntity> {
    return this.postLikesService.createLike(createPostLikeInput);
  }

  @Mutation(() => PostLikeEntity)
  updateLike(
    @Args('id') id: string,
    @Args('updatePostLikeInput') updatePostLikeInput: UpdatePostLikeDto,
  ): Promise<PostLikeEntity> {
    return this.postLikesService.updateLike(id, updatePostLikeInput);
  }

  @Mutation(() => PostLikeEntity)
  deleteLike(@Args('id') id: string): Promise<PostLikeEntity> {
    return this.postLikesService.deleteLike(id);
  }

  @Query((returns) => [PostLikeEntity])
  async getComments(): Promise<Array<PostLikeEntity>> {
    return this.postLikesService.getComments();
  }

  @Query((returns) => PostLikeEntity)
  async getComment(@Args('id') id: string): Promise<PostLikeEntity> {
    return this.postLikesService.getComment(id);
  }

  @AllowUnauthorized()
  @Mutation(() => PostLikeEntity)
  postLike(
    @Args('likeInput') likeInput: CreatePostLikeDto,
    @Args({ name: 'post', type: () => CreateCommentUserPostDto })
    post: CreateCommentUserPostDto,
  ): Promise<PostLikeEntity> {
    return this.postLikesService.postLike(likeInput, post);
  }
}
