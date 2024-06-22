import { Injectable } from '@nestjs/common';
import { PotentialCandidat } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class PotentialCandidatService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getPotentialCandidates(): Promise<PotentialCandidat[]> {
        return this.prismaService.potentialCandidat.findMany();
    }

    async getPotentialCandidat(id: number): Promise<PotentialCandidat> {
        return this.prismaService.potentialCandidat.findUnique({
            where: { id },
        });
    }
}
