import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}
     @Post('send')
  async send(@Body() body: { to: string; subject: string; message: string }) {
    return this.emailService.sendEmail(body.to, body.subject, body.message);
  }
}
