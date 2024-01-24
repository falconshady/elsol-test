import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateStoreHasProductDto } from './dto/create-store-has-product.dto';
import { UpdateStoreHasProductDto } from './dto/update-store-has-product.dto';

import { StoreHasProduct } from "./entities/store-has-product.entity";
import { Product } from "../product/entities/product.entity";
import { Store } from "../store/entities/store.entity";

@Injectable()
export class StoreHasProductsService {
  constructor(
    @InjectRepository(StoreHasProduct)
    private storeHasProductsRepository: Repository<StoreHasProduct>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Store)
    private storesRepository: Repository<Store>
  ) {}
  async addStoreToProduct(product_id: number, store_id: number) {
    try {
      const productExist = await this.productsRepository.findOneBy({"id":product_id});
      if (!productExist) return {"success": false, "response": "product not exist"}

      const storeExist = await this.storesRepository.findOneBy({"id": store_id});
      if (!storeExist) return {"success": false, "response": "store not exist"}

      const storeHasProductExist = await this.storeHasProductsRepository.findOneBy({
        store_id: store_id,
        product_id: product_id,
      });
      if (storeHasProductExist) return {"success": false, "response": "this association was saved previously"}
      
      this.storeHasProductsRepository.create({
        "product_id": product_id,
        "store_id": store_id
      });
      
      return {"success": true, "response": {
          "product": productExist,
          "store": storeExist,
        }
      }
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }
  }

  async findStoresFromProduct(product_id: number) {
    try {
      const productExist = await this.productsRepository.findOneBy({"id":product_id});
      if (!productExist) return {"success": false, "response": "product not exist"}

      const storeHasProduct = await this.storeHasProductsRepository.findBy({
        product_id: product_id,
      });
      
      let storeIds = storeHasProduct.map(assoc => assoc.store_id)

      const stores = await this.storesRepository.findByIds(storeIds);

      return {"success": true, "response": {
          "stores": stores,
        }
      }
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }
  }
}
