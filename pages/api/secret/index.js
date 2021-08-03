import { getSession } from "next-auth/client";


const secP = async (req, res) => {
    const session = await getSession({ req });
    if (session) {
        res.send({
            content: "Welcome to the todo app!"
        })
    } else {
        res.send({
            error: "You need to be signed in"
        })
    }
}

export default secP