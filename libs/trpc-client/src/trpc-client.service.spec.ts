import { Test, TestingModule } from '@nestjs/testing';
import { TrpcClientService } from './trpc-client.service';

describe('TrpcClientService', () => {
  let service: TrpcClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrpcClientService],
    }).compile();

    service = module.get<TrpcClientService>(TrpcClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
