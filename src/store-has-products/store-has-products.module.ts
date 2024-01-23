import { Module } from '@nestjs/common';
import { StoreHasProductsService } from './store-has-products.service';
import { StoreHasProductsController } from './store-has-products.controller';

@Module({
  controllers: [StoreHasProductsController],
  providers: [StoreHasProductsService],
})
export class StoreHasProductsModule {}
