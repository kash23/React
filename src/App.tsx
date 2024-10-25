import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from "./Skills";
import Projects from "./Projects";
import Bio from "./Bio";
import Contact from "./Contact";
import Menu from "./Menu";
import './App.css';

const skills = [
  { name: 'C#', category: 'Backend' },
  { name: 'HTML & CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'jQuery', category: 'Frontend' },
  { name: 'Javascript', category: 'Frontend' },
  { name: '.NET MVC', category: 'Frontend Framework' },
  { name: 'MySQL - WorkBench', category: 'Database' },
  { name: '.NET Maui', category: 'Cross-platform Framework' },
  { name: 'React', category: 'Frontend' },
  { name: '.NET Entity Framework', category: 'Mapping framework' }
];

function App(){
  return (
    <>
    <Menu />
    <div className="" >
      <div id="home" className="section"><Bio/></div>
      <div id="about" className="section"><Projects/></div>
      <div id="services" className="section"><Skills items={skills} heading="Skills"/></div>
      <div id="contact" className="section"><Contact/></div>
    </div>

    </>
  );
};

export default App;