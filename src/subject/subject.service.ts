import { Injectable } from '@nestjs/common';
import { Subject } from './entities/subject.entity';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class SubjectService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async subjectServices(): Promise<Subject[]> {
        const subjects = await this.prismaService.subject.findMany({
            include: {
                skills: { include: { Skill: true } },
            }
        });

        return subjects.map(
            subject => ({
                ...subject,
                skills: subject.skills.map(skillsOnSubject => skillsOnSubject.Skill)
            })
        );
    }

    async subjectService(id: number): Promise<Subject> {
        const subject = await this.prismaService.subject.findUnique({
            where: { id },
            include: {
                skills: {
                    include: { Skill: true }
                }
            }
        });

        return {
            ...subject,
            skills: subject.skills.map(skillOnSubject => skillOnSubject.Skill)
        };
    }
}
