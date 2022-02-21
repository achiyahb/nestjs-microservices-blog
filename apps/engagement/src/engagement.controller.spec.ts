import { Test, TestingModule } from '@nestjs/testing';
import { EngagementController } from './engagement.controller';
import { EngagementService } from './engagement.service';

describe('EngagementController', () => {
  let engagementController: EngagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EngagementController],
      providers: [EngagementService],
    }).compile();

    engagementController = app.get<EngagementController>(EngagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(engagementController.getHello()).toBe('Hello World!');
    });
  });
});
