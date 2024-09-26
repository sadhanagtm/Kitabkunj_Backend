import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
  private userRepository: Repository<User>,
  private jwtService: JwtService
  ){}
  async findOnes(createAuthDto: CreateAuthDto) {
    const data=await this.userRepository.findOne({
      where:{
        email:createAuthDto.email,
      }
    })
    console.log(createAuthDto,"Sasa")

    if(!data) throw new  HttpException('not found', HttpStatus.NOT_FOUND)
      if (data?.password !== createAuthDto.password) {
         throw new UnauthorizedException();
      }

      const { password, ...result } = data;
      const payload = { sub: data.id, username: data.username,email:data.email,active:data.isActive };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  findAll() {
    return `This action returns all auth`;
  }


  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
