import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeviceEntity } from "../entities/device.entity";
import { UserEntity } from "../entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DeviceEntity, UserEntity])],
  controllers: [DeviceController],
  providers: [DeviceService]
})
export class DeviceModule {}
