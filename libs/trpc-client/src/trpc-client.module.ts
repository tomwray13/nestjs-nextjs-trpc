import { Module } from '@nestjs/common';
import { TrpcClientService } from './trpc-client.service';

@Module({
  providers: [TrpcClientService],
  exports: [TrpcClientService],
})
export class TrpcClientModule {}
