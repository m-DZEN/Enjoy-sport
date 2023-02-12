import React from 'react';
import './Training.css';
import { Link } from 'react-router-dom';

export default function Training() {
  const days = [
    { id: 1, title: 'Понедельник' },
    { id: 2, title: 'Вторник' },
    { id: 3, title: 'Среда' },
    { id: 2, title: 'Четверг' },
    { id: 2, title: 'Пятница' },
    { id: 2, title: 'Суббота' },
    { id: 2, title: 'Воскресенье' },
  ];

  return (
    <div className="workout_container">
      {days.map((el) => (
        <div className="block">
          <div className="block-show" key={el.id}>{el.title}</div>
          <div className="block-none">
            {/* Сделать бы параметрический запрос
            <Link className="linkButton" to={`/workout/${el.id}`}> Тренировки</Link> */}
            <Link className="linkButton" to="/workout">Тренировки</Link>
            <Link className="linkButton" to="/nutrition">Питание</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
