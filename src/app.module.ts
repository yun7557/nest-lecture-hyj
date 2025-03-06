import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BldgModule } from './bldg/bldg.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.CLOUDSQL_HOST || `/cloudsql/${process.env.CLOUDSQL_INSTANCE_CONNECTION_NAME}`,
      port: parseInt('5432'),
      username: process.env.CLOUDSQL_USER,
      password: process.env.CLOUDSQL_PASS,
      database: process.env.CLOUDSQL_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 개발환경에서만 true 배포시 false
    }),
    // BldgModule 추가
    BldgModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
