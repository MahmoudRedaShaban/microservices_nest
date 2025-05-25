import { Controller, Get } from '@nestjs/common';
import { BookstoreApiGetewayService } from './bookstore-api-geteway.service';

@Controller()
export class BookstoreApiGetewayController {
  constructor(private readonly bookstoreApiGetewayService: BookstoreApiGetewayService) {}

  @Get()
  getHello(): string {
    return this.bookstoreApiGetewayService.getHello();
  }
}
