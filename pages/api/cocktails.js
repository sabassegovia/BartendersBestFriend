import db from "../../mongoose/db.js";
import Cocktail from "../../mongoose/models.js";
export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      console.log("in post handler", req.body);
      await db();
      const cocktail = await Cocktail.create(req.body);
      res.status(200).json({ name: "In Post" });
    } else if (req.method === "GET") {
      res.status(200).json({ name: "In get" });
    } else if (req.method === "PATCH") {
      res.status(200).json({ name: "In patch" });
    } else if (req.method === "DELETE") {
      res.status(200).json({ name: "In delete" });
    }
  } catch (error) {
    console.log("error");
    res.json({ error });
  }
}
