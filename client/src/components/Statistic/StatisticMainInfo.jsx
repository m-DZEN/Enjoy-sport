import React from 'react';

import styles from './Statistic.module.scss';

const transformDateFormat = (date) => date.split('-').reverse().join('.');

export default function StatisticMainInfo({
  statisticDaysCounter,
  userStatisticList,
  actualDate,
  setOldStatistic,
}) {
  return (
    <div className={styles.statisticMainInfo}>

      <div className={styles.statisticMainInfoTitle}>
        Моя статистика
      </div>

      <div className={styles.statisticMainInfoText}>
        Прошло дней от начала статистики:
        {' '}
        <b>{statisticDaysCounter}</b>
      </div>

      <div className={styles.statisticMainInfoText}>
        Всего дней с замерами:
        {' '}
        <b>{userStatisticList.length}</b>
      </div>

      {actualDate === userStatisticList[0]?.data && (
        <>
          <div className={styles.statisticMainInfoBold}>
            Сегодня &#40;
            {transformDateFormat(actualDate)}
            &#41;
            <br />
            уже были сделаны замеры!
          </div>

          <div className={styles.statisticMainInfoText}>
            При необходимости их можно изменить.
          </div>
        </>
      )}

      {actualDate !== userStatisticList[0]?.data && (
        <div className={styles.statisticMainInfoDanger}>
          Сегодня &#40;
          {transformDateFormat(actualDate)}
          &#41;
          <br />
          ещё не были сделаны замеры!
        </div>
      )}

      {userStatisticList.length > 0
          && actualDate !== userStatisticList[0]?.data
          && (
            <button
              type="button"
              className={styles.statisticMainInfoButton}
              onClick={setOldStatistic}
            >
              Использовать замеры от
              {' '}
              {transformDateFormat(userStatisticList[0]?.data)}
              ?
            </button>
          )}

      {!userStatisticList.length
          && actualDate !== userStatisticList[0]?.data
          && (
            <div className={styles.statisticMainInfoText}>
              История замеров также отсутствует!
            </div>
          )}
    </div>
  );
}
