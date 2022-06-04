import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { Request, Response } from "express";

@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {
  }


  @Get("/get-user")
  async getUser(
    @Res() response: Response,
    @Req() request: Request
  ) {
    return response.send({
      data: await this.userService.getUser(request.headers.cookie),
      status: 200
    }).status(200);
  }


  @Post("/add-user")
  async addUser(
    @Body() userDto: UserDto,
    @Res() response: Response
  ) {
    const isUserExist = await this.userService.isUserExist(userDto);
    if (isUserExist) {
      return response.send({
        data: `User with this email or phone exist!`,
        status: 400
      }).status(400);
    }

    const user = await this.userService.addUser(userDto);

    return response.send({
      data: user,
      status: 201
    }).status(201);
  }
}
