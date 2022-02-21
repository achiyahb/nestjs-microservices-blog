import { Module } from '@nestjs/common';
import { EngagementController } from './engagement.controller';
import { EngagementService } from './engagement.service';

@Module({
  imports: [],
  controllers: [EngagementController],
  providers: [EngagementService],
})
export class EngagementModule {}
