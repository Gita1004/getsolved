import mongoose from "mongoose";

export const askquestionSchema =new mongoose.Schema({
    title:String,
    description:String
})