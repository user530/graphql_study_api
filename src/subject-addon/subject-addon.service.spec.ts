import { Test, TestingModule } from '@nestjs/testing';
import { SubjectAddonService } from './subject-addon.service';

describe('SubjectAddonService', () => {
  let service: SubjectAddonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectAddonService],
    }).compile();

    service = module.get<SubjectAddonService>(SubjectAddonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
