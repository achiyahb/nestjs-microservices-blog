import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PostsDetailsDocument } from './posts-details.schema';

export type BlogsDocument = Blogs & Document;

@Schema()
export class Blogs {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  description: string;

  @Prop({
    type: String,
  })
  title: string;

  @Prop({
    type: Number,
  })
  authorId: number;

  @Prop({
    type: String,
  })
  mainImage: string;

  @Prop({
    type: Array,
  })
  PostsDetails: PostsDetailsDocument[];
}

export const BlogsSchema = SchemaFactory.createForClass(Blogs);
