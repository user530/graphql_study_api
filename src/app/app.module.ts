import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { httpConfig } from 'src/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProgramModule } from 'src/program/program.module';
import { StudyFieldModule } from 'src/study-field/study-field.module';
import { LabelCaseModule } from 'src/label-case/label-case.module';
import { CategoryModule } from 'src/category/category.module';
import { PictureModule } from 'src/picture/picture.module';

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
  ],
})
export class AppModule { }
