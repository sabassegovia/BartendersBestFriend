import { Schema, model, models } from "mongoose";

const cocktailSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  ounces: [
    {
      type: String,
    },
  ],
  bottleSize: [
    {
      type: String,
    },
  ],
  bottleType: [
    {
      type: String,
    },
  ],
  ingredients: [
    {
      type: String,
    },
  ],
});

const Cocktail = models.Cocktail || model("Cocktail", cocktailSchema);

export default Cocktail;
