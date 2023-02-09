import React, { useState } from 'react';
// import { useEffect } from "react";
import { useSelector } from 'react-redux';
import ButtonChatAndMotivation from '../ButtonChatAndMotivation/ButtonChatAndMotivation';
import './Cabinet.css';

export default function Cabinet() {
  const user = useSelector((store) => store.userStore);
  console.log(user.userId);

  // useEffect(() => {
  //   (const res = await fetch("http://localhost:3001/cabinet", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ inputs, user }),
  //     credentials: "include",
  //   }))()
  // }, [])

  const initState = {
    birthday: '',
    height: '',
    weight: '',
    gender: 'female',
    bodyType: 'full',
    typeProgram: 'loseWeight',
    finishWeight: '',
    ready: 'db',
    notReady: 'db',
    contra: 'db',
  };

  const [inputs, setInputs] = useState(initState);

  const formHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createUserData = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/cabinet', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs, user }),
      credentials: 'include',
    });
    const data = await res.json();
    console.log('data', data);
    setInputs(initState);
  };
  return (
    <div>
      <div>
        <h2 style={{ color: 'red' }}>введите свои данные</h2>
      </div>
      <div className="inputDiv">
        <div>
          <h2 style={{ color: 'blue' }}>введите свои данные</h2>
        </div>
        <form onSubmit={createUserData}>
          <div className="inputDiv">
            <div>
              <label>
                дата рождения
                <input
                  value={inputs.birthday}
                  required
                  onChange={formHandler}
                  type="date"
                  name="birthday"
                />
              </label>
            </div>
            <div>
              <label>
                рост
                <input
                  value={inputs.height}
                  required
                  onChange={formHandler}
                  min="100"
                  max="200"
                  type="number"
                  name="height"
                />
              </label>
            </div>
            <div>
              <label>
                вес
                <input
                  value={inputs.weight}
                  required
                  onChange={formHandler}
                  min="40"
                  max="140"
                  type="number"
                  name="weight"
                />
              </label>
            </div>
            <div>
              <label>
                пол
                <select
                  value={inputs.gender}
                  required
                  onChange={formHandler}
                  name="gender"
                >
                  <option value="female">женский</option>
                  <option value="male">мужской</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                телосложение
                <select
                  value={inputs.bodyType}
                  required
                  onChange={formHandler}
                  name="bodyType"
                >
                  <option value="full">полное</option>
                  <option value="thin">худощавое</option>
                </select>
              </label>
            </div>
          </div>
          <div className="mainTrain">
            <div>
              <h3 style={{ color: 'blue' }}>выберите программу тренировок</h3>
            </div>
            <div>
              <div>
                <label>
                  цель
                  <select
                    value={inputs.typeProgram}
                    onChange={formHandler}
                    name="typeProgram"
                  >
                    <option value="loseWeight">похудеть</option>
                    <option value="gainWeight">набрать вес</option>
                    <option value="holdWeight">удержать вес</option>
                  </select>
                </label>
                {/* <input /> */}
              </div>
              <div>
                <label>
                  желаемый вес
                  <input
                    value={inputs.finishWeight}
                    required
                    type="number"
                    onChange={formHandler}
                    name="finishWeight"
                  />
                </label>
              </div>
            </div>
          </div>

          <h3 style={{ color: 'blue' }}>Список продуктов</h3>
          <div className="products">
            <div className="ol">
              <p>готов отказаться</p>
              <textarea
                value={inputs.ready}
                required
                onChange={formHandler}
                name="ready"
              />
            </div>
            <div className="ol">
              <p>не готов отказаться</p>
              <textarea
                value={inputs.notReady}
                required
                onChange={formHandler}
                name="notReady"
              />
            </div>
          </div>
          <div>
            <div>
              <p>Противопоказания</p>
              <textarea
                value={inputs.contra}
                required
                onChange={formHandler}
                name="contra"
              />
              {' '}
            </div>
          </div>
          <div>
            <button type="submit" style={{ color: 'red' }}>
              Сохранить
            </button>
          </div>
        </form>
        <div>
          <ButtonChatAndMotivation />
        </div>
      </div>
      <ButtonChatAndMotivation />
    </div>
  );
}
