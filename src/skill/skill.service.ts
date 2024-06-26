import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Skill } from './entities/skill.entity';

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

        return skillsWithJunction.map(
            skill => ({
                ...skill,
                subjects: skill.subjects.map(skillOnSubject => skillOnSubject.Subject),
            })
        );
    }

    async getSkill(id: number): Promise<Skill> {
        const skillWithJunction = await this.prismaService.skill.findUnique({
            include: {
                subjects: {
                    include: { Subject: true }
                }
            },
            where: { id },
        });

        return {
            ...skillWithJunction,
            subjects: skillWithJunction.subjects.map(
                skillOnSubject => skillOnSubject.Subject
            )
        };
    }
}
