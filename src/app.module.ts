import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookerModule } from './booker/booker.module';

@Module({
  imports: [BookerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
