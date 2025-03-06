import { Module } from '@nestjs/common';
import { BldgController } from './bldg.controller';
import { BldgService } from './bldg.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BldgService])],
  controllers: [BldgController],
  providers: [BldgService]
})
export class BldgModule {}
