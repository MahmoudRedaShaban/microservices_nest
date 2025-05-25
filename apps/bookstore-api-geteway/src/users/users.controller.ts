import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(): Observable<any> {
        return this.usersService.findAllUsers();
    }
}
