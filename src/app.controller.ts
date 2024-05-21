import { Controller, Get, Param } from '@nestjs/common';
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
}
