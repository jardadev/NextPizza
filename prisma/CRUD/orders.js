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
