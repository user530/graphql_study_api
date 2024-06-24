import { Injectable } from '@nestjs/common';
import { ActualInformation } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ActualInformationService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getActualInformations(): Promise<ActualInformation[]> {
        return this.prismaService.actualInformation.findMany({
            include: {
                actualPhoto1: true,
                actualPhoto2: true,
                Program: {
                    include: {
                        study_field: true,
                        category: true,
                        specializedSubjectsAddons: true,
                        Picture: true,
                    }
                },
            }

        });
    }

    async getActualInformation(id: number): Promise<ActualInformation> {
        return this.prismaService.actualInformation.findUnique({
            where: { id },
            include: {
                actualPhoto1: true,
                actualPhoto2: true,
                Program: {
                    include: {
                        study_field: true,
                        category: true,
                        specializedSubjectsAddons: true,
                        Picture: true,
                    }
                },
            }
        })
    }
}
