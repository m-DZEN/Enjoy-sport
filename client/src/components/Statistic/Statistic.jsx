import React from "react";
import ButtonChatAndMotivation from "../ButtonChatAndMotivation/ButtonChatAndMotivation";
import Grafics from "../Graphics/Graphics";
import "./Statistic.css";

export default function Statistic() {
  return (
    <>
      <div className="daysOfTrenings">
        <div>
          <p>дней в тренировках</p>
        </div>
        <div>
          <p>20</p>
        </div>
      </div>
      <div>
        <div className="changeVol">
          <div>изменение веса </div>
          <div>
            <input></input>
          </div>
        </div>
        <div>
          <h4>Изменение объемов</h4>
        </div>
        <div>
          <div className="changeVol">
            <div>бедра </div>
            <div>
              <input></input>
            </div>
          </div>
          <div className="changeVol">
            <div>ягодицы </div>
            <div>
              <input></input>
            </div>
          </div>
          <div className="changeVol">
            <div>талия </div>
            <div>
              <input></input>
            </div>
          </div>
          <div className="changeVol">
            <div>грудь </div>
            <div>
              <input></input>
            </div>
          </div>
          <div className="changeVol">
            <div>бицепс </div>
            <div>
              <input></input>
            </div>
          </div>
        </div>
      </div>
    <Grafics />
      <ButtonChatAndMotivation />
    </>
  );
}
