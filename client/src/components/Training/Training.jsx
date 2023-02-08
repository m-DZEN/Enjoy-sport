import React from "react";
import "./Training.css";
import { Link } from "react-router-dom";

  

export default function Training() {
  const days  = [
  {title: 'Понедельник'},
  {title: 'Вторник'},
  {title: 'Среда'},
  {title: 'Четверг'},
  {title: 'Пятница'},
  {title: 'Суббота'},
  {title: 'Воскресенье'},
]
  return (
  <div className='workout_container'>
      {days.map((el) => (
        <div className="block">
          <div className="btn-show">{el.title}</div>
            <div className="block-none">
              <Link className="link" to="/workout"> Тренировки</Link>
              <Link className="link" to="/nutrition">Питание</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
