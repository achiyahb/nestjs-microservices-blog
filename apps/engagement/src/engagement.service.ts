import { Injectable } from '@nestjs/common';

@Injectable()
export class EngagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
