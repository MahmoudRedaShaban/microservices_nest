import { Module } from '@nestjs/common';
import { BookstoreApiGetewayController } from './bookstore-api-geteway.controller';
import { BookstoreApiGetewayService } from './bookstore-api-geteway.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { ClientConfigModule } from './client-config/client-config.module';

@Module({
  imports: [UsersModule, BooksModule, ClientConfigModule],
  controllers: [BookstoreApiGetewayController],
  providers: [BookstoreApiGetewayService],
})
export class BookstoreApiGetewayModule {}
