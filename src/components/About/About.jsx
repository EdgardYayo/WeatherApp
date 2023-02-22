import React from "react";
import style from './About.module.css'
import thanks from '../../img/thanks.png'


export default function About(props){
    return (
        <div className={style.container}>
            <h1 className={style.title}>About This</h1>
            <p className={style.content}>This is a single-page application that serves as practice on our way to becoming Full Stack Developers. It was made by Edgard Allan Pazos Inda.💕😘</p>
            <img className={style.img} src={thanks} alt="thanks"/>
        </div>
    )
}
