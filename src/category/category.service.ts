import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getCategories(): Promise<Category[]> {
        return this.prismaService.category.findMany(
            {
                include: {
                    labelCases: true,
                    // programs: true,
                }
            }
        );
    };

    async getCategory(id: number): Promise<Category> {
        return this.prismaService.category.findUnique(
            {
                where: { id },
                include: {
                    labelCases: true,
                    // programs: true,
                }
            }
        );
    };
}
