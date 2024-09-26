import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { HttpException, HttpStatus} from '@nestjs/common';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
  private userRepository: Repository<User>
  ){}
 async create(createUserDto: CreateUserDto) {
  console.log(createUserDto)
  const userrep=await this.userRepository.create(createUserDto)
  return await this.userRepository.save(userrep) ;
 }

  async findAll() {
    return await this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

   async remove(id: number) {
    const data =await this.userRepository.findOne({
      where:{
        id:id
      }
    })
    if(!data)  return new HttpException('Not Found', HttpStatus.NOT_FOUND)
    return  this.userRepository.delete(id);
  }  }
