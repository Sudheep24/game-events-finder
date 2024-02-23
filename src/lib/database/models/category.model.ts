import { Schema, model, models } from "mongoose";
import { tree } from "next/dist/build/templates/app-page";

export interface ICategory extends Document{
    _is:string;
    name:string,
}

const CategorySchema=new Schema({
    name:{type:String,required:true,unique:true},

})

const Category = models.Category || model('Category',CategorySchema);

export default Category