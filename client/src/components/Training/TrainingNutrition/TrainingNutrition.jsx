import React, { useEffect, useState } from 'react';
import './TrainingNutrition.modules.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const typeFood = [
  { id: 1, title: 'Завтрак' },
  { id: 2, title: 'Перекус 1' },
  { id: 3, title: 'Обед' },
  { id: 4, title: 'Перекус 2' },
  { id: 5, title: 'Ужин' },
];
const dailyRecipe = [
  {
    id: 1, type_id: 1, title: 'Блюдо 1', mass: 50,
  },
  {
    id: 2, type_id: 1, title: 'Блюдо 2', mass: 100,
  },
  {
    id: 2, type_id: 2, title: 'Блюдо 3', mass: 120,
  },
  {
    id: 3, type_id: 2, title: 'Блюдо 4', mass: 200,
  },
  {
    id: 4, type_id: 3, title: 'Блюдо 5', mass: 150,
  },
  {
    id: 5, type_id: 3, title: 'Блюдо 6', mass: 50,
  },
  {
    id: 5, type_id: 4, title: 'Блюдо 7', mass: 80,
  },
  {
    id: 5, type_id: 5, title: 'Блюдо 8', mass: 180,
  },

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
      console.log('data', data);

      setNutrition((pre) => ([...pre, ...data]));
    }());
  }, []);
  console.log('nutrition', nutrition);

  return (
    <div className="nutrition_container">
      <caption>{day}</caption>
      <table>
        <tbody>
          {typeFood.map((el) => (
            <>
              <tr>
                <th colSpan="5">{el.title}</th>
              </tr>
              {nutrition.filter((e) => (e['DailyRecipe.Recipe.TypeFood.id'] === el.id)).map((e) => (
                <tr>
                  <th>{e['DailyRecipe.Recipe.title']}</th>
                  <td>
                    {e['DailyRecipe.mass']}
                    гр.
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
