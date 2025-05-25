import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}



  @MessagePattern('users.findAll')
  findAll():UserDto[] {
    return this.usersService.findAll();
  }

  @MessagePattern('users.findOne')
  findOne(@Payload() id:string):UserDto {
    return this.usersService.findOne(id);
  }

  @MessagePattern('users.create')
  create(@Payload() user:UserDto):UserDto {
    return this.usersService.create(user);
  }

  @MessagePattern('users.update')
  update(@Payload() id:string, @Payload() user:UserDto):UserDto {
    return this.usersService.update(id, user);
  }

  @MessagePattern('users.delete')
  delete(@Payload() id:string):void {
    this.usersService.delete(id);
  }
  


  // @Get()
  // getHello(): string {
  //   return this.usersService.getHello();
  // }
}
