import { BookDto } from '@app/contracts/books/book.dto';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { Injectable } from '@nestjs/common';


@Injectable()
export class BooksService {

  private books: BookDto[] = [
    {
      id: 1,
      title: 'lorem 2',
      author: 'mahmoud',
      rating: 3
    },
    {
      id: 2,
      title: 'lorem 3',
      author: 'ali',
      rating: 2
    },
  ];
  create(createBookDto: CreateBookDto) {
    return this.books.push({id: this.books.length+1 , ...createBookDto});
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find(book => book.id == id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    this.books = this.books.map(function(book) {
      if (book.id == id) {
        return {
          id: id,
          title: updateBookDto.title !== undefined ? updateBookDto.title : book.title,
          author: updateBookDto.author !== undefined ? updateBookDto.author : book.author,
          rating: updateBookDto.rating !== undefined ? updateBookDto.rating : book.rating,
        };
      }
      return book;
    });
    return this.books;
  }

  remove(id: number) {
   this.books = this.books.filter(book => book.id != id);
   return this.books;
  }
}
