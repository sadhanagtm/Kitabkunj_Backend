import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus} from '@nestjs/common';

import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from './entities/content.entity'

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
  private contentRepository : Repository<Content>,
){}
  async create(createContentDto: CreateContentDto,file:string) {
    console.log(createContentDto)
    const contentrep=await this.contentRepository.create(createContentDto)
    return await this.contentRepository.save(contentrep) ;
   }

  findAll() {
    return this.contentRepository.find();
  }

  findOne(id: number) {
    return this.contentRepository.findOneBy({ id });
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return `This action updates a #${id} product`;
  }

 async remove(id: number) {
  const data =await this.contentRepository.findOne({
    where:{
      id:id
    }
  })
  if(!data)  return new HttpException('Not Found', HttpStatus.NOT_FOUND)
  return  this.contentRepository.delete(id);
}
}
