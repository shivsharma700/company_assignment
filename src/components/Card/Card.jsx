import "./card.css";

const Card = ({icon, upperText, middleText, percentage, fontColor, aeroIcon, bgColor, iconColor }) => {
  return (
    <div className="card flex flex-row justify-center items-center bg-white " >
        <div className={`iconOutSide flex justify-center items-center ${iconColor} ${bgColor} `}>
            {icon}
        </div>
        <div className="rightSide ml-3 ">
            <div className="upperText text-slate-300  ">{upperText}</div>
            <div className="middleText text-black ">${middleText}</div>
            <div className={`downText text-slate-500  flex flex-row justify-center items-center`}>
                <div className={`arrowIcon ${fontColor} flex flex-row justify-center items-center`}>{aeroIcon}{percentage}</div>
                 this month
            </div>
        </div>
    </div>
  )
}

export default Card