import React from "react";

export default function Cabinet() {
  return (
    <>
      <div>
        <div>
          <h2 style={{ color: "red" }}>введите свои данные</h2>
        </div>
        <div className="inputDiv">
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
            <label>пол
            <select>
              <option>мужской</option>
              <option>женский</option>
            </select>
            </label>
          </div>
          <div>
            <label>телосложение
          <select> 
              <option>худощавое</option>
              <option>полное</option>
            </select>

            </label>
          </div>
        </div>
        <div className="mainTrain">
          <div>
            <h3 style={{ color: "red" }}>выберите программу тренировок</h3>
          </div>
          <div>
            <div>
              <h4>цель тренировок</h4>
            </div>
            <div>
              <select>
                <option>похудеть</option>
                <option>набрать вес</option>
                <option>удержать вес</option>
              </select>
            </div>
            <div>
              <label>
                желаемый вес
                <input />
              </label>
            </div>
          </div>
        </div>
          <h3 style={{ color: "red" }}>Список продуктов</h3>
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
          <div>
          <button>Чат с тренером</button>
          </div>   
          <div>
          <button>Получить мотивацию</button>
          </div>
       

        </div>

      </div>
    </>
  );
}
