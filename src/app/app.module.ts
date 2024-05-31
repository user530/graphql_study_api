import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { dbConfig, httpConfig } from 'src/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        httpConfig,
        dbConfig,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
