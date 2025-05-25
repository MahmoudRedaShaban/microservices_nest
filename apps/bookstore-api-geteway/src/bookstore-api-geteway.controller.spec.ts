import { Test, TestingModule } from '@nestjs/testing';
import { BookstoreApiGetewayController } from './bookstore-api-geteway.controller';
import { BookstoreApiGetewayService } from './bookstore-api-geteway.service';

describe('BookstoreApiGetewayController', () => {
  let bookstoreApiGetewayController: BookstoreApiGetewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookstoreApiGetewayController],
      providers: [BookstoreApiGetewayService],
    }).compile();

    bookstoreApiGetewayController = app.get<BookstoreApiGetewayController>(BookstoreApiGetewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bookstoreApiGetewayController.getHello()).toBe('Hello World!');
    });
  });
});
