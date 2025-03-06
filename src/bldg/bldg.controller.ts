import { Controller, Get, Query } from '@nestjs/common';
import { BldgService } from './bldg.service';
import { Bldg } from './bldg.entity';
import { query } from 'express';
import { BldgNearbyBldgDto } from './bldg.nearby.dto';

@Controller('bldg')
export class BldgController {
  constructor(private BldgService: BldgService) {}

  @Get()
  async findAll(): Promise<Bldg[]> {
    return this.BldgService.findAll();
  }
  @Get('nearby')
  async findNearby(@Query() query: BldgNearbyBldgDto): Promise<Bldg[]> {
    return this.BldgService.findNearby(query.x, query.y, query.radius); 
  }
}
