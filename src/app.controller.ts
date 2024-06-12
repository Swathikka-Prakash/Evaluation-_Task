import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Controller('asset')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.appService.create(createAssetDto);
  }

  @Get('list')
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(+id);
  }

  @Post('update/:id')
  update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
    return this.appService.update(id, updateAssetDto);
  }

  @Post('delete/:id')
  delete(@Param('id') id: string) {
    return this.appService.delete(id);
  }
}
