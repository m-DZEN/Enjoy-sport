import React from 'react';
import './TrainingWorkout.css';

export default function TrainingWorkout() {
  const days = [
    { id: 1, title: 'Понедельник' },
    { id: 2, title: 'Вторник' },
    { id: 3, title: 'Среда' },
    { id: 2, title: 'Четверг' },
    { id: 2, title: 'Пятница' },
    { id: 2, title: 'Суббота' },
    { id: 2, title: 'Воскресенье' },
  ];
  const dailyTrains = [
    {
      id: 1, title: 'Жим штанги лёжа', weight: 50, sets: 3, rep: 10, rest: 90,
    },
    {
      id: 3, title: 'Жим гантелей лежа', weight: 10, sets: 4, rep: 8, rest: 90,
    },
    {
      id: 5, title: 'Отжимания от пола', weight: 0, sets: 3, rep: 10, rest: 90,
    },
  ];
  return (
    <>
      <div className="workout_container">
        <caption>{days[0].title}</caption>
        <div className="dailyTrain">
          {dailyTrains.map((el) => (
            <div className="dailyBox">
              <div>
                {' '}
                {el.title}
                {' '}
              </div>
              <div>
                {' '}
                Вес
                {' '}
                {el.weight}
                {' '}
                кг
                {' '}
              </div>
              <div>
                {' '}
                Подходов
                {' '}
                {el.sets}
                {' '}
              </div>
              <div>
                {' '}
                Повторений
                {' '}
                {el.rep}
                {' '}
              </div>
              <div>
                {' '}
                Отдых
                {' '}
                {el.rest}
                {' '}
              </div>
            </div>
          ))}
        </div>

      </div>
      <button className="workout_btn" type="submit">Завершить</button>

    </>
  );
}
