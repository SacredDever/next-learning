import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getData = async (req, res) => {
    console.log(req);
    if (req.method === 'GET') {
        const userData = await prisma.todos.findMany();
        res.json(userData);
    }

}

export default getData;