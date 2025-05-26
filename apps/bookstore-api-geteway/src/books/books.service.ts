import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { BOOKS_PATTERNS } from '@app/contracts/books/books.patterns';
import { BookDto as ClientBookDot}  from '@app/contracts/books/book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDot } from './dto/book.dto';
import { BOOKS_CLIENT } from './constant';

@Injectable()
export class BooksService {

  constructor(@Inject(BOOKS_CLIENT) private booksClient: ClientProxy) {}


  private mapBookDot(bookDot: ClientBookDot):BookDot{
    return {
      id: bookDot.id,
      title: bookDot.title
    };
  }
  create(createBookDto: CreateBookDto) {
    return this.booksClient.send(BOOKS_PATTERNS.CREATE, createBookDto).pipe(map(this.mapBookDot));
  }

  findAll() {
    return this.booksClient.send(BOOKS_PATTERNS.FIND_ALL, {});
  }

  findOne(id: number) {
    return this.booksClient.send(BOOKS_PATTERNS.FIND_ONE, id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send(BOOKS_PATTERNS.UPDATE, {id, ...updateBookDto});
  }

  remove(id: number) {
    return this.booksClient.send(BOOKS_PATTERNS.REMOVE, id);
  }
}
