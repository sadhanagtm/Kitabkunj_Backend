import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus} from '@nestjs/common';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
  private contactRepository : Repository<Contact>,
){}
  async create(createContactDto: CreateContactDto) {
    console.log(createContactDto)
    const contactrep=await this.contactRepository.create(createContactDto)
    return await this.contactRepository.save(contactrep) ;
   
  }

  findAll() {
    return this.contactRepository.find();
  }

  findOne(id: number) {
    return this.contactRepository.findOneBy({ id });
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

 async remove(id: number) {
  const data =await this.contactRepository.findOne({
    where:{
      id:id
    }
  })
  if(!data)  return new HttpException('Not Found', HttpStatus.NOT_FOUND)
  return  this.contactRepository.delete(id);
  }
}
