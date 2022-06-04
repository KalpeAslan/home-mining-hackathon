import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WalletEntity } from "../entities/wallet.entity";
import { Repository } from "typeorm";
import { WalletDto } from "./dto/wallet.dto";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class WalletService {

  constructor(
    @InjectRepository(WalletEntity)
    private readonly walletRepository: Repository<WalletEntity>
  ) {
  }

  public async addWallet(walletDto: WalletDto, user: UserEntity): Promise<UserEntity> {
    return await this.walletRepository.save({
      ...walletDto,
      ...user
    });
  }

  public async updateWallet() {
  }

  public async stripBalance() {
  }

  public async swapBalance() {
  }

  public async addBalance() {
  }
}
