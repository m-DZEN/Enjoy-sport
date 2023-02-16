import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
import styles from './AdminTrainingWorkout.module.scss';

export default function TrainingWorkout() {
  const { id, day } = useParams();
  const user = { userId: id };

  const [training, setTraining] = useState([]);
  const [trainList, setTrainList] = useState([]);

  const [visible, setVisible] = useState('none');

  // eslint-disable-next-line no-unused-vars
  const [inputs, setInputs] = useState({
    training_id: 0,
    weight: 0,
    sets: 0,
    rep: 0,
    rest: 90,
  });
    // управляемая форма инпутов
  const formHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // отображение списка всех тренировок
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
      setTraining((pre) => ([...pre, ...data[0]]));
      setTrainList((pre) => ([...pre, ...data[1]]));
    }());
  }, []);

  // кнопка отображения формы добавления новой задачи
  const addTrain = async () => {
    setVisible('');
  };

  // сохрание новой тренировки
  const saveTrain = async () => {
    setVisible('none');

    const res = await fetch('http://localhost:3001/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs, user, day }),
      credentials: 'include',
    });
    const respons = await res.json();
    setTraining(respons);
  };
  // удаление тренировки по ID
  const delTrain = async (x) => {
    // console.log('training======del train', training);
    // console.log('element ID=====', x);
    try {
      const response = await fetch('http://localhost:3001/admin/deltrain', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ x }),
        credentials: 'include',
      });
      if (response.ok) {
        // setTraining((pre) => (pre.filter((el) => el.id !== x)));
        setTraining((pre) => pre.filter((el) => el.id !== x));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(training);
  return (
    <div className={styles.admintrainlist}>
      <table className={styles.table1}>
        <thead>
          <tr>
            <th className={styles.th}>Упражнение</th>
            <th className={styles.th}>Вес</th>
            <th className={styles.th}>Подходы/Повторения</th>
            <th className={styles.th}> </th>
          </tr>
        </thead>
        <tbody>
          { training.length > 0 && (
            training.filter((el) => el.dailyTrain_id !== null).map((el) => (
              <tr key={el.id}>
                <td className={styles.td}>{el['DailyTrain.Training.title']}</td>
                <td className={styles.td}>{el['DailyTrain.weight']}</td>
                <td className={styles.td}>
                  {el['DailyTrain.sets']}
                  /
                  {' '}
                  {el['DailyTrain.rep']}
                </td>

                <td className={styles.td}>
                  <button type="button" className={styles.button} onClick={() => { delTrain(el.id); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <table className={styles.table2}>
        <tbody>
          { trainList.length > 0 && (

          <tr className={styles.addForm} style={{ display: visible }}>
            <th className={styles.tdInput1}>
              <select
                className={styles.selectform}
                onChange={formHandler}
                name="training_id"
              >
                {trainList.map((el) => (
                  <option key={el.id} className={styles.optionsTrain} value={el.id}>{el.title}</option>
                ))}
              </select>
            </th>
            <th className={styles.tdInput}>
              <input
                className={styles.inputform}
                onChange={formHandler}
                name="weight"
              />
            </th>
            <th className={styles.tdInput}>
              {/* <div className={styles.setrep}> */}
              <input
                className={styles.inputform}
                onChange={formHandler}
                name="sets"
              />
            </th>
            <th className={styles.tdInput}>
              <input
                className={styles.inputform}
                onChange={formHandler}
                name="rep"
              />
              {/* </div> */}
            </th>
            <td className={styles.tdInputButton}>
              <button type="button" className={styles.button} onClick={saveTrain}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-save" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                </svg>
              </button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
      <button type="button" className={styles.downButton} onClick={addTrain}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
        </svg>
      </button>

    </div>
  );
}
