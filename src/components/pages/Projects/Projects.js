import React from "react";
import './Projects.css';
import AppRoutes from "../../../constants/AppRoutes";
import ProjectItem from "./ProjectItem";

function Projects () {
    return (
        <div className='project_cards'>
        <h1>My Practice Projects</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <ProjectItem
                  src='images/investment_calculator.jpg'
                  text='Investment Calculator'
                  label='Investment Calculator'
                  path={AppRoutes.INVESTCALC}
                />
                <ProjectItem
                  src='images/userApp.jpg'
                  text='User App'
                  label='Add User'
                  path={AppRoutes.USERAPP}
                />
                <ProjectItem
                  src='images/expenseApp.jpg'
                  text='Expense App'
                  label='Expenses'
                  path={AppRoutes.EXPENSEAPP}
                />
              </ul>
              <ul className='cards__items'>
                <ProjectItem
                src='images/weather.jpg'
                text='Weather App'
                label='Weather'
                path={AppRoutes.WEATHER}
                />
                <ProjectItem
                src='images/table.jpg'
                text='Employees App'
                label='Employees'
                path={AppRoutes.EMPLOYEES}
                />
              </ul>
            </div>
          </div>
        </div>
      );
    }
    

export default Projects;