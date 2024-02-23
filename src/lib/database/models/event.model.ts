import { Schema, Types, model, models } from "mongoose"




export interface IEvent extends Document {
    _id:string;
    eventname: string;
    desc?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    entryfee?: string;
    totalslots?: string;
    available?: string;
    img: string;
    category: {_id:string,name:string}; 
    organizer:{_id:string,firstName:String,LastName:string} ; 
}


const EventSchema = new Schema ({
    eventname:{type:String,required:true},
    desc:{type:String},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    zip:{type:String},
    country:{type:String},
    entryfee:{type:String},
    totalslots:{type:String},
    available:{type:String},
    img:{type:String,required:true},
    category:{type:Schema.Types.ObjectId,ref:'Category'},
    organizer:{type:Schema.Types.ObjectId,ref:'User'},
})


const Event = models.Event || model ('Event',EventSchema)


export default Event;