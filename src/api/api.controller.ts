import { Controller, Get } from '@nestjs/common';

@Controller('api') // base route => /api
export class ApiController {
  @Get('hello')
  getHello(): { message: string } {
    return { message: 'Hello from NestJS API!' };
  }

  @Get('status')
  getStatus(): { status: string; time: string } {
    return { status: 'OK', time: new Date().toISOString() };
  }
}
