import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Store } from "./entities/store.entity";

import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storesRepository: Repository<Store>,
  ) {}
  async create(createStoreDto: CreateStoreDto) {
    try {
      const store = this.storesRepository.create(createStoreDto);
      let created = await this.storesRepository.save(store);
      return {"success": true, "response": created}
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }
  }

  async findAll(): Promise<Object> {
    try {
      const stores = await this.storesRepository.find();
      return {"success": true, "response": stores}
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }
  }

  async findOne(id: number): Promise<Object> {
    try {
      const storeExist = await this.storesRepository.findOneBy({ id });
      if (!storeExist) return {"success": false, "response": "store not exist"}
      
      return {"success": true, "response": storeExist}
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    try {
      const storeExist = await this.storesRepository.findOneBy({id});
      if (!storeExist) return {"success": false, "response": "store not exist"}
      await this.storesRepository.update(id,updateStoreDto);
      const updated = await this.storesRepository.findOneBy({id});
      return {"success": true, "response": updated}
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }
  }

  async remove(id: number){
    try {
      const storeExist = await this.storesRepository.findOneBy({id});
      if (!storeExist) return {"success": false, "response": "store not exist"}
      await this.storesRepository.delete(id);
      return {"success": true, "response": storeExist}
    }catch (e){
      return {"success": false, "response": e.sqlMessage, "errno": e.errno}
    }
  }
}
