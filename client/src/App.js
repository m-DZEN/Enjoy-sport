import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfoAction, clearUserInfoAction } from './redux/reducers/userReducer';


import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Statistic from './components/Statistic/Statistic'
import Cabinet from './components/Cabinet/Cabinet';
import Login from './components/Login/Login'
import Training from './components/Training/Training'
import Settings from './components/Settings/Settings';
import Registration from './components/Registration/Registration';
import AuthContextProvider from './context/Auth.context';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AuthForm from './components/AuthForm/AuthForm';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import './App.css';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((store) => store.userStore);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch('http://localhost:3001', { credentials: 'include' });
        // console.log('res.status ===>', res.status);
        if (res.status === 200) {
          const data = await res.json();
          if (data.backendResult === 'SESSION-OK') {
            console.log('SESSION-OK', data.userInfo);
            dispatch(setUserInfoAction(data.userInfo));
            setIsLoading(false);
          }
          if (data.backendResult === 'NEED-LOGIN') {
            console.log('NEED-LOGIN');
            dispatch(clearUserInfoAction());
            setIsLoading(false);
          }
        } else {
          console.log(`Ошибка ${res.status} на сервере!`);
        }
      } catch (error) {
        console.log('ERROR:', error.message);
      }
    }());
  // тут был пустой массив но эслинт ругался
  }, [dispatch]);

  return (
    <>
    <div className="App">
      {isLoading && (
        <h3>Loading...</h3>
      )}
      {!isLoading && (
        <Routes>
              <Route path='/' element={<Navigation />}>
                  <Route element={<ProtectedRoute user={user.userLogin} redirectPath="auth/login" />}>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/registration' element={<Registration />}></Route>
                    <Route path='' element={<Training />} />
                    <Route path='/statistic' element={<Statistic />} />
                    <Route path='/cabinet' element={<Cabinet />} />
                    <Route path='/settings' element={<Settings />} />
                </Route>
              </Route>
                  <Route element={<ProtectedRoute user={!user.userLogin} redirectPath="/" />}>
                        <Route
                          path="auth"
                          element={(
                            <>
                              <AuthContextProvider>
                                <AuthForm />
                              </AuthContextProvider>
                            </>
                          )}
                        >
                          <Route path="login" element={<LoginForm />} />
                          <Route path="register" element={<RegisterForm />} />
                        </Route>
                  </Route>
                      <Route path="*" element={<NotFoundPage />} />
               </Routes>
      )}   
    </div>  
            <footer>
            <p>информация о тренере</p>
            <p>информация о разработчиках</p>
          </footer>
    </>
  );
}

export default App;
