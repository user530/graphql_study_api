import { Injectable } from '@nestjs/common';
import { Picture } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class PictureService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async getPictures(): Promise<Picture[]> {
        return this.prismaService.picture.findMany()
    }

    async getPicture(id: number): Promise<Picture> {
        return this.prismaService.picture.findUnique({
            where: { id },
        });
    }
}
