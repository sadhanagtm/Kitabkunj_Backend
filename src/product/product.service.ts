import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {

    const productrep=await this.productRepository.create(createProductDto)
    return await this.productRepository.save(productrep) ;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    const data =await this.productRepository.findOne({
      where:{
        id:id
      }
    })
    if(!data)  return new HttpException('Not Found', HttpStatus.NOT_FOUND)
    return  this.productRepository.delete(id);
  }
}
