import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import {
  TcpOptions,
  Transport,
  MicroserviceOptions,
} from '@nestjs/microservices';
import { BlogsAppModule } from './blogs-app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(BlogsAppModule);
  const configService = app.get(ConfigService);
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(BlogsAppModule, {
      transport: Transport.TCP,
      options: {
        host: configService.get('blogs.host'),
        port: configService.get('blogs.port'),
      },
    } as TcpOptions);
  await microservice.listen();
}

bootstrap();
