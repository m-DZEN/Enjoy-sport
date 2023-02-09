/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ButtonChatAndMotivation from '../ButtonChatAndMotivation/ButtonChatAndMotivation';
import './Cabinet.css';

export default function Cabinet() {
  return (
    <div>
      <div>
        <h2 style={{ color: 'red' }}>введите свои данные</h2>
      </div>
      <div className="inputDiv">
        <div>
          <label>
            дата рождения
            <input />
          </label>
        </div>
        <div>
          <label>
            рост
            <input />
          </label>
        </div>
        <div>
          <label>
            вес
            <input />
          </label>
        </div>
        <div>
          <label>
            пол
            <select>
              <option>мужской</option>
              <option>женский</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            телосложение
            <select>
              <option>худощавое</option>
              <option>полное</option>
            </select>
          </label>
        </div>
      </div>
      <div className="mainTrain">
        <div>
          <h3 style={{ color: 'red' }}>выберите программу тренировок</h3>
        </div>
        <div>
          <div>
            <label>
              цель
              <select>
                <option>похудеть</option>
                <option>набрать вес</option>
                <option>удержать вес</option>
              </select>
            </label>
            {/* <input /> */}
          </div>
          <div>
            <label>
              желаемый вес
              <input />
            </label>
          </div>
        </div>
      </div>
      <h3 style={{ color: 'red' }}>Список продуктов</h3>
      <div className="products">
        <div className="ol">
          <p>ем с удовольствием</p>
          <ol>
            <li>
              <input />
            </li>
            <li>
              <input />
            </li>
          </ol>
        </div>
        <div className="ol">
          <p>аллергия</p>
          <ol>
            <li>
              <input />
            </li>
            <li>
              <input />
            </li>
          </ol>
        </div>
      </div>
      <div>
        <div>
          <button>Противопоказания</button>
        </div>
        <div>
          <button>Сохранить</button>
        </div>
      </div>
      <ButtonChatAndMotivation />
    </div>
  );
}
