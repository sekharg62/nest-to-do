import { Module } from '@nestjs/common';
import { BookResolver } from './resolvers/book.resolver';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './model/book.model';

@Module({
  imports:[MongooseModule.forFeature([{ name:Book.name,schema:BookSchema }])],
  providers: [BookResolver, BookService],
   exports: [BookService],
})
export class BookModule {}
