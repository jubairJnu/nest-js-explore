import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAllUsers(): string {
    return 'This action returns all users';
  }
}
