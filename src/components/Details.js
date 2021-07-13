import { prisma, PrismaClient } from '@prisma/client';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
const Details = ({ userInfo }) => {
    console.log('+++', userInfo);


    return (
        <div>
            <h1>Details</h1>
            {
                // userInfo.map((u, index) => {
                //     return (
                //         <div key={index}>
                //             <p>Firt Name: {u.todo}</p>
                //             <Button variant='contained' color="primary"><Link href="/about/About">about</Link></Button>
                //             <Button variant='contained' color="primary"><Link href="/">Home</Link></Button>
                //             <Button
                //                 variant='contained'
                //                 color="primary"
                //                 onClick={() => deleteUserProfile(u.id)}
                //             >Delete</Button>
                //         </div>
                //     )
                // })
            }
        </div>
    );
};
export const getServerSideProps = async () => {
    const prisma = new PrismaClient();
    const userInfo = await prisma.todos.findMany();
    console.log('>>', userInfo)
    return { props: { userInfo } }
}
export default Details;