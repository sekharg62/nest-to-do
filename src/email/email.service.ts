import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { email } from 'emialConfigure';
@Injectable()
export class EmailService {
     private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: email.SES_SMTP_HOST,
      port: Number(email.SES_SMTP_PORT),
      secure: false, // use TLS
      auth: {
        user: email.SES_SMTP_USER,
        pass: email.SES_SMTP_PASS,
      },
    });
  }

  async sendEmail(to: string, subject: string, html: string) {
    console.log(`Sending email to ${to} ${email}`);
    return this.transporter.sendMail({
      from: email.SES_EMAIL_FROM,
      to,
      subject,
      html,
    });
  }
}
