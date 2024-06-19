import { Test, TestingModule } from '@nestjs/testing';
import { LabelCaseResolver } from './label-case.resolver';

describe('LabelCaseResolver', () => {
  let resolver: LabelCaseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabelCaseResolver],
    }).compile();

    resolver = module.get<LabelCaseResolver>(LabelCaseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
