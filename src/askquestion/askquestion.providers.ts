import { Connection } from "mongoose";
import { askquestionSchema } from "./schemas/askquestion.schema";

export const askquestionProviders=[
    {
        provide:'askquestion_Model',
        useFactory:(connection:Connection)=>connection.model('askquestion',askquestionSchema),
        inject:['DATABASE_CONNECTION']
    }
]