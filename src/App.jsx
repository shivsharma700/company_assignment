import './App.css'
import Dashboard from './components/dashboard/Dashboard.jsx';
import SideBar from "./components/sidebar/SideBar.jsx";

function App() {

  return (
    <div className='app flex flex-row ' >
       <SideBar/>
       <Dashboard/>
    </div>
  )
}

export default App
