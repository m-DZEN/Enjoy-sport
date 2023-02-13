import React, { useEffect, useState } from 'react';
import './TrainingWorkout.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function TrainingWorkout() {
  const user = useSelector((store) => store.userStore);
  const { day } = useParams();

  // console.log('user', user);
  // console.log('day', day);

  const [training, setTraining] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch(`http://localhost:3001/training/${day}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
        credentials: 'include',
      });

      const data = await res.json();
      console.log('data', data);

      setTraining((pre) => ([...pre, ...data]));
    }());
  }, []);
  console.log('training', training);
  return (
    <>
      <div className="workout_container">
        <caption>{day}</caption>
        <div className="dailyTrain">
          <table>
            <tr>
              <th>Упражнение</th>
              <th>Вес</th>
              <th>Подходы</th>
              <th>Повторения</th>
              <th>Отдых</th>
            </tr>
            {training.map((el) => (
              <tr>
                <td>{el['DailyTrain.Training.title']}</td>
                <td>{el['DailyTrain.weight']}</td>
                <td>{el['DailyTrain.sets']}</td>
                <td>{el['DailyTrain.rep']}</td>
                <td>{el['DailyTrain.rest']}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <button className="workout_btn" type="submit">Завершить</button>

    </>
  );
}
