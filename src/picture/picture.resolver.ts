import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PictureService } from './picture.service';
import { Picture } from './entity/picture.entity';

@Resolver()
export class PictureResolver {
    constructor(
        private readonly pictureService: PictureService,
    ) { }

    @Query(() => [Picture])
    async pictures() {
        return this.pictureService.getPictures();
    }

    @Query(() => Picture)
    async picture(@Args('id', { type: () => Int }) id: number) {
        return this.pictureService.getPicture(id);
    }
}
