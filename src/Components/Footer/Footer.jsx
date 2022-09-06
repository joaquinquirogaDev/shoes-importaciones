import React from 'react';
import style from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
    return (
        <div className={style.containerFooter}>
            <p>Importaciones.snkrs</p>
            <div className={style.nameTop}>

            </div>

            <div className={style.infoFooter}>




            </div>



            <div className={style.redesFooter}>
                <a href=""><InstagramIcon /></a>
                <a href=""><TwitterIcon /></a>
                <a href=""><FacebookIcon /></a>
                <a href=""><WhatsAppIcon /></a>

            </div>
        </div>
    )
}