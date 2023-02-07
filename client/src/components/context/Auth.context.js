import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserInfoAction } from '../redux/reducers/userReducer';

export const AuthContext = React.createContext({});

const initialAuthFormState = { login: '', password: '' };

export default function AuthContextProvider({ children }) {
  const [authFormInput, setAuthFormInput] = useState(initialAuthFormState);
  const [errorInfo, setErrorInfo] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuthFormInputChange = (event) => {
    setAuthFormInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleAuthFormSubmit = async (event, authAction = 'login') => {
    event.preventDefault();
    const login = authFormInput.login.trim();
    const password = authFormInput.password.trim();
    if (login && password) {
      console.log('===>', { login, password });
      try {
        const res = await fetch(`http://localhost:3042/${authAction}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ login, password }),
          credentials: 'include',
        });
        console.log('res.status ===>', res.status);
        if (res.status === 200) {
          const data = await res.json();
          switch (data.backendResult) {
            case 'REGISTER-OK':
              console.log(data.backendResult, data.userInfo);
              dispatch(setUserInfoAction(data.userInfo));
              setAuthFormInput(initialAuthFormState);
              setErrorInfo(null);
              navigate('/');
              break;
            case 'NEED-NEW-LOGIN':
              console.log(data.backendResult);
              setErrorInfo(
                <p>
                  Пользователь с логином
                  {' '}
                  <b>{login}</b>
                  {' '}
                  уже существует!
                </p>,
              );
              break;
            case 'LOGIN-OK':
              console.log(data.backendResult, data.userInfo);
              dispatch(setUserInfoAction(data.userInfo));
              setAuthFormInput(initialAuthFormState);
              setErrorInfo(null);
              navigate('/');
              break;
            case 'BAD-LOGIN':
              console.log(data.backendResult);
              setErrorInfo(
                <p>
                  Пользователь с логином
                  {' '}
                  <b>{login}</b>
                  {' '}
                  не найден!
                </p>,
              );
              break;
            case 'BAD-PASSWORD':
              console.log(data.backendResult);
              setErrorInfo(
                <p>Введён неверный пароль!</p>,
              );
              break;
            default:
              throw new Error();
          }
        } else {
          console.log('!!! ОШИБКА НА СЕРВЕРЕ !!!');
          setErrorInfo(
            <p>
              Ошибка
              {' '}
              <b>{res.status}</b>
              {' '}
              на сервере!
            </p>,
          );
        }
      } catch (error) {
        console.log('ERROR:', error.message);
        setErrorInfo(
          <p>
            <b>ERROR:</b>
            {' '}
            {error.message}
          </p>,
        );
      }
    } else {
      setAuthFormInput((prev) => ({ ...prev, login, password }));
      console.log('!!! BAD AUTH DATA !!!');
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{
      authFormInput, handleAuthFormInputChange, errorInfo, handleAuthFormSubmit,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}
