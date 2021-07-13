import { prisma, PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
const Details = () => {

    const [getTodos, setTodos] = useState([]);

    const getData = async () => {
        const respose = await fetch('http://localhost:3000/api/gettodos')
        const resData = await respose.json();
        setTodos(resData)
    }

    useEffect(() => {
        getData();
    }, [])

    const delTodo = async (id) => {
        try {
            const deleteUserData = await fetch(`http://localhost:3000/api/${id}`, {
                method: 'DELETE'
            })
            setTodos(getTodos.filter(deluser => deluser.id !== id))
            // userInfo.filter(deluser => deluser.id !== id)
            const data = await deleteUserData.json();
        } catch (error) {
            // console.error(message.error);
            // throw new Error("Error")
        }
    }
    return (
        <div>
            <h1>Details</h1>
            {
                getTodos.map((u, index) => {
                    return (
                        <div key={index}>
                            <p>Firt Name: {u.todo}</p>
                            <Button variant='contained' color="primary"><Link href="/">Update</Link></Button>
                            <Button
                                variant='contained'
                                color="primary"
                                onClick={() => delTodo(u.id)}
                            >Delete</Button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Details;