import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';

import styles from './AdminWSChat.module.scss';

export default function AdminWSChat() {
  const [chatFormInputValue, setChatFormInputValue] = useState('');
  const [messangeList, setMessangeList] = useState([]);
  const [isUserOnline, setIsUserOnline] = useState(false);

  const { userId } = useParams();
  // console.log('userId ===>', userId);

  const user = useSelector((store) => store.userStore);
  const myId = user.userId;
  const myLogin = user.userLogin;
  const myName = user.userName;
  // console.log({ myId, myLogin, myName });

  // !!!!!!!!!!!!!!!!!!!!!!!!
  // !!! vvv WS LOGIC vvv !!!
  // !!!!!!!!!!!!!!!!!!!!!!!!

  const socket = useMemo(() => new WebSocket(`ws://localhost:3001/wschat/${userId}`), []);

  socket.onopen = () => {
    console.log('SOCKET OPEN');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const { type, payload } = data;
    switch (type) {
      case 'online':
        console.log('USER ONLINE', payload);

        if (payload.chatUsers.find((el) => el.userId === +userId)) {
          setIsUserOnline(true);
        }

        if (payload.chatUsers.find((el) => el.userId === myId)) {
          const myMessanges = [];

          if (payload.chatMessanges.find((el) => +el[0] === myId)) {
            // console.log('FIND MY MESSANGES');
            myMessanges.push(...payload.chatMessanges.filter((el) => +el[0] === myId)[0][1].filter((el) => el.toUserId === +userId));
          }

          if (payload.chatMessanges.find((el) => +el[0] === +userId)) {
            // console.log('FIND USER MESSANGES');
            myMessanges.push(...payload.chatMessanges.filter((elem) => +elem[0] === +userId)[0][1]);
          }

          setMessangeList(myMessanges.sort((a, b) => b.date - a.date));
        }
        break;

      case 'offline':
        console.log('USER OFFLINE', payload);

        if (!payload.chatUsers.find((el) => el.userId === +userId)) {
          setIsUserOnline(false);
        }
        break;

      case 'message':
        console.log('USER MESSAGE', payload);

        if ((payload.userId === myId && payload.toUserId === +userId) || payload.userId === +userId) {
          setMessangeList((prev) => [payload, ...prev]);
        }
        break;

      default:
        console.log('Unknown message type!');
        break;
    }
  };

  socket.onclose = () => {
    console.log('SOCKET CLOSE');
    setIsUserOnline(false);
  };

  socket.onerror = (error) => {
    console.log(error);
  };

  // !!! Закрытие "сокета" при размонтировании компонента
  useEffect(() => (() => {
    socket.close();
  }), []);

  // !!!!!!!!!!!!!!!!!!!!!!!!
  // !!! ^^^ WS LOGIC ^^^ !!!
  // !!!!!!!!!!!!!!!!!!!!!!!!

  const handleChatFormSubmit = (event) => {
    event.preventDefault();

    const date = Date.now();

    const messangeData = {
      userId: myId,
      userLogin: myLogin,
      userName: myName,
      text: chatFormInputValue,
      date,
      localeDate: (new Date(date)).toLocaleString(),
      toUserId: +userId,
    };

    socket.send(JSON.stringify({
      type: 'chatMessage',
      payload: messangeData,
    }));

    setChatFormInputValue('');
  };

  const handleChatFormInputValueChange = (event) => {
    setChatFormInputValue(event.target.value);
  };

  return (

    <div className={styles.chat}>

      <div className={styles.chatTitle}>
        Онлайн-чат
      </div>

      <div className={`${styles.chatInfo} ${isUserOnline ? styles.chatInfoOnline : styles.chatInfoOffline}`}>
        {isUserOnline && (
          'Пользователь сейчаc в сети!'
        )}
        {!isUserOnline && (
          'Пользователь сейчаc не в сети!'
        )}
      </div>

      <form
        className={styles.chatForm}
        onSubmit={handleChatFormSubmit}
      >
        <input
          className={styles.chatFormInput}
          type="text"
          name="chatMessage"
          value={chatFormInputValue}
          onChange={handleChatFormInputValueChange}
          placeholder="Ваше сообщение..."
          required
        />
        <button
          className={styles.chatFormButton}
          type="submit"
        >
          <FiSend />
        </button>
      </form>

      <div className={styles.chatList}>
        {messangeList.map((el) => (
          <div
            key={`${Math.random()}`}
            className={el.userId === myId ? styles.chatListMyMessange : styles.chatListMessange}
          >
            <div
              className={styles.chatListMessangeDate}
            >
              {el.localeDate}
            </div>
            <div
              className={styles.chatListMessangeUser}
            >
              {el.userName}
              {' '}
              &#40;
              {el.userLogin}
              &#41;
              {' пишет:'}
            </div>
            <div
              className={styles.chatListMessangeText}
            >
              {el.text}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
