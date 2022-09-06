import React from 'react';
import style from './Card.module.css'

const Card = (value) => {
    console.log(value)
    return (
        <div className={style.card}>
           
                <div className={style.imagen}>
                    <img src={value.value.image} alt="image" />
                </div>
                <div className={style.info}>
                <p>{value.value.estilo}</p>
                <p>{value.value.colorWay}</p>
                </div>

        </div>
    )
}

export default Card