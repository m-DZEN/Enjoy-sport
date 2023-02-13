import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setUserInfoAction, clearUserInfoAction } from './redux/reducers/userReducer';

import Navigation from './components/Navigation/Navigation';
import Statistic from './components/Statistic/Statistic';
import Cabinet from './components/Cabinet/Cabinet';
import Training from './components/Training/Training';
import Settings from './components/Settings/Settings';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import TrainingNutrition from './components/Training/TrainingNutrition/TrainingNutrition';
import TrainingWorkout from './components/Training/TrainingWorkout/TrainingWorkout';
import WSChat from './components/WSChat/WSChat';
import AdminMain from './components/AdminMain/AdminMain';
import AdminNavigation from './components/AdminNavigation/AdminNavigation';
import AdminProtectedRoute from './components/AdminProtectedRoute/AdminProtectedRoute';
import AuthPage from './components/AuthPage/AuthPage';
import Recipe from './components/Recipe/Recipe';

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
  }, []);
  return (
    <>
      <div className="App">
        {isLoading && (
        <h3>Loading...</h3>
        )}
        {!isLoading && (
        <Routes>
          {/* у админа своя навигация ??? */}
          <Route path="admin" element={<AdminProtectedRoute userLogin={user.userLogin} redirectPath="/" />}>
            <Route path="" element={<AdminNavigation />}>
              <Route path="" element={<AdminMain />} />
              <Route path="cabinet" element={<Cabinet />} />
              <Route path="settings" element={<Settings />} />
              <Route path="wschat" element={<WSChat />} />
            </Route>
          </Route>

          <Route path="/" element={<Navigation />}>
            <Route element={<ProtectedRoute user={user.userLogin} redirectPath="auth" />}>
              <Route path="/" element={<Training />} />
              <Route path="/nutrition/:day" element={<TrainingNutrition />} />
              <Route path="/workout/:day" element={<TrainingWorkout />} />
              <Route path="/recipe/:id" element={<Recipe />} />
              <Route path="/statistic" element={<Statistic />} />
              <Route path="/cabinet" element={<Cabinet />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/wschat" element={<WSChat />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute user={!user.userLogin} redirectPath="/" />}>
            <Route path="auth" element={<AuthPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        )}
      </div>

      {/* <footer>
        <p className="footerinfo">информация о тренере</p>
        <p className="footerinfo">информация о разработчиках</p>
      </footer> */}
    </>
  );
}
export default App;
