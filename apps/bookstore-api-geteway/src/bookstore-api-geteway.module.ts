import { Module } from '@nestjs/common';
import { BookstoreApiGetewayController } from './bookstore-api-geteway.controller';
import { BookstoreApiGetewayService } from './bookstore-api-geteway.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [BookstoreApiGetewayController],
  providers: [BookstoreApiGetewayService],
})
export class BookstoreApiGetewayModule {}
