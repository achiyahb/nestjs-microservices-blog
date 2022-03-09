import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogsDocument = Blogs & Document;

@Schema()
export class Blogs {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  title: string;

  @Prop()
  authorId: number;

  @Prop()
  mainImage: string;
}

export const BlogsSchema = SchemaFactory.createForClass(Blogs);
