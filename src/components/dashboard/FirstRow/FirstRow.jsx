import Card from "../../Card/Card";
import "./FirstRow.css";
import {AiOutlineDollar} from "react-icons/ai"
import { HiArrowDown } from "react-icons/hi2"
import {HiArrowSmallUp} from "react-icons/hi2"
import {MdOutlineBorderColor} from "react-icons/md"
import {FaCoins} from "react-icons/fa6"
import {CiLock} from "react-icons/ci"

const FirstRow = () => {
  return (
    <div className="FirstRow flex flex-row flex-wrap" >
        <Card icon={<AiOutlineDollar/>}
              upperText="Earning"
              middleText="198K"
              percentage="37.8%" 
              fontColor="text-green-500" 
              aeroIcon={<HiArrowSmallUp/> } 
              bgColor="bg-slate-100"
              iconColor="text-green-500"
        />
        <Card icon={<MdOutlineBorderColor/>}
              upperText="Orders"
              middleText="2.4K"
              percentage="2%" 
              fontColor="text-red-500" 
              aeroIcon={<HiArrowDown/> } 
              bgColor="bg-purple-100"
              iconColor="text-pink-500"
        />
        <Card icon={<FaCoins/>}
              upperText="Balance"
              middleText="2.4K"
              percentage="2%" 
              fontColor="text-red-500" 
              aeroIcon={<HiArrowDown/> } 
              bgColor="bg-blue-100"
              iconColor="text-violet-600"
        />
        <Card icon={<CiLock/>}
              upperText="Total Sales"
              middleText="89K"
              percentage="11%" 
              fontColor="text-green-500" 
              aeroIcon={<HiArrowSmallUp/> } 
              bgColor="bg-rose-200"
              iconColor="text-rose-500"
        />
    </div>
  )
}

export default FirstRow