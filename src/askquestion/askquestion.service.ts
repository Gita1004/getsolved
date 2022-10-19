import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { askquestion } from "./interface/askquestion.interface";

@Injectable({})
export class AskQuestionService{
    constructor(@Inject('askquestion_Model') 
    private askquestionmodel:Model<askquestion>){}

    async create(createQuestionDto:CreateQuestionDto):Promise<askquestion>{
        const createquestion= new this.askquestionmodel(createQuestionDto)
        return createquestion.save();
    }

    async getquestion():Promise<askquestion[]>{
        return this.askquestionmodel.find().exec();
    }
}