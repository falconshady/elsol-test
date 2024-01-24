import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreHasProductsService } from './store-has-products.service';

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

  @Post('/association-update/products/:product_id_current/:product_id_new/store/:store_id')
  updateStoresFromProduct(
    @Param('product_id_current') product_id_current: string,
    @Param('product_id_new') product_id_new: string,
    @Param('store_id') store_id: string
  ) {
    return this.storeHasProductsService.updateStoresFromProduct(+product_id_current, +product_id_new, +store_id);
  }

  @Delete('/delete/product/:product_id/store/:store_id')
  deleteStoreFromProduct(
    @Param('product_id') product_id: string,
    @Param('store_id') store_id: string
  ) {
    return this.storeHasProductsService.deleteStoreFromProduct(+product_id, +store_id);
  }
}
