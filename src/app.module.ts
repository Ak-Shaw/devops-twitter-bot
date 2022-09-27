import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterController } from './twitter/twitter.controller';

@Module({
  imports: [],
  controllers: [AppController, TwitterController],
  providers: [AppService],
})
export class AppModule {}
