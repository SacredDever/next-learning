import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deluser = async (req, res) => {
    console.log('>>', req.query)

    if (req.method === 'DELETE') {
        const { id } = req.query;
        const perm = parseInt(id)
        const deleteUser = await prisma.todos.delete({
            where: {
                id: perm
            }
        })
        res.status(200).json(deleteUser);
    } else {
        res.status(403).json({ err: "Error has occurred while deleting a user." })
    }
}

export default deluser;