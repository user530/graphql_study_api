import { Injectable } from '@nestjs/common';
import { Subject } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class SubjectService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async subjectServices(): Promise<Subject[]> {
        return this.prismaService.subject.findMany();
    }

    async subjectService(id: number): Promise<Subject> {
        return this.prismaService.subject.findUnique({
            where: { id }
        });
    }
}
