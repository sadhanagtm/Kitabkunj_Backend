// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthService } from './auth.service';

// describe('AuthService', () => {
//   let service: AuthService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [AuthService],
//     }).compile();

//     service = module.get<AuthService>(AuthService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findAll();
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    // const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return user;
  }
}
