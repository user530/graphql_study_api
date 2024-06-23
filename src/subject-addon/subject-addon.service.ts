import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { SubjectAddon } from './entities/subject-addon.entity';

@Injectable()
export class SubjectAddonService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getSubjectAddons(): Promise<SubjectAddon[]> {
        return this.prismaService.subjectAddon.findMany();
    }

    async getSubjectAddon(id: number): Promise<SubjectAddon> {
        return this.prismaService.subjectAddon.findUnique({
            where: { id }
        });
    }
}
