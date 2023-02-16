import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './AdminParametrs.module.scss';

export default function AdminParametrs() {
  // const user = useSelector((store) => store.userStore);
  const { id } = useParams();
  const user = { userId: id };

  const [inputs, setInputs] = useState({
    birthday: ' ',
    height: ' ',
    weight: ' ',
    gender: 'female',
    body_type: 'full',
    type_program: 'loseWeight',
    final_weight: ' ',
    ready: ' ',
    notready: ' ',
    contra: ' ',
  });

  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      // console.log('user.userId useEffect', user);
      const res = await fetch('http://localhost:3001/cabinet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
        credentials: 'include',
      });
      const data = await res.json();
      // console.log('data', data);

      setInputs((pre) => ({ ...pre, ...data }));
    }());
  }, []);

  const formHandler = (e) => {
    // console.log(e.target.name, e.target.value);
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
    await res.json();
    // console.log('data', data);
    setInputs(inputs);
  };
  return (
    <div>
      <div className={styles.inputDiv}>
        <div>
          <h2>Данные пользователя</h2>
        </div>
        <form onSubmit={createUserData}>

          <div>
            <div className={styles.middleDiv}>
              <div className={styles.smallDiv}>
                Дата рождения
              </div>
              <div className={styles.smallDiv}>
                <input
                  disabled
                  className={styles.input}
                  value={inputs.birthday}
                  required
                  onChange={formHandler}
                  type="date"
                  name="birthday"
                />
              </div>
            </div>

            <div className={styles.middleDiv}>
              <div className={styles.smallDiv}>
                Рост
              </div>
              <div className={styles.smallDiv}>
                <input
                  disabled
                  className={styles.input}
                  value={inputs.height}
                  required
                  onChange={formHandler}
                  min="100"
                  max="200"
                  type="number"
                  name="height"
                />
              </div>
            </div>

            <div className={styles.middleDiv}>
              <div className={styles.smallDiv}>
                Вес
              </div>
              <div className={styles.smallDiv}>
                <input
                  disabled
                  className={styles.input}
                  value={inputs.weight}
                  required
                  onChange={formHandler}
                  min="40"
                  max="140"
                  type="number"
                  name="weight"
                />
              </div>
            </div>

            <div className={styles.middleDiv}>
              <div className={styles.smallDiv}>
                Пол
              </div>
              <div className={styles.smallDiv}>
                <select
                  disabled="true"
                  className={styles.input}
                  value={inputs.gender}
                  required
                  onChange={formHandler}
                  name="gender"
                >
                  <option value="female">женский</option>
                  <option value="male">мужской</option>
                </select>
              </div>
            </div>

            <div className={styles.middleDiv}>
              <div className={styles.smallDiv}>
                Телосложение
              </div>
              <div className={styles.smallDiv}>
                <select
                  disabled="true"
                  className={styles.input}
                  value={inputs.body_type}
                  required
                  onChange={formHandler}
                  name="body_type"
                >
                  <option value="full">полное</option>
                  <option value="thin">худощавое</option>
                </select>
              </div>
            </div>

            <div className={styles.textH5}>
              <h5>Программа тренировок</h5>
            </div>

            <div className={styles.middleDiv}>
              <div className={styles.smallDiv}>
                Цель
              </div>
              <div className={styles.smallDiv}>
                <select
                  disabled="true"
                  className={styles.input}
                  value={inputs.type_program}
                  onChange={formHandler}
                  name="type_program"
                >
                  <option value="loseWeight">похудеть</option>
                  <option value="gainWeight">набрать вес</option>
                  <option value="holdWeight">удержать вес</option>
                </select>
              </div>
            </div>
            <div className={styles.middleDiv}>
              <div className={styles.smallDiv}>
                Желаемый вес
              </div>
              <div className={styles.smallDiv}>
                <input
                  className={styles.input}
                  value={inputs.final_weight}
                  required
                  type="number"
                  onChange={formHandler}
                  name="final_weight"
                  disabled
                />
              </div>
            </div>

            <div className={styles.textH5}>
              <h5>Список продуктов</h5>
            </div>

            <div className={styles.textareaDiv}>
              <div className={styles.smallDiv}>
                Готов отказаться
              </div>
              <div className={styles.smallDiv}>
                <textarea
                  className={styles.inputTextArea}
                  value={inputs.ready}
                  onChange={formHandler}
                  name="ready"
                  disabled
                />
              </div>
            </div>

            <div className={styles.textareaDiv}>
              <div className={styles.smallDiv}>
                Не готов отказаться
              </div>
              <div className={styles.smallDiv}>
                <textarea
                  className={styles.inputTextArea}
                  value={inputs.notready}
                  onChange={formHandler}
                  name="notready"
                  disabled
                />
              </div>
            </div>

            <div className={styles.textareaDiv}>
              <div className={styles.smallDiv}>
                Противопоказания
              </div>
              <div className={styles.smallDiv}>
                <textarea
                  className={styles.inputTextArea}
                  value={inputs.contra}
                  required
                  onChange={formHandler}
                  name="contra"
                  disabled
                />
              </div>
            </div>

          </div>
          <div>
            <button type="button" className={styles.buttonStyle}>
              <Link className={styles.link} to={`/admin/training/${id}`}>Создать программу</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
