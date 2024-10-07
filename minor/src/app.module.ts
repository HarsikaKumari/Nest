import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseController } from './user/controller/database/database.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '',
      database: 'NestLearn',
      synchronize: true,
    }), ],
  controllers: [DatabaseController],
  providers: [],
})
export class AppModule {}
