import prisma from '../../lib/prisma';

// READ
export const getAllOrders = async () => {
	const users = await prisma.order.findMany({});
	return users;
};

export const getOrder = async (id) => {
	const order = await prisma.order.findUnique({
		where: { id },
	});
	return order;
};

// CREATE
export const createOrder = async (data) => {
	const { items, method, total, orderedById } = data;

	const order = await prisma.order.create({
		data: {
			...data,
		},
	});
	return order;
};

// UPDATE
export const updateOrder = async (id, updateData) => {
	const order = await prisma.order.update({
		where: {
			id,
		},
		data: {
			...updateData,
		},
	});
	return order;
};

// DELETE
export const deleteOrder = async (id) => {
	const order = await prisma.order.delete({
		where: {
			id,
		},
	});
	return order;
};

// // CREATE Order
// export const createOrder = async (data) => {
// 	await fetch('/api/orders/create', {
// 		method: 'POST',
// 		body: JSON.stringify(data),
// 		headers: {
// 			'Content-Type': 'application/json; charset=utf8',
// 		},
// 	})
// 		.then(console.log('done'))
// 		.catch((err) => console.log(err));
// };

// // READ Order
// export const getOrder = async () => {
// 	const { oid } = req.query;
// 	const res = await fetch(`/api/orders/${oid}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			// 'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 	})
// 		.then(console.log(res.json()))
// 		.catch((err) => console.log(err));

// 	return res.status(200).json();
// };
