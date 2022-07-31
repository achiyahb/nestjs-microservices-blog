import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogInterface } from './interfaces/create-blog.interface';
import { Blogs, BlogsDocument } from './blogs.schema';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blogs.name) private blogModel: Model<BlogsDocument>,
  ) {}

  createBlog(blog: CreateBlogInterface) {
    return this.blogModel.create(blog);
  }

  getBlogs(authorId?: string) {
    return this.blogModel.find(authorId && { authorId }).exec();
  }

  async findBlogById(blogId: string) {
    return this.blogModel.findById(blogId).exec();
  }
}
