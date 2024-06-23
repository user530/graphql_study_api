import { Injectable } from '@nestjs/common';
import { Faq } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class FaqService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getFaqs(): Promise<Faq[]> {
        return this.prismaService.faq.findMany();
    }

    async getFaq(id: number): Promise<Faq> {
        return this.prismaService.faq.findUnique({
            where: { id },
        });
    }
}
