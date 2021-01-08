import { Module } from '@nestjs/common';
import { BoardModule } from './movies/board.module';

@Module({
  imports: [BoardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
