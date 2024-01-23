import { Test, TestingModule } from '@nestjs/testing';
import { StoreHasProductsController } from './store-has-products.controller';
import { StoreHasProductsService } from './store-has-products.service';

describe('StoreHasProductsController', () => {
  let controller: StoreHasProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreHasProductsController],
      providers: [StoreHasProductsService],
    }).compile();

    controller = module.get<StoreHasProductsController>(StoreHasProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
