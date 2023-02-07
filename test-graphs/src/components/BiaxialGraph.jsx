import React, { memo } from 'react';
import {
  LineChart, // !!! Родительский элемент
  Line, // !!! Кривая графика
  XAxis, // !!! Ось X
  YAxis, // !!! Ось Y
  CartesianGrid, // !!! Сетка
  Tooltip, // !!! Всплывающее окошко с данными для точки
  Legend, // !!! Подписи к кривым
} from 'recharts';

const biaxialGraphData = [
  {
    pointName: '01.01',
    weight: 62,
    hipGirth: 55,
    buttocksGirth: 100,
    waistGirth: 64,
    breastGirth: 90,
    bicepsGirth: 24,
  },
  {
    pointName: '02.01',
    weight: 61.5,
    hipGirth: 54,
    buttocksGirth: 99,
    waistGirth: 63,
    breastGirth: 89,
    bicepsGirth: 24.8,
  },
  {
    pointName: '03.01',
    weight: 61.5,
    hipGirth: 53.5,
    buttocksGirth: 97,
    waistGirth: 62.5,
    breastGirth: 90,
    bicepsGirth: 25,
  },
  {
    pointName: '04.01',
    weight: 61,
    hipGirth: 54,
    buttocksGirth: 95,
    waistGirth: 61,
    breastGirth: 88.5,
    bicepsGirth: 25.7,
  },
  {
    pointName: '05.01',
    weight: 60.5,
    hipGirth: 53.2,
    buttocksGirth: 96,
    waistGirth: 59,
    breastGirth: 86,
    bicepsGirth: 26,
  },
  {
    pointName: '06.01',
    weight: 59.8,
    hipGirth: 53,
    buttocksGirth: 95.5,
    waistGirth: 57,
    breastGirth: 86.5,
    bicepsGirth: 26.6,
  },
  {
    pointName: '07.01',
    weight: 59,
    hipGirth: 53.2,
    buttocksGirth: 94.5,
    waistGirth: 56,
    breastGirth: 85,
    bicepsGirth: 27,
  },
];

const minWeight = Math.min(...biaxialGraphData.map((el) => el.weight));
const maxWeight = Math.max(...biaxialGraphData.map((el) => el.weight));
// console.log({ minWeight, maxWeight });

const minWeightY = ((Math.round(minWeight / 5) * 5) - 10);
const maxWeightY = ((Math.round(maxWeight / 5) * 5) + 10);
// console.log({ minWeightY, maxWeightY });

const weightTickQuantity = ((maxWeightY - minWeightY) / 5) + 1;
// console.log({ weightTickQuantity });

const allGirthValues = biaxialGraphData
  .map(
    (obj) => Object.entries(obj)
      .filter((arr) => arr[0] !== 'weight' && arr[0] !== 'pointName')
      .map((subArr) => subArr[1]),
  )
  .flat();
// console.log({ allGirthValues });

const minGirth = Math.min(...allGirthValues);
const maxGirth = Math.max(...allGirthValues);
// console.log({ minGirth, maxGirth });

const minGirthY = ((Math.round(minGirth / 5) * 5) - 10) > 0
  ? ((Math.round(minGirth / 5) * 5) - 10)
  : 0;
const maxGirthY = ((Math.round(maxGirth / 5) * 5) + 10);
// console.log({ minGirthY, maxGirthY });

const girthTickQuantity = ((maxGirthY - minGirthY) / 5) + 1;
// console.log({ girthTickQuantity });

function BiaxialGraph() {
  return (
    <LineChart
      width={600}
      height={400}
      data={biaxialGraphData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="pointName"
        tickMargin={15}
      />
      <YAxis
        unit=" см"
        yAxisId="left"
        tickMargin={10}
        tickCount={girthTickQuantity}
        domain={[minGirthY, maxGirthY]}
      />
      <YAxis
        unit=" кг"
        yAxisId="right"
        orientation="right"
        tickMargin={10}
        tickCount={weightTickQuantity}
        domain={[minWeightY, maxWeightY]}
      />
      <Tooltip
        formatter={(value, name) => (name === 'Вес' ? `${value} кг` : `${value} см`)}
      />
      <Legend
        verticalAlign="top"
        wrapperStyle={{
          width: '80%',
          height: 50,
          margin: '0 5%',
        }}
      />
      <Line
        name="Вес"
        yAxisId="right"
        dataKey="weight"
        type="monotone"
        stroke="#008080"
        strokeWidth={2}
        activeDot={{ r: 7 }}
      />
      <Line
        name="Обхват бедра"
        yAxisId="left"
        dataKey="hipGirth"
        type="monotone"
        stroke="#0088fe"
        strokeWidth={2}
        activeDot={{ r: 7 }}
      />
      <Line
        name="Обхват ягодиц"
        yAxisId="left"
        dataKey="buttocksGirth"
        type="monotone"
        stroke="#fa8072"
        strokeWidth={2}
        activeDot={{ r: 7 }}
      />
      <Line
        name="Обхват талии"
        yAxisId="left"
        dataKey="waistGirth"
        type="monotone"
        stroke="#0202db"
        strokeWidth={2}
        activeDot={{ r: 7 }}
      />
      <Line
        name="Обхват груди"
        yAxisId="left"
        dataKey="breastGirth"
        type="monotone"
        stroke="#ffac06"
        strokeWidth={2}
        activeDot={{ r: 7 }}
      />
      <Line
        name="Обхват бицепса"
        yAxisId="left"
        dataKey="bicepsGirth"
        type="monotone"
        stroke="#8884d8"
        strokeWidth={2}
        activeDot={{ r: 7 }}
      />
    </LineChart>
  );
}

export default memo(BiaxialGraph);
