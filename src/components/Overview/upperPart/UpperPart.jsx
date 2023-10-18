import "./upperpart.css";
import {IoIosArrowDown} from "react-icons/io";

const UpperPart = () => {
  return (
    <div className="upperPart flex flex-row " >
        <div className="left flex flex-col items-start ">
            <div className="title text-black ">Overview</div>
            <div className="leftDown text-slate-400 ">Monthely Eearning</div>
        </div>
        <div className="right flex justify-end items-center text-slate-400 ">
            Quarterly <IoIosArrowDown/>
        </div>
    </div>
  )
}

export default UpperPart