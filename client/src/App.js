import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUserInfoThunk } from './redux/asyncActions/fetchUserInfoThunk';

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
import AdminTraining from './components/AdminTraining/AdminTraining';
import AdminTrainingWorkout from './components/AdminTraining/TrainingWorkout/AdminTrainingWorkout';
import AdminWSChat from './components/AdminWSChat/AdminWSChat';
import Loading from './components/Loading/Loading';
import MapYandex from './components/MapYandex/MapYandex';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userStore);

  useEffect(() => {
    dispatch(fetchUserInfoThunk());
  }, []);

  return (
    <>
      <div className="App">

        {user.isUserInfoLoading && <Loading />}

        {!user.isUserInfoLoading && (
        <Routes>
          <Route path="admin" element={<AdminNavigation />}>
            <Route element={<AdminProtectedRoute userLogin={user.userLogin} redirectPath="/" />}>
              <Route path="" element={<AdminMain />} />
              <Route path="map" element={<MapYandex />} />
              <Route path="settings" element={<Settings />} />
              <Route path="wschat/:userId" element={<AdminWSChat />} />
              <Route path="training/:id" element={<AdminTraining />} />
              <Route path="nutrition/:day" element={<AdminTraining />} />
              <Route path="workout/:id/:day" element={<AdminTrainingWorkout />} />
            </Route>
          </Route>

          <Route path="/" element={<Navigation />}>
            <Route element={<ProtectedRoute user={user.userLogin} redirectPath="auth" />}>
              <Route path="/" element={<Training />} />
              <Route path="/map" element={<MapYandex />} />
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
