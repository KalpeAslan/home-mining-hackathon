import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { DeviceModule } from './device/device.module';
import { WalletModule } from './wallet/wallet.module';
import { CommonModule } from './common/common.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(), DeviceModule, WalletModule, CommonModule, TransactionsModule],
})
export class AppModule {}
