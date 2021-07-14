import { prisma, PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Update from './Update';
import CardTodo from './Card';
import AddTodo from './AddTodo';
const Details = (props) => {

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

            console.log("error")
        }
    }
    return (
        <div>
            {/* <Button variant='contained' color="primary" onClick={props.submitData} >Submit</Button> */}
            <AddTodo getData={getData} />
            <h1>All Todos</h1>
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