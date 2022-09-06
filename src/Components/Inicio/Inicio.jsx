import React, { useState } from 'react';
import style from './Inicio.module.css'
import fotoZapa from '../Imagenes/Shoes.png'
import Card from '../Cards/Card'
import data from '../jsonCards'
import Footer from '../Footer/Footer'

export default function Inicio() {
    return (
        <div className={style.container}>

            <div className={style.containerDisplay}>
                <img src={fotoZapa} alt="Jordan 4 retro" />
            </div>

                <div className={style.texto}>
                    <h2>New Arrivals</h2>
                </div>
            <div className={style.cards}>
                {data.map(item => {
                    return <Card value={item} />
                })}
            </div>
            <Footer />

        </div>
    )
}