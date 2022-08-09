import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Posts } from '../posts/posts.schema';

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
  Posts: Posts[];
}

export const BlogsSchema = SchemaFactory.createForClass(Blogs);
