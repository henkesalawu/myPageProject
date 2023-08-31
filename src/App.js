import React, { useState, useEffect} from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import About from './components/pages/About';
import Diy from './components/pages/DIY/Diy';
import Projects from './components/pages/Projects/Projects';
import Home from './components/Home/Home';
import Hobby from './components/pages/Hobby/Hobby';
import Contact from './components/pages/Contact';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBars/NavBar';
import InvestCalc from './components/pages/Projects/InvestCalc/InvestCalc';
import UserApp from './components/pages/Projects/UserApp/UserApp';
import ExpenseApp from './components/pages/Projects/Expenses/ExpenseApp';
import MusicDance from './components/pages/MusicDance/MusicDance';
import Other from './components/pages/Hobby/Other';
import WeatherApp from './components/pages/WeatherApp/WeatherApp';
import EmployeesHome from './components/pages/Projects/Employees/EmployeesHome';
import Add from './components/pages/Projects/Employees/Add';
import AppRoutes from './constants/AppRoutes';
import Edit from './components/pages/Projects/Employees/Edit';


function App() {
  const [navmenu, setNavmenu] = useState(false);
  const [noNav, setNoNav] = useState(false);
  const location = useLocation();

useEffect(() => {
 if(location.pathname === AppRoutes.INTRO || location.pathname === AppRoutes.LOGIN) {
    setNavmenu(false);
    setNoNav(false);
 }else if(location.pathname === AppRoutes.CONTACT) {
    setNoNav(true);
  }else {
    setNavmenu(true);
    setNoNav(false)
  }
},[location.pathname]);

  return (
    <>
  {!noNav && <NavBar logInfo={navmenu} />}
    <Routes>
      <Route path={AppRoutes.ABOUT} element={<About />}/>
      <Route path={AppRoutes.DIY} element={<Diy />}/>
      <Route path={AppRoutes.PROJECTS} element={<Projects />}/>
      <Route path={AppRoutes.HOME} element={<Home />}/>
      <Route path={AppRoutes.HOBBY} element={<Hobby />}/>
      <Route path={AppRoutes.CONTACT} element={<Contact />}/>
      <Route path={AppRoutes.INVESTCALC} element={<InvestCalc />}/>
      <Route path={AppRoutes.USERAPP} element={<UserApp />}/>
      <Route path={AppRoutes.EXPENSEAPP} element={<ExpenseApp />}/>
      <Route path={AppRoutes.MUSICDANCE} element={<MusicDance />}/>
      <Route path={AppRoutes.OTHER} element={<Other />}/>
      <Route path={AppRoutes.WEATHER} element={<WeatherApp />}/>
      <Route path={AppRoutes.EMPLOYEES} element={<EmployeesHome />}/>
      <Route path={AppRoutes.ADDEMPLOYEE} element={<Add />}/>
      <Route path={AppRoutes.EDITEMPLOYEE} element={<Edit />}/>
    </Routes>
    <Footer />
    </>
  
  );
}

export default App;
