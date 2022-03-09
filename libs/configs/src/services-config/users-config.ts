import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export const usersConfig = registerAs('users', () => ({
  port: process.env.PAYMENT_SERVICE_PORT || 3004,
  host: process.env.PAYMENT_SERVICE_HOST || '127.0.0.1',
  transport: Transport.TCP,
}));
