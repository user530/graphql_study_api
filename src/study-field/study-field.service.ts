import { Injectable } from '@nestjs/common';
import { StudyField } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class StudyFieldService {
    constructor(private readonly prisma: PrismaService) { }

    async getStudyFields(): Promise<StudyField[]> {
        return this.prisma.studyField.findMany(
            {
                include: {
                    programs: {
                        include: {
                            study_field: true,
                            category: { include: { labelCases: true } },
                            specializedSubjectsAddons: true,
                            Picture: true,
                        },
                    },
                }
            }
        );
    }

    async getStudyField(id: number): Promise<StudyField> {
        return this.prisma.studyField.findUnique(
            {
                where:
                {
                    id,
                },
                include: {
                    programs: {
                        include: {
                            study_field: true,
                            category: { include: { labelCases: true } },
                            specializedSubjectsAddons: true,
                            Picture: true,
                        },
                    },
                }

            }
        );
    }
}
