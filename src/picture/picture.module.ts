import { Module } from '@nestjs/common';
import { PictureService } from './picture.service';
import { PictureResolver } from './picture.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PictureService, PictureResolver]
})
export class PictureModule { }
