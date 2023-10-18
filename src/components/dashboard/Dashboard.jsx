import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import FirstRow from './FirstRow/FirstRow';
import './dashboard.css';
import SecondRow from './secondRow/SecondRow';

const Dashboard = () => {
  {console.log(window.screen.width)}
  const width = window.screen.width
  useEffect(()=>{

  },[width])
  return (
    <div className="dashboard  flex flex-col  bg-slate-100  " >
      <NavBar/>
      <FirstRow/>
      <SecondRow/>
      {
        width >= 1112 && <Footer/>
      } 
    </div>
  )
}

export default Dashboard