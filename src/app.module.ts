import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [JobsModule, MongooseModule.forRoot('mongodb+srv://testUser4:VnpcgP6hrvQ5iZ0P@cluster0.ud7kb.mongodb.net/Fourth?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
