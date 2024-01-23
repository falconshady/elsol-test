import { Test, TestingModule } from '@nestjs/testing';
import { StoreHasProductsService } from './store-has-products.service';

describe('StoreHasProductsService', () => {
  let service: StoreHasProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreHasProductsService],
    }).compile();

    service = module.get<StoreHasProductsService>(StoreHasProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
