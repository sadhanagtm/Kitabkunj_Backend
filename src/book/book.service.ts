import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { CreateBookDto } from './dto/create-book.dto';
import {  UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entitites/book.entity';
import { Repository } from 'typeorm';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}
  async create(createBookDto: CreateBookDto) {

    const bookrep=this.bookRepository.create(createBookDto)
    return await this.bookRepository.save(bookrep) ;
  }

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.bookRepository.findOneBy({ id });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    const data =await this.bookRepository.findOne({
      where:{
        id:id
      }
    })
    if(!data)  return new HttpException('Not Found', HttpStatus.NOT_FOUND)
    return  this.bookRepository.delete(id);
  }
}
