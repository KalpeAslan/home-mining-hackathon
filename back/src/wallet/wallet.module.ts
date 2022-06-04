import { Module } from "@nestjs/common";
import { WalletController } from "./wallet.controller";
import { WalletService } from "./wallet.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { WalletEntity } from "../entities/wallet.entity";
import { UserService } from "../user/user.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([WalletEntity, UserEntity])
  ],
  controllers: [WalletController],
  providers: [WalletService, UserService]
})
export class WalletModule {
}
