import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { httpConfig } from 'src/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { StudyFieldModule } from 'src/study-field/study-field.module';
import { LabelCaseModule } from 'src/label-case/label-case.module';
import { CategoryModule } from 'src/category/category.module';
import { PictureModule } from 'src/picture/picture.module';
import { SkillModule } from 'src/skill/skill.module';
import { ModuleToolModule } from 'src/module-tool/module-tool.module';
import { PotentialCandidatModule } from 'src/potential-candidat/potential-candidat.module';
import { HeroAdvantageModule } from 'src/hero-advantage/hero-advantage.module';
import { FaqModule } from 'src/faq/faq.module';
import { SubjectAddonModule } from 'src/subject-addon/subject-addon.module';
import { ProgramModule } from 'src/program/program.module';
import { GraphQLBigInt } from 'graphql-scalars';
import { ActualInformationModule } from 'src/actual-information/actual-information.module';
import { SubjectModule } from 'src/subject/subject.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        httpConfig,
      ],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        scalarsMap: [
          { scalar: GraphQLBigInt, type: BigInt }
        ]
      }
    }),
    StudyFieldModule,
    LabelCaseModule,
    CategoryModule,
    PictureModule,
    SkillModule,
    ModuleToolModule,
    PotentialCandidatModule,
    HeroAdvantageModule,
    FaqModule,
    SubjectAddonModule,
    ProgramModule,
    ActualInformationModule,
    SubjectModule,
  ],
})
export class AppModule { }
