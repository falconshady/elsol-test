import { Module } from '@nestjs/common';
import { StoreHasProductsService } from './store-has-products.service';
import { StoreHasProductsController } from './store-has-products.controller';
import { TypeOrmModule } from "@nestjs/typeorm";

import { StoreHasProduct } from "./entities/store-has-product.entity";
import { Product } from "../product/entities/product.entity";
import { Store } from "../store/entities/store.entity";

@Module({
  imports: [TypeOrmModule.forFeature([
    StoreHasProduct,
    Product,
    Store
  ])],
  controllers: [StoreHasProductsController],
  providers: [StoreHasProductsService],
})
export class StoreHasProductsModule {}
