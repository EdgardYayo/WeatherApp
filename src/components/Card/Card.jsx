import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css'

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={style.card}>
        <div id={style.closeIcon} className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className={style.cardBody}>
          <Link to={`/ciudad/${id}`}>
            <h5 className={style.cardTitle}>{name}</h5>
          </Link>
          <div className="row">
            <div id={style.min} className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div id={style.max} className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
