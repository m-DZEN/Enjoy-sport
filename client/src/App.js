import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setUserInfoAction, clearUserInfoAction } from './redux/reducers/userReducer';
import AuthContextProvider from './context/Auth.context';

import Navigation from './components/Navigation/Navigation';
import Statistic from './components/Statistic/Statistic';
import Cabinet from './components/Cabinet/Cabinet';
import Training from './components/Training/Training';
import Settings from './components/Settings/Settings';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AuthForm from './components/AuthForm/AuthForm';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import TrainingNutrition from './components/Training/TrainingNutrition/TrainingNutrition';
import TrainingWorkout from './components/Training/TrainingWorkout/TrainingWorkout';
import Slider from './components/Slider/Slider';

import './App.css';
import WSChat from './components/WSChat/WSChat';

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
  }, []);

  return (
    <>

      <div className="App">

        {isLoading && (
        <h3>Loading...</h3>
        )}

        {!isLoading && (
        <Routes>

          <Route path="/" element={<Navigation />}>
            <Route element={<ProtectedRoute user={user.userLogin} redirectPath="auth/login" />}>
              <Route path="/" element={<Training />} />
              <Route path="/nutrition" element={<TrainingNutrition />} />
              <Route path="/workout" element={<TrainingWorkout />} />
              <Route path="/statistic" element={<Statistic />} />
              <Route path="/cabinet" element={<Cabinet />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/wschat" element={<WSChat />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute user={!user.userLogin} redirectPath="/" />}>
            <Route
              path="auth"
              element={(
                <AuthContextProvider>
                  <AuthForm />
                  <Slider />
                </AuthContextProvider>
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
        <p className="footerinfo">информация о тренере</p>
        <p className="footerinfo">информация о разработчиках</p>
      </footer>
    </>
  );
}

export default App;
