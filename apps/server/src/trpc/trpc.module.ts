import { Module } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService],
})
export class TrpcModule {}
