import { Module } from '@nestjs/common';
import { TrpcClientModule } from 'libs/trpc-client/src';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
  imports: [TrpcClientModule],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
