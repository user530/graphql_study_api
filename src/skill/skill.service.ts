import { Injectable } from '@nestjs/common';
import { Skill } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class SkillService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getSkills(): Promise<Skill[]> {
        const skillsWithJunction = await this.prismaService.skill.findMany({
            include: {
                subjects: {
                    include: { Subject: true }
                }
            }
        });
        console.log(skillsWithJunction);

        return skillsWithJunction.map(
            skill => ({
                ...skill,
                subjects: skill.subjects.map(skillOnSubject => skillOnSubject.Subject),
            })
        );
    }

    async getSkill(id: number): Promise<Skill> {
        return this.prismaService.skill.findUnique({
            where: { id },
        });
    }
}
