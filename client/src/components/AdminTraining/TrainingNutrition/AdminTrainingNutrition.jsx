import React from 'react';
import './AdminTrainingNutrition.modules.css';

const days = [
  { id: 1, title: 'Понедельник' },
  { id: 2, title: 'Вторник' },
  { id: 3, title: 'Среда' },
  { id: 2, title: 'Четверг' },
  { id: 2, title: 'Пятница' },
  { id: 2, title: 'Суббота' },
  { id: 2, title: 'Воскресенье' },
];

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
  return (
    <div className="nutrition_container">
      <caption>{days[0].title}</caption>
      <table>
        <tbody>
          {typeFood.map((el) => (
            <>
              <tr>
                <th colSpan="5">{el.title}</th>
              </tr>
              {dailyRecipe.filter((e) => (e.type_id === el.id)).map((e) => (
                <tr>
                  <th>{e.title}</th>
                  <td>
                    {e.mass}
                    {' '}
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
