import Months from "./Months/Months";
import "./overview.css";
import UpperPart from "./upperPart/UpperPart";

const Overview = () => {
  return (
    <div className="overview bg-white rounded-lg ">
        <UpperPart/>
        <Months/>
    </div>
  )
}

export default Overview