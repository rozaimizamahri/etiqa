import { IsString, IsEmail, IsOptional } from "class-validator";

export class UserCreateValidator {
    @IsString()
    username: string;

    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsEmail()
    email : string;

    @IsString()
    phone : string;

    @IsString()
    skillset : string;

    @IsString()
    hobby : string;
}

export class UserIdValidator {
    userId: string;
}

export class UserUpdateValidator extends UserIdValidator {
    @IsString()
    @IsOptional()
    username?: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsEmail()
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    skillset?: string;

    @IsString()
    @IsOptional()
    hobby?: string;
}