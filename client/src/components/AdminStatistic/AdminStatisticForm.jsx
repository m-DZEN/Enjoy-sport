import React from 'react';

import styles from './AdminStatistic.module.scss';

export default function StatisticForm({
  // userStatisticList,
  // actualDate,
  // bstatisticFormInputs,
  // setStatisticFormInputs,
  handleStatisticFormSubmit,
  setOneGraphName,
}) {
/*   const handleStatisticFormInputsChange = (event) => {
    setStatisticFormInputs((prev) => ({ ...prev, [event.target.name]: +event.target.value }));
  }; */

  return (
    <form
      className={styles.statisticForm}
      onSubmit={handleStatisticFormSubmit}
    >
      <div className={styles.statisticFormTitle}>
        Текущие измерения
      </div>

      <div className={styles.statisticFormInputsBlock}>
        {/* vvv ### STATISTIC FORM INPUTS BLOCK ### vvv */}

        <div className={styles.statisticFormLeftInputs}>
          <div className={styles.statisticFormOneInputBlock}>
            <label htmlFor="currentWeight">
              <button
                type="button"
                className={styles.statisticFormLabelButton}
                onClick={() => setOneGraphName('currentWeight')}
              >
                Вес, кг
              </button>
            </label>
          </div>

          <div className={styles.statisticFormOneInputBlock}>
            <label htmlFor="waistGirth">
              <button
                type="button"
                className={styles.statisticFormLabelButton}
                onClick={() => setOneGraphName('waistGirth')}
              >
                Талия, см
              </button>
            </label>

          </div>

          <div className={styles.statisticFormOneInputBlock}>
            <label htmlFor="hipGirth">
              <button
                type="button"
                className={styles.statisticFormLabelButton}
                onClick={() => setOneGraphName('hipGirth')}
              >
                Бедро, см
              </button>
            </label>

          </div>
        </div>

        {/* ^^^ LEFT INPUTS ########## RIGHT INPUTS vvv */}

        <div className={styles.statisticFormRightInputs}>
          <div className={styles.statisticFormOneInputBlock}>
            <label htmlFor="breastGirth">
              <button
                type="button"
                className={styles.statisticFormLabelButton}
                onClick={() => setOneGraphName('breastGirth')}
              >
                Грудь, см
              </button>
            </label>

          </div>

          <div className={styles.statisticFormOneInputBlock}>
            <label htmlFor="bicepsGirth">
              <button
                type="button"
                className={styles.statisticFormLabelButton}
                onClick={() => setOneGraphName('bicepsGirth')}
              >
                Бицепс, см
              </button>
            </label>
          </div>

          <div className={styles.statisticFormOneInputBlock}>
            <label htmlFor="buttocksGirth">
              <button
                type="button"
                className={styles.statisticFormLabelButton}
                onClick={() => setOneGraphName('buttocksGirth')}
              >
                Ягодицы, см
              </button>
            </label>

          </div>
        </div>

        {/* ^^^ ### STATISTIC FORM INPUTS BLOCK ### ^^^ */}
      </div>

      {/*       <button
        className={styles.statisticFormSubmitButton}
        type="submit"
      >
        {(userStatisticList.length > 0 && actualDate === userStatisticList[0].data) ? 'Изменить' : 'Сохранить'}
      </button> */}
    </form>
  );
}
