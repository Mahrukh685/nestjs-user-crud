import { Controller, Get, Param,Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }
  @Get(':id')
  getUsersbyId(@Param() param) {
    return this.appService.getUsersbyId(param.id);
  }

  @Post()
  createUser(@Body() body) {
    return this.appService.createUser(body.name ,body.age);
  }
}
