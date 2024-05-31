import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(
    private readonly prismaService: PrismaService,
  ) { }

  async getHello(): Promise<string> {
    const data = await this.prismaService.program.findMany();
    console.log(data);
    return 'Hello world!';
  }
}
