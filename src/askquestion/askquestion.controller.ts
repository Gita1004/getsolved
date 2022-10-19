import { Body, Controller, Get, Post } from "@nestjs/common";
import { AskQuestionService } from "./askquestion.service";
import { CreateQuestionDto } from "./dto/create-question.dto";

@Controller()
export class AskQuestionController{
    constructor(private service:AskQuestionService){

    }
    @Post('create')
    async create(@Body() createquestDto:CreateQuestionDto){
        return this.service.create(createquestDto);
    }

    @Get('getquestion')
    async getquestion(){
        return this.service.getquestion();
    }
}