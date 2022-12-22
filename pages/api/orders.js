// pages/api/order

import {
	createOrder,
	deleteOrder,
	getAllOrders,
	getOrder,
	updateOrder,
} from '../../prisma/CRUD/orders';

export default async function handle(req, res) {
	try {
		switch (req.method) {
			case 'GET': {
				if (req.query.id) {
					// Get a single order if id is provided is the query
					// api/orders?id=1
					const order = await getOrder(req.query.id);
					return res.status(200).json(order);
				} else {
					// Otherwise, fetch all orders
					const orders = await getAllOrders();
					return res.json(orders);
				}
			}
			case 'POST': {
				// Create a new order
				const { items, method, total, orderedById } = req.body;
				const order = await createOrder(items, method, total, orderedById);
				return res.json(order);
			}
			case 'PUT': {
				// Update an existing order
				const { id, ...updateData } = req.body;
				const order = await updateOrder(id, updateData);
				return res.json(order);
			}
			case 'DELETE': {
				// Delete an existing order
				const { id } = req.body;
				const order = await deleteOrder(id);
				return res.json(order);
			}
			default:
				break;
		}
	} catch (error) {
		return res.status(500).json({ ...error, message: error.message });
	}
}
