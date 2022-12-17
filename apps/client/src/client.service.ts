import { Injectable } from '@nestjs/common';
import { TrpcClientService } from 'libs/trpc-client/src';

@Injectable()
export class ClientService {
  constructor(private readonly trpc: TrpcClientService) {}
  async getHello() {
    const user = await this.trpc.client.getUser.query({ text: `Bilbo` });
    return user.greeting;
  }
}
