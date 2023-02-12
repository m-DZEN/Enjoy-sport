/* eslint-disable import/no-extraneous-dependencies */
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

const graphData = [
  {
    pointName: '01.01',
    weight: 62,
  },
  {
    pointName: '02.01',
    weight: 63,
  },
  {
    pointName: '03.01',
    weight: 61,
  },
  {
    pointName: '04.01',
    weight: 61.5,
  },
  {
    pointName: '05.01',
    weight: 60.3,
  },
  {
    pointName: '06.01',
    weight: 59.8,
  },
  {
    pointName: '07.01',
    weight: 59,
  },
];

const minWeight = Math.min(...graphData.map((el) => el.weight));
const maxWeight = Math.max(...graphData.map((el) => el.weight));
// console.log({ minWeight, maxWeight });

const minWeightY = ((Math.round(minWeight / 5) * 5) - 10);
const maxWeightY = ((Math.round(maxWeight / 5) * 5) + 5);
// console.log({ minWeightY, maxWeightY });

const tickQuantity = ((maxWeightY - minWeightY) / 5) + 1;
// console.log({ tickQuantity });
const pageWidth = document.documentElement.scrollWidth;
const winWidth = Math.floor(pageWidth * 0.8);
console.log(winWidth);

function Graph() {
  return (
    <AreaChart
      width={350}
      height={300}
      data={graphData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <defs>
        <linearGradient id="weightColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#008080" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#008080" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="pointName"
        tickMargin={15}
      />
      <YAxis
        unit=" кг"
        tickMargin={10}
        tickCount={tickQuantity}
        domain={[minWeightY, maxWeightY]}
      />
      <Tooltip
        formatter={(value, name) => (name === 'Вес' ? `${value} кг` : `${value} см`)}
      />
      <Legend
        verticalAlign="top"
        height={30}
      />
      <Area
        name="Вес"
        dataKey="weight"
        type="monotone"
        stroke="#008080"
        strokeWidth={2}
        activeDot={{ r: 7 }}
        fillOpacity={1}
        fill="url(#weightColor)"
      />
    </AreaChart>
  );
}

export default memo(Graph);
