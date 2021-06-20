import React from 'react';
const Person = ({info,hobbies,bio,render,children})=>{
    console.log(children)
    if(render)
        return (
            <>
            <p> Soy {info.name} y tengo {info.age} años, naci en {info.birthday.getFullYear()} </p>
            {bio}
            </>
        )
    else{
        return <p>persona no identificada</p>
    }
}

export default Person;