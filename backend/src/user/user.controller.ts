import { Body, Controller, Delete, Get, Post, Put, Patch, Param, NotFoundException, Query } from '@nestjs/common';
import { UserCreateValidator, UserUpdateValidator } from './user.validator';
import { UserService } from './user.service'

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get('/list')
    async list(){ 
        const result = await this.userService.list();
        return result;
    }

    @Post('/create')
    async create(@Body() body: UserCreateValidator){
        const result = await this.userService.create(body);
        return result;
    }

    @Get('/view/:id')
    async view(@Param('id') id: string){
        const result = await this.userService.view(parseInt(id));
        if(!result){
            throw new NotFoundException('ID not found');
        }
        return result;
    }

    @Get('/viewEmail')
    async viewEmail(@Query('email') email: string){
        const result =  await this.userService.viewEmail(email);
        if(!result){
            throw new NotFoundException('Email not found');
        }
        return result;
    }

    @Put('/update/:id')
    async update(@Param('id') id: string, @Body() body: UserUpdateValidator){
        return this.userService.update(parseInt(id), body);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id: string){
        return await this.userService.delete(parseInt(id));
    }


}
