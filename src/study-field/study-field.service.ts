import { Injectable } from '@nestjs/common';
import { StudyField } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class StudyFieldService {
    constructor(private readonly prisma: PrismaService) { }

    async getStudyFields(): Promise<StudyField[]> {
        return this.prisma.studyField.findMany();
    }

    async getStudyField(id: number): Promise<StudyField> {
        return this.prisma.studyField.findUnique(
            {
                where:
                {
                    id,
                }
            }
        );
    }
}
