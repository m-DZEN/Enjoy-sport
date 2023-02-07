import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
// import Statistic from './components/Statistic/Statistic'
// import MainPage from './components/MainPage/MainPage'


function App() {
  return (
    <div className="App">
      {/* <button>push me</button> */}
       <Routes>
          <Route path='/' element={<Navigation />}>
            {/* <Route path='' element={<MainPage />}/>
            <Route path='/statistic' element={<Statistic />}/> */}
          </Route>
        </Routes>
    </div>  
  );
}

export default App;
