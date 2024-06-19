import { Module } from '@nestjs/common';
import { LabelCaseResolver } from './label-case.resolver';
import { LabelCaseService } from './label-case.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [LabelCaseResolver, LabelCaseService]
})
export class LabelCaseModule { }
