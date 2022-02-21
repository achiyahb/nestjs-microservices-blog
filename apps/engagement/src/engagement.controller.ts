import { Controller, Get } from '@nestjs/common';
import { EngagementService } from './engagement.service';

@Controller()
export class EngagementController {
  constructor(private readonly engagementService: EngagementService) {}

  @Get()
  getHello(): string {
    return this.engagementService.getHello();
  }
}
