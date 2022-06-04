import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {
  }

  public async getUser(authToken: string) {
    try {
      return this.userRepository.findOneOrFail({
        where: {
          authToken
        }
      });
    } catch (e) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
  }

  public async isUserExist(userDto: UserDto): Promise<boolean> {
    const isEmailExist = await this.userRepository.findOne({
      where: {
        email: userDto.email
      }
    });
    const isPhoneExist = await this.userRepository.findOne({
      where: {
        email: userDto.phone
      }
    });
    return !!(isEmailExist || isPhoneExist);
  }

  public async addUser(userDto: UserDto): Promise<UserEntity> {
    return await this.userRepository.save(userDto);
  }

  public async updateUser(userEntity: UserEntity) {
    return await this.userRepository.update(userEntity, {})
  }

  public asyncUpdate() {

  }

}
