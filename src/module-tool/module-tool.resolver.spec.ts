import { Test, TestingModule } from '@nestjs/testing';
import { ModuleToolResolver } from './module-tool.resolver';

describe('ModuleToolResolver', () => {
  let resolver: ModuleToolResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleToolResolver],
    }).compile();

    resolver = module.get<ModuleToolResolver>(ModuleToolResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
