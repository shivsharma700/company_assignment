import "./NavBar.css"
import {PiHandWavingDuotone} from "react-icons/pi";
import {CiSearch} from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="NavBar flex flex-row  items-center " >
        <div className="text flex flex-row  justify-start items-center text-black  "> Hello Shiv <PiHandWavingDuotone className="ml-1" />, </div>
        <div className="searchBar flex flex-row justify-center items-center ">
           <CiSearch className="searchIcon bg-white rounded-tl-md rounded-bl-md h-7 font-bold " />
           <input type="text" className="SearchText bg-white h-7  rounded-tr-md  rounded-br-md border-none font-thin text-sm pl-1 " placeholder="Search" />
        </div>
    </div>
  )
}

export default NavBar