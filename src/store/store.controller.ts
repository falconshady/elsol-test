import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller()
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('store')
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  @Get('stores')
  findAll() {
    return this.storeService.findAll();
  }

  @Get('store/:id')
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(+id);
  }

  @Patch('store/:id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(+id, updateStoreDto);
  }

  @Delete('store/:id')
  remove(@Param('id') id: string) {
    return this.storeService.remove(+id);
  }
}
