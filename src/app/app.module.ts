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
    }),
    StudyFieldModule,
    LabelCaseModule,
    CategoryModule,
    PictureModule,
    SkillModule,
    ModuleToolModule,
  ],
})
export class AppModule { }
