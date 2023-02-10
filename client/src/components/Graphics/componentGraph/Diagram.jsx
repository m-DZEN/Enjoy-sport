/* eslint-disable import/no-extraneous-dependencies */
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

const diagramData = [
  {
    pointName: 'январь',
    weight: -5.5,
    hipGirth: -3,
    buttocksGirth: -6.8,
    waistGirth: -3.2,
    breastGirth: -1.5,
    bicepsGirth: 1.5,
  },
  {
    pointName: 'февраль',
    weight: 1,
    hipGirth: -1,
    buttocksGirth: -1.8,
    waistGirth: 0.5,
    breastGirth: -1,
    bicepsGirth: 0.8,
  },
  {
    pointName: 'март',
    weight: -2.5,
    hipGirth: -1.5,
    buttocksGirth: -5,
    waistGirth: -1.2,
    breastGirth: -4.5,
    bicepsGirth: -0.5,
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
const pageWidth = document.documentElement.scrollWidth;
const winWidth = Math.floor(pageWidth * 0.8);
console.log(winWidth);

function Diagram() {
  return (
    <BarChart
      width={350}
      height={350}
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
          width: '80%',
          height: 50,
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
  );
}

export default memo(Diagram);
