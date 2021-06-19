import { Module } from '@nestjs/common';
import { BookerService } from './booker.service';
import { BookerController } from './booker.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [BookerController],
  providers: [BookerService, PrismaService]
})
export class BookerModule {}
