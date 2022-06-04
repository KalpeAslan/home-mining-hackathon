import { WalletEntity, WalletType } from "../../entities/wallet.entity";
import { IsString } from "class-validator";

export class WalletDto extends WalletEntity{
  @IsString()
  type: WalletType

  @IsString()
  address: string

}
