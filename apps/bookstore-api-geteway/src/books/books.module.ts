import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientProxyFactory } from '@nestjs/microservices';
import { BOOKS_CLIENT } from './constant';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientConfigService } from '../client-config/client-config.service';

@Module({
  imports: [ClientConfigModule],
  controllers: [BooksController],
  providers: [
    BooksService,
    {
      provide: BOOKS_CLIENT,
      inject: [ClientConfigService],
      useFactory: (configService: ClientConfigService) => {
        const clientOptions = configService.booksClientOptions;
        return ClientProxyFactory.create(clientOptions);
      },
    },
  ],
})
export class BooksModule {}

/**
 * imports: [
    ClientsModule.register([
      {
        name: BOOKS_CLIENT,
        transport: Transport.TCP,
        options:{port: 3002},
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}

 */