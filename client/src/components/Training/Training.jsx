import React from 'react';
import './Training.css';
import { Link } from 'react-router-dom';

export default function Training() {
  const days = [];

  const today = new Date();
  // const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  // const dayAfterTomorrow = new Date(today.getTime() + (2 * (24 * 60 * 60 * 1000)));
  // console.log('today', today);
  for (let i = 0; i < 3; i += 1) {
    const dayX = new Date(today.getTime() + i * (24 * 60 * 60 * 1000));

    const dayOfTheWeek = dayX.getDay();

    const date = { title: '', dateRus: dayX.toLocaleString('ru').toString().slice(0, 10), dateEn: dayX.toISOString().slice(0, 10) };

    switch (dayOfTheWeek) {
      case 0:
        date.title = 'Воскресенье';
        break;
      case 1:
        date.title = 'Понедельник';
        break;
      case 2:
        date.title = 'Вторник';
        break;
      case 3:
        date.title = 'Среда';
        break;
      case 4:
        date.title = 'Четверг';
        break;
      case 5:
        date.title = 'Пятница';
        break;
      case 6:
        date.title = 'Суббота';
        break;
      default:
        date.title = 'Понедельник';
    }

    days.push(date);
  }
  console.log('days', days);
  // const dayOfTheWeek = today.getDay();

  // const date = { title: '', date: today.toISOString().slice(0, 10) };

  return (
    <div className="workout_container">
      {days.map((el) => (
        <div className="block">
          <div className="block-show">
            {el.title}
            ,
            {' '}
            {el.dateRus}
          </div>
          <div className="block-none">
            {/* Сделать бы параметрический запрос
            <Link className="linkButton" to={`/workout/${el.id}`}> Тренировки</Link> */}
            <Link className="linkButton" to={`/workout/${el.dateEn}`}>Тренировки</Link>
            <Link className="linkButton" to="/nutrition">Питание</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
