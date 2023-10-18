import "./month.css";

const Month = ({height, bgColor, Month}) => {
  return (
    <div className="month flex flex-col items-center justify-end  " >
        <div className={`color ${bgColor} ${height} rounded-xl`}></div>
        <div className="textMonth text-slate-500 text-center ">{Month}</div>
    </div>
  )
}

export default Month