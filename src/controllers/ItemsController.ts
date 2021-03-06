import { Request, Response } from 'express';
import knex from '../database/connection';
class ItemsController {
    async index(request: Request,response: Response) {
        // Equivalente ao select from
        const items = await knex('items').select('*');
        
        const serializedItem = items.map((item) => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.6:3333/uploads/${item.image}`
            };
        })
        return response.json(serializedItem);
    }
}

export default ItemsController;