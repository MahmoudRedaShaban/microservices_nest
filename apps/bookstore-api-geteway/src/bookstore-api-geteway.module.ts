import { Module } from '@nestjs/common';
import { BookstoreApiGetewayController } from './bookstore-api-geteway.controller';
import { BookstoreApiGetewayService } from './bookstore-api-geteway.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule, BooksModule],
  controllers: [BookstoreApiGetewayController],
  providers: [BookstoreApiGetewayService],
})
export class BookstoreApiGetewayModule {}
