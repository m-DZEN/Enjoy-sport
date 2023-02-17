import React, { memo } from 'react';
import {
  BarChart, // !!! Родительский элемент
  Bar, // !!! Столбик диаграммы
  ReferenceLine, // !!! Референсная линия
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

function Diagram({ userStatisticList }) {
  const userStatistic = userStatisticList.slice(0, 31).reverse();
  // console.log('########## userStatistic ===>', userStatistic);

  const firstDayName = userStatistic[0].data;
  const lastDayName = userStatistic[userStatistic.length - 1].data;

  const first3DaysWeight = userStatistic.slice(0, 3).map((el) => el.currentWeight).reduce((acc, curr) => acc + curr, 0);
  const last3DaysWeight = userStatistic.slice(-3).map((el) => el.currentWeight).reduce((acc, curr) => acc + curr, 0);
  // console.log('########## first3DaysWeight ===>', first3DaysWeight);
  // console.log('########## last3DaysWeight ===>', last3DaysWeight);

  const first3DaysHipGirth = userStatistic.slice(0, 3).map((el) => el.hipGirth).reduce((acc, curr) => acc + curr, 0);
  const last3DaysHipGirth = userStatistic.slice(-3).map((el) => el.hipGirth).reduce((acc, curr) => acc + curr, 0);

  const first3DaysButtocksGirth = userStatistic.slice(0, 3).map((el) => el.buttocksGirth).reduce((acc, curr) => acc + curr, 0);
  const last3DaysButtocksGirth = userStatistic.slice(-3).map((el) => el.buttocksGirth).reduce((acc, curr) => acc + curr, 0);

  const first3DaysWaistGirth = userStatistic.slice(0, 3).map((el) => el.waistGirth).reduce((acc, curr) => acc + curr, 0);
  const last3DaysWaistGirth = userStatistic.slice(-3).map((el) => el.waistGirth).reduce((acc, curr) => acc + curr, 0);

  const first3DaysBreastGirth = userStatistic.slice(0, 3).map((el) => el.breastGirth).reduce((acc, curr) => acc + curr, 0);
  const last3DaysBreastGirth = userStatistic.slice(-3).map((el) => el.breastGirth).reduce((acc, curr) => acc + curr, 0);

  const first3DaysBicepsGirth = userStatistic.slice(0, 3).map((el) => el.bicepsGirth).reduce((acc, curr) => acc + curr, 0);
  const last3DaysBicepsGirth = userStatistic.slice(-3).map((el) => el.bicepsGirth).reduce((acc, curr) => acc + curr, 0);

  const calcAverageData = (firstData, lastData) => Math.round(((lastData - firstData) / firstData) * 1000) / 10;

  const diagramData = [
    {
      pointName: `${transformDateFormat(firstDayName)} - ${transformDateFormat(lastDayName)}`,
      weight: calcAverageData(first3DaysWeight, last3DaysWeight),
      hipGirth: calcAverageData(first3DaysHipGirth, last3DaysHipGirth),
      buttocksGirth: calcAverageData(first3DaysButtocksGirth, last3DaysButtocksGirth),
      waistGirth: calcAverageData(first3DaysWaistGirth, last3DaysWaistGirth),
      breastGirth: calcAverageData(first3DaysBreastGirth, last3DaysBreastGirth),
      bicepsGirth: calcAverageData(first3DaysBicepsGirth, last3DaysBicepsGirth),
    },
  ];

  const allPercentValues = diagramData
    .map(
      (obj) => Object.entries(obj)
        .filter((arr) => arr[0] !== 'pointName')
        .map((subArr) => subArr[1]),
    )
    .flat();
  // console.log({ allPercentValues });

  const minPercent = Math.min(...allPercentValues);
  const maxPercent = Math.max(...allPercentValues);
  // console.log({ minPercent, maxPercent });

  const minPercentY = ((Math.round(minPercent / 2) * 2) - 2);
  const maxPercentY = ((Math.round(maxPercent / 2) * 2) + 2) % 4 === 0
    ? ((Math.round(maxPercent / 2) * 2) + 2)
    : ((Math.round(maxPercent / 2) * 2) + 4);
  // console.log({ minPercentY, maxPercentY });

  const percentTickQuantity = ((maxPercentY - minPercentY) / 2) + 1;
  // console.log({ percentTickQuantity });

  return (
    <div>
      <div className={styles.statisticGraphicsTitle}>
        Динамика всех параметров
        <br />
        за последний месяц
      </div>

      <div className={styles.statisticGraphicsDiagram}>
        <BarChart
          width={330}
          height={355}
          data={diagramData}
          barCategoryGap="15%"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="pointName"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            unit="%"
            tickMargin={10}
            tickCount={percentTickQuantity}
            domain={[minPercentY, maxPercentY]}
          />
          <Tooltip
            formatter={(value) => (value > 0 ? `+${value}%` : `${value}%`)}
          />
          <Legend
            verticalAlign="top"
            wrapperStyle={{
              width: '82%',
              height: 80,
              margin: '0 10%',
            }}
          />
          <ReferenceLine y={0} stroke="#000" />
          <Bar
            name="Вес"
            dataKey="weight"
            fill="#008080"
          />
          <Bar
            name="Обхват бедра"
            dataKey="hipGirth"
            fill="#0088fe"
          />
          <Bar
            name="Обхват ягодиц"
            dataKey="buttocksGirth"
            fill="#fa8072"
          />
          <Bar
            name="Обхват талии"
            dataKey="waistGirth"
            fill="#0202db"
          />
          <Bar
            name="Обхват груди"
            dataKey="breastGirth"
            fill="#ffac06"
          />
          <Bar
            name="Обхват бицепса"
            dataKey="bicepsGirth"
            fill="#8884d8"
          />
        </BarChart>
      </div>
    </div>
  );
}

export default memo(Diagram);
