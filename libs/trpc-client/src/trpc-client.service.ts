import { Injectable } from '@nestjs/common';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from 'apps/server/src/trpc/trpc.router';
import fetch from 'node-fetch';

// polyfill fetch
const globalAny = global as any;
globalAny.AbortController = AbortController;
globalAny.fetch = fetch;

@Injectable()
export class TrpcClientService {
  client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000/trpc',
      }),
    ],
  });
}
