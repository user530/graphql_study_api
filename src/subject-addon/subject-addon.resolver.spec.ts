import { Test, TestingModule } from '@nestjs/testing';
import { SubjectAddonResolver } from './subject-addon.resolver';

describe('SubjectAddonResolver', () => {
  let resolver: SubjectAddonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectAddonResolver],
    }).compile();

    resolver = module.get<SubjectAddonResolver>(SubjectAddonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
