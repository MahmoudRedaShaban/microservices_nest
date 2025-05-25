import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.findAll')
  findAll(): UserDto[] {
    return this.usersService.findAll();
  }

  @MessagePattern('users.findOne')
  findOne(@Payload() id: string): UserDto {
    const user = this.usersService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  @MessagePattern('users.create')
  create(@Payload() user: UserDto): UserDto {
    return this.usersService.create(user);
  }

  @MessagePattern('users.update')
  update(@Payload() id: string, @Payload() user: UserDto): UserDto {
    return this.usersService.update(id, user);
  }

  @MessagePattern('users.delete')
  delete(@Payload() id: string): void {
    this.usersService.delete(id);
  }
}
