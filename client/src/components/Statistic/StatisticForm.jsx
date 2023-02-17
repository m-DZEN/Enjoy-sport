import React from 'react';

import styles from './Statistic.module.scss';

export default function StatisticForm({
  userStatisticList,
  actualDate,
  statisticFormInputs,
  setStatisticFormInputs,
  handleStatisticFormSubmit,
  setOneGraphName,
}) {
  const handleStatisticFormInputsChange = (event) => {
    setStatisticFormInputs((prev) => ({ ...prev, [event.target.name]: +event.target.value }));
  };

  return (
    <form
      className={styles.statisticForm}
      onSubmit={handleStatisticFormSubmit}
    >
      <div className={styles.statisticFormTitle}>
        Мои текущие замеры
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
            <input
              className={styles.statisticFormInput}
              type="number"
              min="1"
              max="300"
                // step="0.1"
              name="currentWeight"
              value={statisticFormInputs.currentWeight}
              onChange={handleStatisticFormInputsChange}
              required
            />
          </div>

          <div className={styles.statisticFormOneInputBlock}>
            <label htmlFor="waistGirth">
              <button
                type="button"
                className={styles.statisticFormLabelButton}
                onClick={() => setOneGraphName('waistGirth')}
              >
                Талия, мм
              </button>
            </label>
            <input
              className={styles.statisticFormInput}
              type="number"
              min="1"
              max="300"
              name="waistGirth"
              value={statisticFormInputs.waistGirth}
              onChange={handleStatisticFormInputsChange}
              required
            />
          </div>

          <div className={styles.statisticFormOneInputBlock}>
            <label htmlFor="hipGirth">
              <button
                type="button"
                className={styles.statisticFormLabelButton}
                onClick={() => setOneGraphName('hipGirth')}
              >
                Бедро, мм
              </button>
            </label>
            <input
              className={styles.statisticFormInput}
              type="number"
              min="1"
              max="300"
              name="hipGirth"
              value={(statisticFormInputs.hipGirth)}
              onChange={handleStatisticFormInputsChange}
              required
            />
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
                Грудь, мм
              </button>
            </label>
            <input
              className={styles.statisticFormInput}
              type="number"
              min="1"
              max="300"
              name="breastGirth"
              value={statisticFormInputs.breastGirth}
              onChange={handleStatisticFormInputsChange}
              required
            />
          </div>

          <div className={styles.statisticFormOneInputBlock}>
            <label htmlFor="bicepsGirth">
              <button
                type="button"
                className={styles.statisticFormLabelButton}
                onClick={() => setOneGraphName('bicepsGirth')}
              >
                Бицепс, мм
              </button>
            </label>
            <input
              className={styles.statisticFormInput}
              type="number"
              min="1"
              max="300"
              name="bicepsGirth"
              value={statisticFormInputs.bicepsGirth}
              onChange={handleStatisticFormInputsChange}
              required
            />
          </div>

          <div className={styles.statisticFormOneInputBlock}>
            <label htmlFor="buttocksGirth">
              <button
                type="button"
                className={styles.statisticFormLabelButton}
                onClick={() => setOneGraphName('buttocksGirth')}
              >
                Ягодицы, мм
              </button>
            </label>
            <input
              className={styles.statisticFormInput}
              type="number"
              min="1"
              max="300"
              name="buttocksGirth"
              value={statisticFormInputs.buttocksGirth}
              onChange={handleStatisticFormInputsChange}
              required
            />
          </div>
        </div>

        {/* ^^^ ### STATISTIC FORM INPUTS BLOCK ### ^^^ */}
      </div>

      <button
        className={styles.statisticFormSubmitButton}
        type="submit"
      >
        {(userStatisticList.length > 0 && actualDate === userStatisticList[0].data) ? 'Изменить' : 'Сохранить'}
      </button>
    </form>
  );
}
