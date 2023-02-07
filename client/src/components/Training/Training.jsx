import React from "react";
import "./Training.css";
import { Link } from "react-router-dom";

export default function Training() {
  return (
    <div className="container">
      <div>
        <button className="btn-show">Понедельник</button>
        <div className="block-none">
          <p>Понедельник</p>
          <Link to="/workout">
            <button>Тренировки</button>
          </Link>
          <Link to="/nutrition">
            <button>Питание</button>
          </Link>
        </div>
      </div>
      <div>
        <button className="btn-show">Вторник</button>
        <div className="block-none">
          <p>Вторник</p>
          <Link to="/workout">
            <button>Тренировки</button>
          </Link>
          <Link to="/nutrition">
            <button>Питание</button>
          </Link>
        </div>
      </div>
      <div>
        <button className="btn-show">Среда</button>
        <div className="block-none">
          <p>Среда</p>
          <Link to="/workout">
            <button>Тренировки</button>
          </Link>
          <Link to="/nutrition">
            <button>Питание</button>
          </Link>
        </div>
      </div>
      <div>
        <button className="btn-show">Четверг</button>
        <div className="block-none">
          <Link to="/workout">
            <button>Тренировки</button>
          </Link>
          <Link to="/nutrition">
            <button>Питание</button>
          </Link>
        </div>
      </div>
      <div>
        <button className="btn-show">Пятница</button>
        <div className="block-none">
          <p>Пятница</p>
          <Link to="/workout">
            <button>Тренировки</button>
          </Link>
          <Link to="/nutrition">
            <button>Питание</button>
          </Link>
        </div>
      </div>
      <div>
        <button className="btn-show">Суббота</button>
        <div className="block-none">
          <p>Суббота</p>
          <Link to="/workout">
            <button>Тренировки</button>
          </Link>
          <Link to="/nutrition">
            <button>Питание</button>
          </Link>
        </div>
      </div>
      <div>
        <button className="btn-show">Воскресенье</button>
        <div className="block-none">
          <p>Воскресенье</p>
          <Link to="/workout">
            <button>Тренировки</button>
          </Link>
          <Link to="/nutrition">
            <button>Питание</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
