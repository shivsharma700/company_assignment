import "./customer.css";

const Customers = () => {
  return (
    <div className=" Customer basis-4/12 p-2  flex flex-col justify-between items-center border rounded-xl bg-white ">
      <div className="flex flex-start flex-col w-full p-2  ">
          <div className="font-bold">Customers</div>
          <div className="text-gray-400 customerText">Customers that buy products</div>
      </div>
      <div className="bg-gray-300  rounded-full  p-[1.2rem] mb-6  " >
        <div className="bg-rose-400 p-[1.3rem] rounded-full" >
          <div className="flex flex-col items-center justify-center bg-white rounded-full p-5  percent">
            <div className="flex font-bold text-2xl" > 65% </div>
            <div className="text-sm" >Total New</div>
            <div className="text-sm" >Customers</div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Customers