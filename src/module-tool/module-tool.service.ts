import { Injectable } from '@nestjs/common';
import { ModuleTool } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ModuleToolService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getModuleTools(): Promise<ModuleTool[]> {
        return this.prismaService.moduleTool.findMany();
    }

    async getModuleTool(id: number) {
        return this.prismaService.moduleTool.findUnique({
            where: { id },
        });
    }
}
