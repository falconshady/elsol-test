import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from "./product/product.module";
import { Product } from "./product/entities/product.entity";
import { StoreModule } from './store/store.module';
import { Store } from "./store/entities/store.entity";
import { StoreHasProductsModule } from './store-has-products/store-has-products.module';
import { StoreHasProduct } from "./store-has-products/entities/store-has-product.entity";

@Module({ 
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'root',
      database: process.env.DATABASE_NAME || 'elsoltest',
      entities: [Product, Store, StoreHasProduct],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
    StoreModule,
    StoreHasProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    // console.log('AppModule constructor', process.env);
  }
}
