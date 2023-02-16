import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './AdminTrainingNutrition.module.scss';

const typeFood = [
  { id: 1, title: 'Завтрак' },
  { id: 2, title: 'Перекус 1' },
  { id: 3, title: 'Обед' },
  { id: 4, title: 'Перекус 2' },
  { id: 5, title: 'Ужин' },
];

export default function TrainingNutrition() {
  // const user = useSelector((store) => store.userStore);
  const { day, id } = useParams();
  const user = { userId: id };

  const [nutrition, setNutrition] = useState([]);
  const [foodList, setFoodList] = useState([]);

  const [visible, setVisible] = useState('none');

  const [inputs, setInputs] = useState({
    type_id: 0,
    mass: 0,
  });

  // управляемая форма инпутов
  const formHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    (async function () {
      const res = await fetch(`http://localhost:3001/nutrition/${day}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
        credentials: 'include',
      });
      const data = await res.json();
      setNutrition((pre) => ([...pre, ...data[0]]));
      setFoodList((pre) => ([...pre, ...data[1]]));
    }());
  }, []);

  // кнопка отображения формы добавления новой еды
  const addFood = async () => {
    setVisible('');
  };

  // сохрание новой еды
  const saveFood = async () => {
    // setVisible('none');
    const res = await fetch('http://localhost:3001/admin/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs, user, day }),
      credentials: 'include',
    });
    const resp = await res.json();
    console.log('ответ', resp);
    setNutrition(resp);
  };

  // удаление тренировки по ID
  const delFood = async (x) => {
    console.log('айди элемента', x);
    console.log('стейт', nutrition);
    try {
      const response = await fetch('http://localhost:3001/admin/delfood', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ x }),
        credentials: 'include',
      });
      if (response.ok) {
        // setTraining((pre) => (pre.filter((el) => el.id !== x)));
        setNutrition((pre) => pre.filter((el) => el.id !== x));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // какой то комент
  return (
    <div className={styles.nutrition_container}>
      <caption>{day}</caption>
      <table>
        <tbody>
          {typeFood.map((el) => (
            <>
              <tr key={el.id}>
                <th className={styles.day} colSpan="5">{el.title}</th>
              </tr>
              {nutrition.filter((e) => (e['DailyRecipe.Recipe.type_id'] === el.id)).map((e) => (
                <tr key={e.id}>
                  <th>
                    <Link className={styles.linkButton} to={`/recipe/${e['DailyRecipe.Recipe.id']}`}>
                      {e['DailyRecipe.Recipe.title']}
                    </Link>
                  </th>
                  <td className={styles.td}>
                    {e['DailyRecipe.mass']}
                    гр.
                  </td>
                  <td className={styles.tdButton}>
                    <button type="button" className={styles.button} onClick={() => { delFood(e.id); }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
      <table className={styles.table2}>
        <tbody>
          <tr className={styles.addForm} style={{ display: visible }}>
            <th>
              <select
                className={styles.thSelect}
                onChange={formHandler}
                name="type_id"
              >
                {foodList.map((el) => (
                  <option key={el.id} className="optionsTrain" value={el.id}>{el.title}</option>
                ))}
              </select>
            </th>
            <th>
              <input
                className={styles.thInput}
                onChange={formHandler}
                name="mass"
              />
            </th>
            <td className={styles.tdInputButton}>
              <button type="button" className={styles.button} onClick={saveFood}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-save" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" className={styles.downButton} onClick={addFood}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
        </svg>
      </button>
    </div>
  );
}
