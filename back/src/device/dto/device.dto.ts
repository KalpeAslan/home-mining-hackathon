import { DeviceEntity } from "../../entities/device.entity";
import { IsString } from "class-validator";

export class DeviceDto extends DeviceEntity {

  @IsString()
  ipAddress: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  fullName: string;

}
