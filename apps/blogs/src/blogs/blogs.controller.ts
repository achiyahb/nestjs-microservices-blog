import { Body, Controller } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { CreateBlogInterface } from './interfaces/create-blog.interface';
import { BlogEndpointsEnum } from '@endpoints/blog-endpoints.enum';

@Controller()
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @MessagePattern(BlogEndpointsEnum.GET_BLOGS)
  async getAllBlogs(@Body('authorId') authorId?: string) {
    try {
      return await this.blogsService.getBlogs(authorId);
    } catch (e) {
      console.log(e);
      throw new RpcException(e);
    }
  }

  @MessagePattern(BlogEndpointsEnum.GET_BLOGS)
  async getBlogById(@Body('blogId') blogId?: string) {
    try {
      return await this.blogsService.findBlogById(blogId);
    } catch (e) {
      console.log(e);
      throw new RpcException(e);
    }
  }

  @MessagePattern(BlogEndpointsEnum.CREATE_BLOG)
  async createBlogs(@Body() blogData: CreateBlogInterface) {
    try {
      return await this.blogsService.createBlog(blogData);
    } catch (e) {
      console.log(e);
      throw new RpcException(e);
    }
  }

  @MessagePattern(BlogEndpointsEnum.UPDATE_BLOG)
  async updateBlog(
    @Body() blogData: CreateBlogInterface,
    @Body('blogId') blogId?: string,
  ) {
    try {
      return await this.blogsService.updateBlog(blogId, blogData);
    } catch (e) {
      console.log(e);
      throw new RpcException(e);
    }
  }

  @MessagePattern(BlogEndpointsEnum.DELETE_BLOG)
  async deleteBlog(@Body('blogId') blogId?: string) {
    try {
      return await this.blogsService.deleteBlog(blogId);
    } catch (e) {
      console.log(e);
      throw new RpcException(e);
    }
  }
}
