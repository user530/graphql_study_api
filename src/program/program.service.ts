import { Injectable } from '@nestjs/common';
import { Program } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ProgramService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getPrograms(): Promise<Program[]> {
        return this.prismaService.program.findMany({
            include: {
                study_field: true,
                category: {
                    include: { labelCases: true }
                },
                specializedSubjectsAddons: true,
                Picture: true,
            }
        });
    }

    async getProgram(id: number): Promise<Program> {
        return this.prismaService.program.findUnique({
            where: { id },
            include: {
                study_field: true,
                category: {
                    include: { labelCases: true }
                },
                specializedSubjectsAddons: true,
                Picture: true,
            }
        })
    }
}
