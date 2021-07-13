import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateData = async (req, res) => {

    if (req.method === 'PUT') {
        const { id } = req.query;
        const perm = parseInt(id)
        const { body } = req

        const todoData = await prisma.todos.update({
            where: {
                id: perm
            },
            data: {
                todo: body.todo
            }
        });
        res.json(todoData);
    }

}

export default updateData;