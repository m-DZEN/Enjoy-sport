import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styles from './TrainingNutrition.module.scss';

const typeFood = [
  { id: 1, title: 'Завтрак' },
  { id: 2, title: 'Перекус 1' },
  { id: 3, title: 'Обед' },
  { id: 4, title: 'Перекус 2' },
  { id: 5, title: 'Ужин' },
];

export default function TrainingNutrition() {
  const user = useSelector((store) => store.userStore);
  const { day } = useParams();

  const [nutrition, setNutrition] = useState([]);

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
      // console.log('data', data);

      setNutrition((pre) => ([...pre, ...data]));
    }());
  }, []);
  // console.log('nutrition', nutrition);

  return (
    <div className={styles.nutrition_container}>
      <caption>{day}</caption>
      <table>
        <tbody>
          {typeFood.map((el) => (
            <div key={el.id}>
              <tr>
                <th colSpan="5">{el.title}</th>
              </tr>
              {nutrition.filter((e) => (e['DailyRecipe.Recipe.TypeFood.id'] === el.id)).map((e) => (
                <tr key={el.id}>
                  <th>
                    <Link className={styles.linkButton} to={`/recipe/${e['DailyRecipe.Recipe.id']}`}>
                      {e['DailyRecipe.Recipe.title']}
                    </Link>
                  </th>
                  <td className={styles.td}>
                    {e['DailyRecipe.mass']}
                    гр.
                  </td>
                </tr>
              ))}
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
}
