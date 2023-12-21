import { Schema, models, model } from "mongoose";

export interface ICategory {
    _id: string
    name: string
}
const CategorySchema = new Schema({
    name: { type: String, required: true }
})

const Category = models.Event || model("User", CategorySchema);

export default Category;