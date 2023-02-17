import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './TrainingWorkout.module.scss';

export default function TrainingWorkout() {
  const user = useSelector((store) => store.userStore);
  const { day } = useParams();

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

      setTraining((pre) => ([...pre, ...data]));
    }());
  }, []);

  return (
    <div>
      <div className={styles.workout_container}>
        <div className={styles.dailyTrain}>
          <caption>
            {day}
          </caption>
          <table className={styles.table1}>
            <tr>
              <th className={styles.th2}>Упражнение</th>
              <th className={styles.th2}>Вес</th>
              <th className={styles.th2}>Повторения/Подходы</th>
              {/* <th>Подходы</th> */}
              <th className={styles.th2}>Отдых</th>
            </tr>
            {training.length > 0 && (
              training[0].filter((el) => el.dailyTrain_id !== null).map((el) => (
                <tr>
                  <td className={styles.td}>{el['DailyTrain.Training.title']}</td>
                  <td className={styles.td}>{el['DailyTrain.weight']}</td>
                  <td className={styles.td}>
                    {el['DailyTrain.rep']}
                    /
                    {el['DailyTrain.sets']}
                  </td>
                  {/* <td>{el['DailyTrain.sets']}</td> */}
                  <td className={styles.td}>{el['DailyTrain.rest']}</td>
                </tr>
              )))}
          </table>
        </div>
      </div>
    </div>
  );
}
