import React from "react";
import './TrainingWorkout.css'


export default function TrainingWorkout() {
  return (
    <><div className="workout_container">
      <table>
        <caption>Понедельник</caption>
        <thead>
          <tr>
            <td>
              Title
            </td>
            <th id="stud" scope="col">
              Sets
            </th>
            <th id="chal" scope="col">
              Reps
            </th>
            <th id="villa" scope="col">
              Done
            </th>
            <th id="villa" scope="col">
              Video
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th id="par" class="span" colspan="5" scope="colgroup">
              Дневная
            </th>
          </tr>
          <tr>
            <th headers="par" id="pbed1">
              Приседание
            </th>
            <td headers="par pbed1 stud">3</td>
            <td headers="par pbed1 apt">20, 30, 35</td>
            <td headers="par pbed1 chal">
              <input type="checkbox" name="" id="" />
            </td>
            <td headers="par pbed2 villa"><a href="https://www.youtube.com/">Youtube</a></td>
          </tr>
          <tr>
            <th headers="par" id="pbed2">
              Отжимание
            </th>
            <td headers="par pbed2 stud">3</td>
            <td headers="par pbed2 apt">20, 30, 35</td>
            <td headers="par pbed1 chal">
              <input type="checkbox" name="" id="" />
            </td>
            <td headers="par pbed2 villa"><a href="https://www.youtube.com/">Youtube</a></td>
          </tr>
        </tbody>
      </table>
    </div><button className="workout_btn" type="submit">Завершить</button></>
  );
}
