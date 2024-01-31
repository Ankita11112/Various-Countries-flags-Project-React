import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Header from './components/header/Header';
import CountryDetails from './pages/CountryDetails/CountryDetails';
import React, {useState, useContext, createContext} from 'react';

export const modeContext = createContext();
function App() {
  const[darkMode, setDarkmode] = useState(false);
  return (
    <BrowserRouter>
    <modeContext.Provider value={{darkMode, setDarkmode}}>
    <div className="App">
     <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/:name' element={<CountryDetails/>} />
    </Routes>
    </div>
    </modeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
