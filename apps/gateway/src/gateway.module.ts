import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { blogsConfig } from '@config/configs/services-config/blogs-config';

@Module({
  imports: [
    ApiModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [blogsConfig],
    }),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
