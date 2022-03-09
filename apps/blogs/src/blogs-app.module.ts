import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { blogsConfig } from '@configs/services-config/blogs-config';
import { PostsModule } from './posts/posts.module';
import { BlogsModule } from './blogs/blogs.module';
import { mongodbConfig } from '@configs/mongodb-config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('mongodb.uri'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [blogsConfig, mongodbConfig],
    }),
    PostsModule,
    BlogsModule,
  ],
})
export class BlogsAppModule {}
