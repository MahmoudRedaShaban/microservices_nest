import { Injectable } from '@nestjs/common';

@Injectable()
export class BookstoreApiGetewayService {
  getHello(): string {
    return 'Hello World! !!!';
  }
}
