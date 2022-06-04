import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Spot } from "@binance/connector";
import { Request, Response } from "express";
import { DeviceDto } from "./dto/device.dto";
import { DeviceService } from "./device.service";

const apiKey = "SHx2Gh0pmnT0rnfMNPqsJAQtA9vYFqp3ZsmsPyiu5717SLNPXvkAX0vNIb291QV2";
const apiSecret = "4xla1cTvgFZZNGyNtAjF7jeXabuRoI3WcfMkTPIXqVD9iAKMFZ2NnVDeUqk3HHX3";
const client = new Spot(apiKey, apiSecret);

@Controller("device")
export class DeviceController {



  constructor(
    private readonly deviceService: DeviceService
  ) {
  }

  @Get("/")
  async testApi() {
    const response = await client.miningRevenueList("sha256", "savabit");
    return {
      ...response.data
    };
  }

  @Post("/add")
  public async addDevice(
    @Body() deviceDto: DeviceDto,
    @Req() req: Request,
    @Res() res: Response
  ) {
    await this.deviceService.addDevice(deviceDto)
  }
}
