import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AskQuestionModule } from './askquestion/askquestion.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [AskQuestionModule,
    DatabaseModule,
  MongooseModule.forRoot('mongodb://127.0.0.1/nest')
  ]
})
export class AppModule {}
