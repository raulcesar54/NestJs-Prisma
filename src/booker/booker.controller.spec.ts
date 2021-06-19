import { Test, TestingModule } from '@nestjs/testing';
import { BookerController } from './booker.controller';
import { BookerService } from './booker.service';

describe('BookerController', () => {
  let controller: BookerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookerController],
      providers: [BookerService],
    }).compile();

    controller = module.get<BookerController>(BookerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
