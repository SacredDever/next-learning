import { prisma, PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Update from './Update';
import CardTodo from './Card';
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
            const data = await deleteUserData.json();
        } catch (error) {

            throw new Error("Error")
        }
    }
    return (
        <div>
            <h1>Details</h1>
            {
                getTodos.map((data, index) => {
                    return (
                        <div key={index}>
                            {/* <p>Firt Name: {data.todo}</p>
                            
                            <Update todosData={data} />
                            <Button
                                variant='contained'
                                color="primary"
                                onClick={() => delTodo(data.id)}
                            >Delete</Button> */}
                            <CardTodo todosData={data} delTodo={delTodo} getData={getData} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Details;