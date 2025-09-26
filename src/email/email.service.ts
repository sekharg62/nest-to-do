import { Injectable } from '@nestjs/common';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { email } from 'emialConfigure';

@Injectable()
export class EmailService {
  private sesClient: SESClient;

  constructor() {
    this.sesClient = new SESClient({
      region: email.AWS_REGION, // e.g. "us-east-1"
      credentials: {
        accessKeyId: email.AWS_ACCESS_KEY_ID,
        secretAccessKey: email.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async sendEmail(to: string, subject: string, html: string) {
  if (!html) {
    throw new Error('Email HTML content is empty!');
  }

  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html, // must not be null
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
    Source: email.SES_EMAIL_FROM,
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await this.sesClient.send(command);
    console.log('Email sent:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

}
