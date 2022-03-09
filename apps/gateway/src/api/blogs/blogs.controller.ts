import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ServicesConnectionTokens } from '../../../../../libs/enums/services-connection-tokens';
import { ClientProxy } from '@nestjs/microservices';
import { BlogEndpointsEnum } from '../../../../../libs/tcp-endpoints/blog-endpoints.enum';
import { CreateBlogDto } from './dtos/create-blog.dto';
import { firstValueFrom } from 'rxjs';

@Controller('blogs')
export class BlogsController {
  constructor(
    @Inject(ServicesConnectionTokens.BLOGS_CLIENT)
    private blogsClient: ClientProxy,
  ) {}

  @Get()
  async GetAllBlogs(@Query('authorId') authorId: number) {
    try {
      return await firstValueFrom(
        this.blogsClient.send(BlogEndpointsEnum.GET_BLOGS, { authorId }),
      );
    } catch (e) {
      console.warn(e);
    }
  }

  @Post()
  createBlogs(@Body() newBlog: CreateBlogDto) {
    try {
      this.blogsClient
        .send(BlogEndpointsEnum.CREATE_BLOG, newBlog)
        .subscribe((data) => {
          return data;
        });
    } catch (e) {
      console.warn(e);
    }
  }
}
