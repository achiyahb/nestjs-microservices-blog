import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { ServicesConnectionTokens } from '../../../../../libs/enums/services-connection-tokens';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  controllers: [BlogsController],
  providers: [
    {
      provide: ServicesConnectionTokens.BLOGS_CLIENT,
      useFactory: (configService: ConfigService) => {
        const UserServiceOptions = {
          options: {
            port: configService.get('blogs.port'),
            host: configService.get('blogs.host'),
          },
          transport: configService.get('blogs.transport'),
        };
        return ClientProxyFactory.create(UserServiceOptions);
      },
      inject: [ConfigService],
    },
  ],
})
export class BlogsModule {}
