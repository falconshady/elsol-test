import { Injectable } from '@nestjs/common';
import { CreateStoreHasProductDto } from './dto/create-store-has-product.dto';
import { UpdateStoreHasProductDto } from './dto/update-store-has-product.dto';

@Injectable()
export class StoreHasProductsService {
  create(createStoreHasProductDto: CreateStoreHasProductDto) {
    return 'This action adds a new storeHasProduct';
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
