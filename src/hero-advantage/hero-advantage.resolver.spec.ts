import { Test, TestingModule } from '@nestjs/testing';
import { HeroAdvantageResolver } from './hero-advantage.resolver';

describe('HeroAdvantageResolver', () => {
  let resolver: HeroAdvantageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroAdvantageResolver],
    }).compile();

    resolver = module.get<HeroAdvantageResolver>(HeroAdvantageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
