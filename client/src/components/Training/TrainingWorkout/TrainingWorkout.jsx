import React from 'react';
import './TrainingWorkout.css';

export default function TrainingWorkout() {
  /*   const days = [
    { id: 1, title: 'Понедельник' },
    { id: 2, title: 'Вторник' },
    { id: 3, title: 'Среда' },
    { id: 2, title: 'Четверг' },
    { id: 2, title: 'Пятница' },
    { id: 2, title: 'Суббота' },
    { id: 2, title: 'Воскресенье' },
  ]; */

  return (
    <>
      <div className="workout_container">
        <table>
          <caption>Понедельник</caption>

          <thead>
            <tr>
              <td>
                Название
              </td>
              <th id="stud" scope="col">
                Подходы
              </th>
              <th id="chal" scope="col">
                Повторения
              </th>
              <th id="villa" scope="col">
                Выполнено
              </th>
              <th id="villa" scope="col">
                Подробнее
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th id="par" className="span" colSpan="5" scope="colgroup">
                Дневная
              </th>
            </tr>
            <tr>
              <th headers="par" id="pbed1">
                Приседание
              </th>
              <td headers="par pbed1 stud">3</td>
              <td headers="par pbed1 apt">20, 30, 35</td>
              <td headers="par pbed1 chal">
                <input type="checkbox" name="" id="" />
              </td>
              <td headers="par pbed2 villa"><a href="https://www.youtube.com/">Youtube</a></td>
            </tr>
            <tr>
              <th headers="par" id="pbed2">
                Отжимание
              </th>
              <td headers="par pbed2 stud">3</td>
              <td headers="par pbed2 apt">20, 30, 35</td>
              <td headers="par pbed1 chal">
                <input type="checkbox" name="" id="" />
              </td>
              <td headers="par pbed2 villa"><a href="https://www.youtube.com/">Youtube</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="workout_btn" type="submit">Завершить</button>

    </>
  );
}
