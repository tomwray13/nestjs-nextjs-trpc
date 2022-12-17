import { Module } from '@nestjs/common';
import { UserRouter } from './router/user.router';
import { TrpcRouter } from './trpc.router';
import { InitTrpc } from './trpc.service';

@Module({
  providers: [InitTrpc, TrpcRouter, UserRouter],
})
export class TrpcModule {}
