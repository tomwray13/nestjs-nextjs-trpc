import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { InitTrpc } from '../trpc.service';

@Injectable()
export class UserRouter {
  constructor(private readonly trpc: InitTrpc) {}

  getUser = this.trpc.procedure
    .input(z.object({ text: z.string() }).optional())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? 'world'}!`,
      };
    });

  router = this.trpc.router({
    getUser: this.getUser,
  });
}
