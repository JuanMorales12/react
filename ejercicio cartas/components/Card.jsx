import React from 'react';
import { generate as id } from 'shortid';
const Card = (info)=>{
    return (
        <>
            <h1 className = "card__title">{info.title}</h1>
            <img className = "card__img" src={info.img} alt={info.title}/>
            <p> {info.description} </p>
            <p className = "card__author">{info.author}</p>
            <ul className = "card__tags">
                {info.tags.map(tag =>{
                    return <li key= {id()} className = "card__tag">{tag}</li>
                })}
            </ul>
            <p className = "card__views"> {info.views}</p>
            <p className = "card__date">{info.date}</p>


        </>
    )

}

export default Card;