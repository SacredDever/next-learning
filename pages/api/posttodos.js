import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sendData = async (req, res) => {

	if (req.method === 'POST') {
		const { body } = req;
		const perm = JSON.parse(body);
		const userData = await prisma.todos.create({ data: { todo: perm.todos } });
		res.json(userData);
	}

}

export default sendData;