import React from 'react'

function Profileid(props) {
    return (
        <div>
            {props.id}
        </div>
    )
}

export async function getServerSideProps (context){

    const { params } = context ;
    const Userid = params.profileid

    return {
        props : {
            id : "userId : " + Userid
        }
    }
}

export default Profileid
