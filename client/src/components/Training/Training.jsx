import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Training.module.scss';

export default function Training() {
  const days = [];

  const today = new Date();
  // const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  // const dayAfterTomorrow = new Date(today.getTime() + (2 * (24 * 60 * 60 * 1000)));
  // console.log('today', today);
  for (let i = -2; i < 5; i += 1) {
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
  // console.log('days', days);

  return (
    <div className={styles.workout_container}>
      {days.map((el) => (
        <div className={styles.block}>
          <div className={styles.blockShow}>
            {el.title}
            ,
            {' '}
            {el.dateRus}
          </div>
          <div className={styles.blockNone}>
            <Link className={styles.linkButton} to={`/workout/${el.dateEn}`}>Тренировки</Link>
            <Link className={styles.linkButton} to={`/nutrition/${el.dateEn}`}>Питание</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
