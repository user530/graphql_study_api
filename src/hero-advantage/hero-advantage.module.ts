import { Module } from '@nestjs/common';
import { HeroAdvantageService } from './hero-advantage.service';
import { HeroAdvantageResolver } from './hero-advantage.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [HeroAdvantageService, HeroAdvantageResolver]
})
export class HeroAdvantageModule { }
