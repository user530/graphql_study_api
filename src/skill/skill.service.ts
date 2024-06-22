import { Injectable } from '@nestjs/common';
import { Skill } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class SkillService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getSkills(): Promise<Skill[]> {
        return this.prismaService.skill.findMany();
    }

    async getSkill(id: number): Promise<Skill> {
        return this.prismaService.skill.findUnique({
            where: { id },
        });
    }
}
