import {Controller, Post} from '@nestjs/common';

@Controller('mailer')
export class MailerController {
    constructor() {
    }

    @Post('/approve-email')
    async approveEmail() {
        
    }
}
