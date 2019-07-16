import { Controller, Get, Param, Post, Body, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<any> {
    return this.userService.getUsers();
  }

  @Post('signup')
  create(@Body() userData): Promise<any> {
    return this.userService.create(userData);
  }

  @Get(':id')
  getUserDetails(@Param() params): Promise<any> {
    return this.userService.getUser(params.id);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

}
