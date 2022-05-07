import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { DeviceModule } from './device/device.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(), DeviceModule, WalletModule],
})
export class AppModule {}
