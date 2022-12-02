import prisma from '../../../lib/prisma';

// POST /api/user
// Required fields in body: name, email
export default async function handler(req, res) {
	const { fullName, email, password } = req.body;
	const result = await prisma?.customer.create({
		data: { fullName, email, password },
	});
	console.log(result);
	res.status(200).json({ message: 'customer added' });
}
