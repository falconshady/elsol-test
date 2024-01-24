import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreHasProductsService } from './store-has-products.service';
import { CreateStoreHasProductDto } from './dto/create-store-has-product.dto';
import { UpdateStoreHasProductDto } from './dto/update-store-has-product.dto';

@Controller()
export class StoreHasProductsController {
  constructor(private readonly storeHasProductsService: StoreHasProductsService) {}

  @Post('/association/products/:product_id/stores/:store_id')
  addStoreToProduct(
    @Param('product_id') product_id: string,
    @Param('store_id') store_id: string
  ) {
    return this.storeHasProductsService.addStoreToProduct(+product_id, +store_id);
  }

  @Get('/find/product/:product_id/stores')
  findStoresFromProduct(
    @Param('product_id') product_id: string
  ) {
    return this.storeHasProductsService.findStoresFromProduct(+product_id);
  }
  
  @Get('/find/product/:product_id/store')
  findStoreFromProduct(
    @Param('product_id') product_id: string
  ) {
    return this.storeHasProductsService.findStoreFromProduct(+product_id);
  }
}
