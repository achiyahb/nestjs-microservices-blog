import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export const authConfig = registerAs('auth', () => ({
  port: process.env.AUTH_PORT || 3001,
  host: process.env.HOST || '127.0.0.1',
  transport: Transport.TCP,
}));
