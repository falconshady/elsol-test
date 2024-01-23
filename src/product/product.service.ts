import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Product } from "./entities/product.entity";

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productsRepository.create(createProductDto);
      let created = await this.productsRepository.save(product);
      return {"success": true, "response": created}
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }    
  }

  findAll(): Promise<Product[]>{
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Product | null> {
    return this.productsRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const productExist = await this.productsRepository.findOneBy({id});
      if (!productExist) return {"success": false, "response": "product not exist"}
      await this.productsRepository.update(id,updateProductDto);
      const updated = await this.productsRepository.findOneBy({id});
      return {"success": true, "response": updated}
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }
  }

  async remove(id: number){
    try {
      const productExist = await this.productsRepository.findOneBy({id});
      if (!productExist) return {"success": false, "response": "product not exist"}
      await this.productsRepository.delete(id);
      return {"success": true, "response": productExist}
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }
  }
}
