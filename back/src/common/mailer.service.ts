import {Injectable} from '@nestjs/common';
import {MailerService as _MailerService} from '@nestjs-modules/mailer';
import {appConfig} from "../../app.config";
import {Repository} from "typeorm";
import {CodesEntity} from "../entities/codes.entity";
import {UserEntity} from "../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";

interface ISendCodeToMail {
    to: string
    message: string
}

@Injectable()
export class MailerService {

    constructor(
        private readonly mailerService: _MailerService,
        @InjectRepository(CodesEntity)
        private readonly codesRepository: Repository<CodesEntity>
    ) {}


    private generateCode(user: UserEntity) {

    }

    public async sendCodeToMail({to, message}: ISendCodeToMail) {
        return this.mailerService.sendMail({
            from: appConfig.userGmail,
            to,
            html: `<h1>${message}</h1>`
        })
    }
}
