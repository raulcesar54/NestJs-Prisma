import { Module } from '@nestjs/common';
import { BookerService } from './booker.service';
import { BookerController } from './booker.controller';

@Module({
  controllers: [BookerController],
  providers: [BookerService]
})
export class BookerModule {}
