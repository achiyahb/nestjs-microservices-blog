import { Body, Controller } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { CreateBlogInterface } from './interfaces/create-blog.interface';
import { BlogEndpointsEnum } from '@endpoints/blog-endpoints.enum';

@Controller()
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @MessagePattern(BlogEndpointsEnum.GET_BLOGS)
  getAllBlogs(@Body('authorId') authorId?: string) {
    try {
      return this.blogsService.getBlogs(authorId);
    } catch (e) {
      console.log(e);
      throw new RpcException(e);
    }
  }

  @MessagePattern(BlogEndpointsEnum.GET_BLOG)
  getBlogById(@Body('blogId') blogId: string) {
    try {
      return this.blogsService.findBlogById(blogId);
    } catch (e) {
      console.log(e);
      throw new RpcException(e);
    }
  }

  @MessagePattern(BlogEndpointsEnum.CREATE_BLOG)
  createBlogs(@Body() blogData: CreateBlogInterface) {
    try {
      return this.blogsService.createBlog(blogData);
    } catch (e) {
      console.log(e);
      throw new RpcException(e);
    }
  }

  @MessagePattern(BlogEndpointsEnum.UPDATE_BLOG)
  updateBlog(
    @Body('blogId') blogId: string,
    @Body() blogData: CreateBlogInterface,
  ) {
    try {
      return this.blogsService.updateBlog(blogId, blogData);
    } catch (e) {
      console.log(e);
      throw new RpcException(e);
    }
  }

  @MessagePattern(BlogEndpointsEnum.DELETE_BLOG)
  deleteBlog(@Body('blogId') blogId: string) {
    try {
      return this.blogsService.deleteBlog(blogId);
    } catch (e) {
      console.log(e);
      throw new RpcException(e);
    }
  }
}
