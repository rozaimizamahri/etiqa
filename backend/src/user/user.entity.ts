import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column()
    skillset: string;

    @Column()
    hobby: string;

    @AfterInsert()
    logInsert(){
        console.log('Inserted User with id', this.id);
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated User with id', this.id);
    }

    @AfterRemove()
    logRemove(){
        console.log('Removed User with id', this.id);
    }

}