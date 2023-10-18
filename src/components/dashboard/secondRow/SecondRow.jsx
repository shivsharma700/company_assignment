import "./secondRow.css";
import Overview from "../../Overview/Overview"
import Customers from "../../customers/customers";

const SecondRow = () => {
  return (
    <div className="secondRow flex flex-row flex-wrap gap-2 " >
       <Overview/> 
       <Customers/>
    </div>
  )
}

export default SecondRow