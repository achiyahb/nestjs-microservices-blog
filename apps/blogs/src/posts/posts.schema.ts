import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostsDocument = Post & Document;

@Schema()
export class Post {
  @Prop({
    type: String,
  })
  id: string;

  @Prop({
    type: String,
  })
  title: string;

  @Prop({
    type: String,
  })
  description: string;

  @Prop({
    type: String,
  })
  content: string;

  @Prop({
    type: String,
  })
  image: string;

  @Prop({
    type: String,
  })
  link: string;

  @Prop({
    type: Boolean,
  })
  isPublished: boolean;

  @Prop({
    type: String,
  })
  createdAt: string;

  @Prop({
    type: String,
  })
  updatedAt: string;
}

export const PostsSchema = SchemaFactory.createForClass(Post);
