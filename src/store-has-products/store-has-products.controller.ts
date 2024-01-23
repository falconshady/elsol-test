import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreHasProductsService } from './store-has-products.service';
import { CreateStoreHasProductDto } from './dto/create-store-has-product.dto';
import { UpdateStoreHasProductDto } from './dto/update-store-has-product.dto';

@Controller('store-has-products')
export class StoreHasProductsController {
  constructor(private readonly storeHasProductsService: StoreHasProductsService) {}

  @Post()
  create(@Body() createStoreHasProductDto: CreateStoreHasProductDto) {
    return this.storeHasProductsService.create(createStoreHasProductDto);
  }

  @Get()
  findAll() {
    return this.storeHasProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeHasProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreHasProductDto: UpdateStoreHasProductDto) {
    return this.storeHasProductsService.update(+id, updateStoreHasProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeHasProductsService.remove(+id);
  }
}
