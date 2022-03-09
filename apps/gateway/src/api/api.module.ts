import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BlogsModule } from './blogs/blogs.module';
import { UsersModule } from './users/users.module';
import { EngagementModule } from './engagement/engagement.module';

@Module({
  imports: [AuthModule, BlogsModule, UsersModule, EngagementModule],
})
export class ApiModule {}
