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
      
      const storeHasProduct = this.storeHasProductsRepository.create({
        "product_id": product_id,
        "store_id": store_id
      });
      let created = await this.storeHasProductsRepository.save(storeHasProduct);
      return {"success": true, "response": created}
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }
  }

  findAll() {
    return `This action returns all storeHasProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeHasProduct`;
  }

  update(id: number, updateStoreHasProductDto: UpdateStoreHasProductDto) {
    return `This action updates a #${id} storeHasProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeHasProduct`;
  }
}
