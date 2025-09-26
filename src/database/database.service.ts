import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
  private isConnected = false;

  // Correct method name
  onModuleInit() {
    this.isConnected = true;
    console.log('DB connected successfully');
  }

  // Correct method name
  onApplicationShutdown(signal?: string) {
    this.isConnected = false;
    console.log(`DB disconnected for shutdown signal: ${signal}`);
  }

  getStatus() {
    return this.isConnected ? 'Connected' : 'Disconnected';
  }
}
