// pages/api/pizza

import {
	createPizza,
	deletePizza,
	getAllPizzas,
	getPizza,
	updatePizza,
} from '../../prisma/CRUD/pizzas';

export default async function handle(req, res) {
	try {
		switch (req.method) {
			case 'GET': {
				if (req.query.id) {
					// Get a single pizza if id is provided is the query
					// api/pizzas?id=1
					const pizza = await getPizza(req.query.id);
					return res.status(200).json(pizza);
				} else {
					// Otherwise, fetch all pizzas
					const pizzas = await getAllPizzas();
					return res.json(pizzas);
				}
			}
			case 'POST': {
				// Create a new pizza
				const { size, crust, toppings, price } = req.body;
				const pizza = await createPizza(items, method, total, pizzaedById);
				return res.json(pizza);
			}
			case 'PUT': {
				// Update an existing pizza
				const { id, ...updateData } = req.body;
				const pizza = await updatePizza(id, updateData);
				return res.json(pizza);
			}
			case 'DELETE': {
				// Delete an existing pizza
				const { id } = req.body;
				const pizza = await deletePizza(id);
				return res.json(pizza);
			}
			default:
				break;
		}
	} catch (error) {
		return res.status(500).json({ ...error, message: error.message });
	}
}
