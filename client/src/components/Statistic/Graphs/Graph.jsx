import React, { memo } from 'react';
import {
  AreaChart, // !!! Родительский элемент
  Area, // !!! Кривая графика
  XAxis, // !!! Ось X
  YAxis, // !!! Ось Y
  CartesianGrid, // !!! Сетка
  Tooltip, // !!! Всплывающее окошко с данными для точки
  Legend, // !!! Подписи к кривым
} from 'recharts';

import styles from '../Statistic.module.scss';

const transformDateFormat = (date) => date
  .split('-')
  .map((el) => (el.length > 2 ? el.slice(-2) : el))
  .reverse()
  .join('.');

const setGraphColor = (oneGraphName) => {
  switch (oneGraphName) {
    case 'currentWeight':
      return '#008080';
    case 'hipGirth':
      return '#0088fe';
    case 'buttocksGirth':
      return '#fa8072';
    case 'waistGirth':
      return '#0202db';
    case 'breastGirth':
      return '#ffac06';
    case 'bicepsGirth':
      return '#8884d8';
    default:
      return '#000';
  }
};

const setGraphTitle = (oneGraphName) => {
  switch (oneGraphName) {
    case 'currentWeight':
      return 'Вес';
    case 'hipGirth':
      return 'Обхват бедра';
    case 'buttocksGirth':
      return 'Обхват ягодиц';
    case 'waistGirth':
      return 'Обхват талии';
    case 'breastGirth':
      return 'Обхват груди';
    case 'bicepsGirth':
      return 'Обхват бицепса';
    default:
      return '';
  }
};

function Graph({ userStatisticList, oneGraphName }) {
  const graphColor = setGraphColor(oneGraphName);
  const graphTitle = setGraphTitle(oneGraphName);
  const graphUnit = graphTitle === 'Вес' ? ' кг' : ' см';

  console.log({
    oneGraphName, graphColor, graphTitle, graphUnit,
  });

  const graphData = userStatisticList.slice(0, 31)
    .reverse()
    .map((el) => ({ pointX: transformDateFormat(el.data).slice(0, -3), pointY: el[`${oneGraphName}`] }));

  const minValue = Math.min(...graphData.map((el) => el.pointY));
  const maxValue = Math.max(...graphData.map((el) => el.pointY));
  console.log({ minValue, maxValue });

  const minValueY = ((Math.round(minValue / 5) * 5) - 10);
  const maxValueY = ((Math.round(maxValue / 5) * 5) + 5);
  console.log({ minValueY, maxValueY });

  const tickQuantity = ((maxValueY - minValueY) / 5) + 1;
  console.log({ tickQuantity });
  return (
    <div>
      <div className={styles.statisticGraphicsTitle}>
        Изменение выбранного параметра
        <br />
        за последний месяц
      </div>

      <div className={styles.statisticGraphicsOneGraph}>
        <AreaChart
          width={330}
          height={390}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={graphColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={graphColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="pointX"
            tickCount={6}
            tickMargin={10}
          />
          <YAxis
            unit={graphUnit}
            tickMargin={5}
            tickCount={tickQuantity}
            domain={[minValueY, maxValueY]}
          />
          <Tooltip
            formatter={(value, name) => (name === 'Вес' ? `${value} кг` : `${value} см`)}
          />
          <Legend
            verticalAlign="top"
            height={30}
          />
          <Area
            name={graphTitle}
            dataKey="pointY"
            type="monotone"
            stroke={graphColor}
            strokeWidth={2}
            activeDot={{ r: 5 }}
            fillOpacity={1}
            fill="url(#gradientColor)"
          />
        </AreaChart>
      </div>
    </div>
  );
}

export default memo(Graph);
