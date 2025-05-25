import { Module } from '@nestjs/common';
import { BookstoreApiGetewayController } from './bookstore-api-geteway.controller';
import { BookstoreApiGetewayService } from './bookstore-api-geteway.service';

@Module({
  imports: [],
  controllers: [BookstoreApiGetewayController],
  providers: [BookstoreApiGetewayService],
})
export class BookstoreApiGetewayModule {}
