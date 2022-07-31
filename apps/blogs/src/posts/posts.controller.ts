import { Body, Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { MessagePattern } from '@nestjs/microservices';
import { PostEndpointsEnum } from '@endpoints/post-endpoints.enum';
import { PostInterface } from './interfaces/post.interface';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @MessagePattern(PostEndpointsEnum.CREATE_POST)
  async createPost(
    @Body('postData') postData: PostInterface,
    @Body('blogId') blogId: string,
  ): Promise<void> {
    // return this.postsService.createPost(postData, blogId);
  }
}
