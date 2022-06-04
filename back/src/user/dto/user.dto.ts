import {IsNotEmpty, IsString, MaxLength} from "class-validator";
import {UserEntity} from "../../entities/user.entity";

export class UserDto extends UserEntity{

    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(4)
    pin: string


    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    surname: string

    @IsNotEmpty()
    @IsString()
    phone: string
}
