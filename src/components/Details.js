
import { useEffect, useState } from 'react';
import CardTodo from './Card';
import AddTodo from './AddTodo';

import { useSession } from 'next-auth/client';
const Details = (props) => {

    const [getTodos, setTodos] = useState([]);

    const [session, loading] = useSession();
    const [content, setContent] = useState();

    const getData = async () => {
        const respose = await fetch('http://localhost:3000/api/gettodos')
        const resData = await respose.json();
        setTodos(resData)
    }

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

    useEffect(() => {
        getData();
        const fetchData = async () => {
            const res = await fetch("/api/secret");
            const resJson = await res.json();

            if (resJson.content) {
                setContent(json.content)
            }
            fetchData();
        }
    }, [session])



    if (typeof window !== "undefined" && loading) return null;

    if (!session) {
        return (
            <div>
                <h1>You are not signed in, please sign in</h1>
            </div>
        )
    }

    return (
        <div>

            <AddTodo getData={getData} />
            <h1>All Todos proted</h1>
            {
                getTodos.length === 0 ? <p>No Todos added yet</p> : getTodos.map((data, index) => {
                    return (
                        <div key={index}>
                            <CardTodo todosData={data} delTodo={delTodo} getData={getData} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Details;