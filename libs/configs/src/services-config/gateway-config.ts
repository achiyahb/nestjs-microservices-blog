import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export const gatewayConfig = registerAs('gateway', () => ({
  port: process.env.PAYMENT_SERVICE_PORT || 3000,
  host: process.env.PAYMENT_SERVICE_HOST || '127.0.0.1',
  transport: Transport.TCP,
}));
