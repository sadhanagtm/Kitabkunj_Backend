import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './Constant';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '120s' },
  }),
],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}