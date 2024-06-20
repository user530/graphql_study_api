import { Injectable } from '@nestjs/common';
import { LabelCase } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class LabelCaseService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getLabelCases(): Promise<LabelCase[]> {
        return this.prismaService.labelCase.findMany(
            {
                include: {
                    categories: true,
                },
            }
        );
    }

    async getLabelCase(id: number) {
        return this.prismaService.labelCase.findUnique(
            {
                where:
                {
                    id,
                },
                include: { categories: true }
            }
        );
    }

    // async getLabelCaseByCategory(category: Category): Promise<LabelCase> { }
}
