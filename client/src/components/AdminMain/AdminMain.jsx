import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './AdminMain.css';
import Table from 'react-bootstrap/Table';

export default function AdminMain() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      const res = await fetch('http://localhost:3001/admin');
      const dataList = await res.json();
      console.log('dataList from Back===>', dataList);
      setUsers(() => (dataList));
    }());
  }, []);
  console.log('список', users);
  return (
    <div className="mainList">
      <Table className="table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Прогресс</th>
            <th>Программа</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => (
            <tr>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>тут галочки с закрытыми днями (7 шт)</td>
              <td>тут кнопка в программу юзера</td>
              <td>удалить пользователя</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Outlet />
    </div>
  );
}
