import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Statistic from './components/Statistic/Statistic'
import Cabinet from './components/Cabinet/Cabinet';
import Login from './components/Login/Login'
import Training from './components/Training/Training'
import Settings from './components/Settings/Settings';
import Registration from './components/Registration/Registration';
import TrainingNutrition from './components/Training/TrainingNutrition/TrainingNutrition';
import TrainingWorkout from './components/Training/TrainingWorkout/TrainingWorkout';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/' element={<Navigation />}>
            <Route path='' element={<Training />}/>

            <Route path='/nutrition'>
            <Route index element={<TrainingNutrition/>}/>
            </Route>

            <Route path='/workout'>
            <Route index element={<TrainingWorkout/>}/>
            </Route>


            <Route path='/statistic' element={<Statistic />}/>
            <Route path='/cabinet' element={<Cabinet />}/>
            <Route path='/settings' element={<Settings />}/>
          </Route>
        </Routes>
    </div>  
  );
}

export default App;
