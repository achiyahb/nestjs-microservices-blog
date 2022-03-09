import { Body, Controller } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateBlogInterface } from './interfaces/create-blog.interface';
import { BlogEndpointsEnum } from '@endpoints/blog-endpoints.enum';

@Controller()
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @MessagePattern(BlogEndpointsEnum.GET_BLOGS)
  getAllBlogs(@Body('authorId') authorId?: string) {
    return this.blogsService.getBlogs(authorId);
  }

  @MessagePattern(BlogEndpointsEnum.CREATE_BLOG)
  createBlogs(@Body() blogData: CreateBlogInterface) {
    return this.blogsService.createBlog(blogData);
  }
}
