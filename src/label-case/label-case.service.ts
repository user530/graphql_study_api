import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { LabelCase } from './entities/label-case.entity';

@Injectable()
export class LabelCaseService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getLabelCases(): Promise<LabelCase[]> {
        return this.prismaService.labelCase.findMany();
    }

    async getLabelCase(id: number) {
        return this.prismaService.labelCase.findUnique(
            {
                where:
                {
                    id,
                }
            }
        );
    }

    // async getLabelCaseByCategory(category: Category): Promise<LabelCase> { }
}
