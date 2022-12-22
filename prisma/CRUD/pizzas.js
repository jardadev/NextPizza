import prisma from '../../lib/prisma';

// READ
export const getAllPizzas = async () => {
	const pizzas = await prisma.pizza.findMany({});
	return pizzas;
};

export const getPizza = async (id) => {
	const pizza = await prisma.pizza.findUnique({
		where: { id },
	});
	return pizza;
};

// CREATE
export const createPizza = async (data) => {
	const { size, crust, toppings, price, userOrderId } = data;

	const pizza = await prisma.pizza.create({
		data: {
			...data,
		},
	});
	return pizza;
};

// UPDATE
export const updatePizza = async (id, updateData) => {
	const pizza = await prisma.pizza.update({
		where: {
			id,
		},
		data: {
			...updateData,
		},
	});
	return pizza;
};

// DELETE
export const deletePizza = async (id) => {
	const pizza = await prisma.pizza.delete({
		where: {
			id,
		},
	});
	return pizza;
};
