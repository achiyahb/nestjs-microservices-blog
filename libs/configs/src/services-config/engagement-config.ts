import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export const engagementConfig = registerAs('engagement', () => ({
  port: process.env.PAYMENT_SERVICE_PORT || 3003,
  host: process.env.PAYMENT_SERVICE_HOST || '127.0.0.1',
  transport: Transport.TCP,
}));
