import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserCreateValidator, UserIdValidator, UserUpdateValidator } from './user.validator';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>){}

    // List
    async list() {
        // return this.repo.findAll()
        // return this.repo.find

        const query = this.repo.find({
            select: {
                id: true,
                username: true,
                name: true,
                email: true,
                phone: true,
                skillset: true,
                hobby: true,
            },
        })  
        

        return query;
    }

    // Create
    async create(body: UserCreateValidator){

        // create instance of user
        const user = this.repo.create({
            username: body.username,
            name: body.name,
            email: body.email,
            password: body.password,
            phone: body.phone,
            skillset: body.skillset,
            hobby: body.hobby,
        })

        // save and return
        return this.repo.save(user);

    }

    // View
    async view(id: number){
        return await this.repo.findOneBy({id});
    }

    async viewEmail(email: string){
        return await this.repo.find({ where : { email }});
    }

    // Update
    async update(id: number, attrs: Partial<User>){

        // find user based on id
        const user = await this.repo.findOneBy({id});

        // if user not found
        if(!user){
            throw new NotFoundException('user not found');
        }

        Object.assign(user, attrs);

        return this.repo.save(user);

    }

    // Delete
    async delete(id: number){

        // find user based on id
        const user = await this.repo.findOneBy({id});

        // if user not found
        if(!user){
            throw new NotFoundException('user not found');
        }

        return this.repo.remove(user);

    }

}
