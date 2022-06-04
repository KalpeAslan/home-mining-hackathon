import { Body, Controller, Patch, Post, Req, Res } from "@nestjs/common";
import { WalletDto } from "./dto/wallet.dto";
import { Request, Response } from "express";
import { WalletService } from "./wallet.service";
import { WalletType } from "../entities/wallet.entity";
import { UserService } from "../user/user.service";

@Controller("wallet")
export class WalletController {

  constructor(
    private readonly walletService: WalletService,
    private readonly userService: UserService
  ) {
  }

  @Post("/add")
  async addWallet(
    @Body() walletDto: WalletDto,
    @Req() req: Request,
    @Res() res: Response
  ) {
    if (walletDto.type === WalletType.FIAT || !walletDto.date || !walletDto.csv) {
      return res.send({ data: "Fill the fields Date or CSV", status: 400 }).status(400);
    }
    const user = await this.userService.getUser(req.headers.cookie);
    return this.walletService.addWallet(walletDto, user);
  }

  @Patch("/update")
  async updateWallet() {

  }
}
