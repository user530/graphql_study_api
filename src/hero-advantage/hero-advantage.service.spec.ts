import { Test, TestingModule } from '@nestjs/testing';
import { HeroAdvantageService } from './hero-advantage.service';

describe('HeroAdvantageService', () => {
  let service: HeroAdvantageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroAdvantageService],
    }).compile();

    service = module.get<HeroAdvantageService>(HeroAdvantageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
