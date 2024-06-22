import { Test, TestingModule } from '@nestjs/testing';
import { ModuleToolService } from './module-tool.service';

describe('ModuleToolService', () => {
  let service: ModuleToolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleToolService],
    }).compile();

    service = module.get<ModuleToolService>(ModuleToolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
