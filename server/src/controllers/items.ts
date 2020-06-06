import knex from "../database/connection";
import { Request, Response } from "express";

export default class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => ({
      id: item.id,
      title: item.title,
      image_url: `http://192.168.0.19:3333/uploads/${item.image}`,
    }));

    return res.json(serializedItems);
  }
}
