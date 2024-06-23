import { Injectable } from '@nestjs/common';
import { HeroAdvantage } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class HeroAdvantageService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getHeroAdvantages(): Promise<HeroAdvantage[]> {
        return this.prismaService.heroAdvantage.findMany();
    }

    async getHeroAdvantage(id: number): Promise<HeroAdvantage> {
        return this.prismaService.heroAdvantage.findUnique({
            where: { id }
        });
    }
}
