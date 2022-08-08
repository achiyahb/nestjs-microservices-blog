import { Injectable } from '@nestjs/common';
import { PostInterface } from './interfaces/post.interface';
import { BlogsService } from '../blogs/blogs.service';

@Injectable()
export class PostsService {
  constructor(private blogService: BlogsService) {}

  async createPost(postData: PostInterface, blogId: string) {
    return this.blogService.findBlogById(blogId);
  }

  async getPostById(postId: string, blogId: string) {
    return this.blogService.findBlogById(blogId);
  }
}
