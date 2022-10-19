import {Module} from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module';
import { databaseProviders } from 'src/database/database.provider';
import { AskQuestionController } from './askquestion.controller';
import { askquestionProviders } from './askquestion.providers';
import { AskQuestionService } from './askquestion.service';


@Module({
   imports:[DatabaseModule],
   controllers:[AskQuestionController],
   providers:[AskQuestionService,
    ...askquestionProviders,
    ...databaseProviders
],
})
export class AskQuestionModule{}