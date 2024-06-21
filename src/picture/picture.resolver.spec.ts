import { Test, TestingModule } from '@nestjs/testing';
import { PictureResolver } from './picture.resolver';

describe('PictureResolver', () => {
  let resolver: PictureResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PictureResolver],
    }).compile();

    resolver = module.get<PictureResolver>(PictureResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
