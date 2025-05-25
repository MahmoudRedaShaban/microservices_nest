import { NestFactory } from '@nestjs/core';
import { BookstoreApiGetewayModule } from './bookstore-api-geteway.module';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGetewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
