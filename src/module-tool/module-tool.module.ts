import { Module } from '@nestjs/common';
import { ModuleToolService } from './module-tool.service';
import { ModuleToolResolver } from './module-tool.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ModuleToolService, ModuleToolResolver]
})
export class ModuleToolModule { }
