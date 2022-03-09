import { Body, Controller } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { MessagePattern } from '@nestjs/microservices';
import { BlogEndpointsEnum } from '@libs/tcp-endpoints/blog-endpoints.enum';
import { CreateBlogInterface } from './interfaces/create-blog.interface';

@Controller()
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @MessagePattern(BlogEndpointsEnum.GET_BLOGS)
  getAllBlogs(@Body('authorId') authorId?: number) {
    return this.blogsService.getBlogs(authorId);
  }

  @MessagePattern(BlogEndpointsEnum.CREATE_BLOG)
  createBlogs(@Body() blogData: CreateBlogInterface) {
    return this.blogsService.createBlog(blogData);
  }
}
