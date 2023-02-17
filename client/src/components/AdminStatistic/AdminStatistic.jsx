import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { CiDumbbell as Dumbbell } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import StatisticMainInfo from './AdminStatisticMainInfo';
import StatisticForm from './AdminStatisticForm';
import Graph from './Graphs/Graph';

import styles from './AdminStatistic.module.scss';

const initialStatisticFormState = {
  currentWeight: '',
  hipGirth: '',
  buttocksGirth: '',
  waistGirth: '',
  breastGirth: '',
  bicepsGirth: '',
};

export default function Statistic() {
  const [isStatisticLoading, setIsStatisticLoading] = useState(true);
  const [statisticFormInputs, setStatisticFormInputs] = useState(initialStatisticFormState);
  const [statisticDaysCounter, setStatisticDaysCounter] = useState(0);
  const [userStatisticList, setUserStatisticList] = useState([]);
  const [actualDate, setActualDate] = useState(null);
  const [oneGraphName, setOneGraphName] = useState('currentWeight');

  // const user = useSelector((store) => store.userStore);
  // console.log('user ===>', user);
  const { id } = useParams();
  const user = { userId: id };

  console.log('userStatisticList ===>', userStatisticList);
  console.log('actualDate ===>', actualDate);

  // !!! Получение актуальной даты (при каждом рендере компонента)
  useEffect(() => {
    if (actualDate !== (new Date()).toISOString().slice(0, 10)) {
      setActualDate((new Date()).toISOString().slice(0, 10));
    }
  });

  // !!! Расчёт и обновление количества дней от начала ведения статистики
  useEffect(() => {
    if (userStatisticList.length > 0 && actualDate) {
      const lastDate = Date.parse(actualDate);
      const firstDate = Date.parse((userStatisticList.slice(-1))[0].data);
      // console.log({ lastDate, firstDate }, lastDate === firstDate);
      if (lastDate === firstDate) {
        setStatisticDaysCounter(1);
      } else {
        const daysCounter = (lastDate - firstDate) / (1000 * 60 * 60 * 24);
        console.log('daysCounter ===>', daysCounter);
        setStatisticDaysCounter(Math.round(daysCounter));
      }
    } else {
      setStatisticDaysCounter(0);
    }
  }, [userStatisticList, actualDate]);

  // !!! Запрос статистики пользователя с сервера (только при первом рендере компонента)
  useEffect(() => {
    (async function () {
      setIsStatisticLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/newstatistic/${user.userId}`, {
          credentials: 'include',
        });
        // console.log('response.status ===>', response.status);
        if (response.status === 200) {
          const data = await response.json();
          console.log(data.backendResult);
          if (data.backendResult === 'STATISTIC-OK') {
            const statisticData = data.statisticData.filter((el) => el.currentWeight !== null).sort().reverse();
            console.log('statisticData ===>', statisticData);
            setUserStatisticList(statisticData);
            setIsStatisticLoading(false);
          }
        } else {
          console.log('!!! Ошибка на сервере !!!');
        }
      } catch (error) {
        console.log('ERROR:', error.message);
      }
    }());
  }, []);

  // !!! Установка значений в "инпуты", если для текущего дня они уже были внесены в БД
  useEffect(() => {
    if (userStatisticList.length > 0 && actualDate === userStatisticList[0].data) {
      const currentDayStatisticData = { ...userStatisticList[0] };
      delete currentDayStatisticData.data;
      setStatisticFormInputs((prev) => ({ ...prev, ...currentDayStatisticData }));
    }
  }, [userStatisticList]);

  // !!! Установка в "инпуты" данных предыдущего дня
  const setOldStatistic = () => {
    const oldDayStatisticData = { ...userStatisticList[0] };
    delete oldDayStatisticData.data;
    setStatisticFormInputs((prev) => ({ ...prev, ...oldDayStatisticData }));
  };

  // !!! Отправка и создание/перезапись данных статитстики пользователя на сервере и в "State" клиента
  const handleStatisticFormSubmit = (event) => {
    event.preventDefault();
    // console.log('statisticFormInputs ===>', statisticFormInputs);
    (async function () {
      try {
        const response = await fetch('http://localhost:3001/newstatistic', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: user.userId, actualDate, statisticFormInputs }),
          credentials: 'include',
        });
        // console.log('response.status ===>', response.status);
        if (response.status === 200) {
          const data = await response.json();
          console.log(data.backendResult);
          if (data.backendResult === 'STATISTIC-CREATE-OK') {
            setUserStatisticList((prev) => [{ data: actualDate, ...statisticFormInputs }, ...prev]);
          }
          if (data.backendResult === 'STATISTIC-UPDATE-OK') {
            setUserStatisticList((prev) => [{ data: actualDate, ...statisticFormInputs }, ...prev.slice(1)]);
          }
        } else {
          console.log('!!! Ошибка на сервере !!!');
        }
      } catch (error) {
        console.log('ERROR:', error.message);
      }
    }());
  };

  return (
    <div className={styles.statistic}>

      {isStatisticLoading && (
      <div className={styles.statisticLoading}>
        <Dumbbell />
      </div>
      )}

      {!isStatisticLoading && (
        <StatisticMainInfo
          statisticDaysCounter={statisticDaysCounter}
          userStatisticList={userStatisticList}
          actualDate={actualDate}
          setOldStatistic={setOldStatistic}
        />
      )}

      {!isStatisticLoading && (
        <StatisticForm
          userStatisticList={userStatisticList}
          actualDate={actualDate}
          statisticFormInputs={statisticFormInputs}
          setStatisticFormInputs={setStatisticFormInputs}
          handleStatisticFormSubmit={handleStatisticFormSubmit}
          setOneGraphName={setOneGraphName}
        />
      )}

      {!isStatisticLoading && (
        <div className={styles.statisticGraphics}>

          {userStatisticList.length < 31 && (
            <div className={styles.statisticGraphicsMainBlock}>
              <div className={styles.statisticGraphicsInfoText}>
                Недостаточно информации
                <br />
                для отображения графиков!
              </div>
            </div>
          )}

          {userStatisticList.length >= 31 && (
            <div className={styles.statisticGraphicsContent}>

              {/* <div className={styles.statisticGraphicsButtonsBlock}>
                <button
                  type="button"
                  className={styles.statisticGraphicsOneButton}
                >
                  ddd
                </button>
                <button
                  type="button"
                  className={styles.statisticGraphicsOneButton}
                >
                  ddd
                </button>
              </div> */}

              <div className={styles.statisticGraphicsMainBlock}>
                {/* <div className={styles.statisticGraphicsInfoText}>
                  Выберите график
                  <br />
                  для отображения!
                </div> */}
                <Graph
                  userStatisticList={userStatisticList}
                  oneGraphName={oneGraphName}
                />
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
