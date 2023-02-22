import React from "react";
import style from "./Ciudad.module.css"

export default function Ciudad({city}) {
    return (
        <div className={style.ciudad}>
                <div className={style.container}>
                    <h2 className={style.name}>{city.name}</h2>
                    <h3>Temperatura: {city.temp} ºC</h3>
                    <h3>Clima: {city.weather}</h3>
                    <h3>Viento: {city.wind} km/h</h3>
                    <h3>Cantidad de nubes: {city.clouds}</h3>
                    <h3>Latitud: {city.latitud}º</h3>
                    <h3>Longitud: {city.longitud}º</h3>
            </div>
        </div>
    )
}