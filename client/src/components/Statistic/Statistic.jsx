import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ButtonChatAndMotivation from '../ButtonChatAndMotivation/ButtonChatAndMotivation';
import Grafics from '../Graphics/Graphics';
import './Statistic.css';

export default function Statistic() {
  const user = useSelector((store) => store.userStore);

  const [inputs, setInputs] = useState({
    currentWeight: '',
    hipGirth: '',
    buttocksGirth: '',
    waistGirth: '',
    breastGirth: '',
    bicepsGirth: '',
  });

  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      // console.log('user.userId useEffect', user);
      const res = await fetch('http://localhost:3001/statistic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
        credentials: 'include',
      });
      const data = await res.json();
      console.log('data==useEffect===stat', data);

      setInputs((pre) => ({ ...pre, ...data[0] }));
    }());
  }, []);

  // console.log('inputs===>useEff', inputs);

  const formHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createUserData = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/statistic', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs, user }),
      credentials: 'include',
    });
    const data = await res.json();
    console.log('dataStatistic', data);
    setInputs(inputs);
  };

  return (

    <>
      <div className="changeParams">
        {' '}
        <div>
          {' '}
          <p>Дней в тренировках</p>
          {' '}
        </div>
        <div>
          {' '}
          <p>20</p>
          {' '}
        </div>
      </div>
      <form onSubmit={createUserData}>
        <div className="changeParams">
          <div className="changeVol">
            <div className="changeVol">
              Текущий вес
              {' '}

            </div>
            <div>
              <input
                className="value"
                value={inputs.currentWeight}
                onChange={formHandler}
                type="text"
                name="currentWeight"
              />
            </div>
          </div>
          <div>
            <h4>Изменение объемов</h4>
          </div>
          <div className="inputform">
            <div className="changeVol">
              <div>Бёдра </div>
              <div>
                <input
                  className="value"
                  value={inputs.hipGirth}
                  onChange={formHandler}
                  type="text"
                  name="hipGirth"
                />
              </div>
            </div>
            <div className="changeVol">
              <div>Ягодицы </div>
              <div className="value">
                <input
                  className="value"
                  value={inputs.buttocksGirth}
                  onChange={formHandler}
                  type="text"
                  name="buttocksGirth"
                />
              </div>
            </div>
            <div className="changeVol">
              <div>Талия </div>
              <div className="value">
                <input
                  className="value"
                  value={inputs.waistGirth}
                  onChange={formHandler}
                  type="text"
                  name="waistGirth"
                />
              </div>
            </div>
            <div className="changeVol">
              <div>Грудь </div>
              <div className="value">
                <input
                  className="value"
                  value={inputs.breastGirth}
                  onChange={formHandler}
                  type="text"
                  name="breastGirth"
                />
              </div>
            </div>
            <div className="changeVol">
              <div>Бицепс </div>
              <div className="value">
                <input
                  className="value"
                  value={inputs.bicepsGirth}
                  onChange={formHandler}
                  type="text"
                  name="bicepsGirth"
                />
              </div>
            </div>
            <div>
              <button type="submit">
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </form>
      <Grafics />
      <ButtonChatAndMotivation />
    </>
  );
}
