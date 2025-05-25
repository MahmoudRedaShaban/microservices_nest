import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {

  private users:UserDto[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      isActive: true,
      age: 20,
      phone: '1234567890',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      country: 'USA',
      zip: '12345',
      isAdmin: false,
      isDeleted: false,
      isVerified: true,
      isBanned: false,
      isBlocked: false,
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      isActive: true,
      age: 20,
      phone: '1234567890',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      country: 'USA',
      zip: '12345',
      isAdmin: false,
      isDeleted: false,
      isVerified: true,
      isBanned: false,
      isBlocked: false,
    },
    
  ];

  findAll():UserDto[] {
    return this.users;
  }

  findOne(id:string):UserDto {
    return this.users.find((user) => user.id === id);
  }

  create(user:UserDto):UserDto {
    this.users.push(user);
    return user;
  }

  update(id:string,user:UserDto):UserDto {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = user;
    return user;
  }

  delete(id:string):void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}