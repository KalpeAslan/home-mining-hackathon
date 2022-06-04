import {Module} from '@nestjs/common';
import {MailerService} from './mailer.service';
import {MailerModule} from '@nestjs-modules/mailer';
import {appConfig} from "../../app.config";
import {MailerController} from './mailer/mailer.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CodesEntity} from "../entities/codes.entity";
import {UserEntity} from "../entities/user.entity";
import { BinanceController } from './binance/binance.controller';


@Module({
    imports: [
        TypeOrmModule.forFeature([CodesEntity, UserEntity]),
        MailerModule.forRoot({
            transport: {
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: appConfig.userGmail,
                    pass: appConfig.passwordGmail
                }
            },

            defaults: {
                from: appConfig.passwordGmail,
            },
            preview: true,
        })
    ],
    controllers: [MailerController, BinanceController],
    providers: [MailerService]
})
export class CommonModule {
}
