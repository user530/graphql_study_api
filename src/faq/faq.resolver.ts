import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { FaqService } from './faq.service';
import { Faq } from './entities/faq.entity';

@Resolver()
export class FaqResolver {
    constructor(
        private readonly faqService: FaqService,
    ) { }

    @Query(() => [Faq])
    async faqs() {
        return this.faqService.getFaqs();
    }

    @Query(() => Faq)
    async faq(@Args('id', { type: () => Int }) id: number) {
        return this.faqService.getFaq(id);
    }
}
