import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostsDetailsDocument = PostDetails & Document;

@Schema()
export class PostDetails {
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
  image: string;

  @Prop({
    type: String,
  })
  link: string;

  @Prop({
    type: Boolean,
  })
  isPublished: boolean;
}

export const PostsDetailsSchema = SchemaFactory.createForClass(PostDetails);
