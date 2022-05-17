import { Schema, model, models } from "mongoose";

const cocktailSchema = new Schema({
  name: String,
  ounces: [String],
  bottleSize: [String],
  ingredients: [String],
});

const Cocktail = models.Cocktail || model("Cocktail", cocktailSchema);

export default Cocktail;
