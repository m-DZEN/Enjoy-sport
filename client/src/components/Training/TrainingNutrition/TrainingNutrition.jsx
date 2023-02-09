import React from 'react';
import './TrainingNutrition.modules.css';

export default function TrainingNutrition() {
  return (
    <div className="nutrition_container">
      <table>
        <caption>Понедельник</caption>
        <thead>
          <tr>
            <th>Блюдо</th>
            <th>Каллории</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="5">Завтрак</th>
          </tr>
          <tr>
            <th>Сырники</th>
            <td>32</td>
          </tr>
          <tr>
            <th>Яичница</th>
            <td>32</td>
          </tr>
          <tr>
            <th>Блины</th>
            <td>40</td>
          </tr>
          <tr>
            <th colSpan="5">Обед</th>
          </tr>
          <tr>
            <th>Борщ</th>
            <td>13</td>
          </tr>
          <tr>
            <th>Котлетка</th>
            <td>-</td>
          </tr>
          <tr>
            <th>Тефтелька</th>
            <td>-</td>
          </tr>
          <tr>
            <th colSpan="5">Ужин</th>
          </tr>
          <tr>
            <th>Салат</th>
            <td>13</td>
          </tr>
          <tr>
            <th>Круассан</th>
            <td>-</td>
          </tr>
          <tr>
            <th>Яблоко</th>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
