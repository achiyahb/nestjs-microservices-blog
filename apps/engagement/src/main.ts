import { NestFactory } from '@nestjs/core';
import { EngagementModule } from './engagement.module';

async function bootstrap() {
  const app = await NestFactory.create(EngagementModule);
  await app.listen(3000);
}
bootstrap();
