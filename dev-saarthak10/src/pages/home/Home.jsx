import React from 'react'
import Header from '../../components/header/Header';
import Intro from '../introduction/Intro';

const Home = () => {

  
  const pages = [
    { id: 1, title: "About", color: "#000" },
    { id: 2, title: "Work", color: "#fff" },
    { id: 3, title: "Contact", color: "#fff" },
   
  ];  
  return (
    <div class="ml-20 mr-20">
       
        <Header pages={pages}/>
        <Intro />
    </div>
  )
}

export default Home