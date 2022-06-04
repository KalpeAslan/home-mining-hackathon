import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DeviceEntity } from "../entities/device.entity";

@Injectable()
export class DeviceService {

  constructor(
    @InjectRepository(DeviceEntity)
    private readonly deviceRepository: Repository<DeviceEntity>
  ) {
  }


  public async addDevice(deviceDto) {
    try {
      return await this.deviceRepository.save(deviceDto);
    } catch (e) {
      throw new HttpException("Device not added", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateDevice(deviceEntity: DeviceEntity) {
    let device: DeviceEntity;
    try {
      device = await this.deviceRepository.findOne({ where: deviceEntity });
    } catch (e) {
      throw new HttpException(e, HttpStatus.NOT_FOUND);
    }

    try {
      return this.deviceRepository.update({
        ...device,
        ...deviceEntity
      }, {});
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  //Many methods or only one method with linux commands
  public async configureDevice() {
  }


}
