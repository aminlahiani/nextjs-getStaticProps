import React from 'react'
import Link from "next/link"
function Userprofile(props) {
    console.log(props)
    return (
        <div>
            <Link href={`/${props.id}`}>
            <h1>Username  : {props.username}</h1>
            </Link>
            <h1>age : {props.age}</h1>
            <h1>job : {props.job}</h1>
        </div>
    )
}

export async function getServerSideProps (context) {
 
     console.log(context)
    const { req , res , params} = context ;
   
    return {
        props:{
            username : "Max",
            age : 26 ,
            job : "Doctor",
            id : "user1"
        }
    }
}

export default Userprofile
