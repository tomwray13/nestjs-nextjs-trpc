import { Injectable } from '@angular/core';
import { AppRouter } from '@server/trpc/trpc.router';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

@Injectable({
  providedIn: 'root',
})
export class TrpcService {
  private client = createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({ url: 'http://localhost:4000/trpc' })],
  });

  constructor() {}

  public get router() {
    return this.client;
  }
}
