// import '../css/custom.css'

function FooterLine({ title }) {
  return (
    <div className="flex items-center justify-between w-full  bg-white my-4 ">
      <div className="flex items-center abstract ">
        <div className=" w-[5rem] h-[4rem] rounded-2xl text-bold text-2xl flex items-center justify-center bg-white "> A </div>
        <div className="px-4">
          <div className="text-xl font-semibold"> {title} </div>
          <div className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white px-14  w-[42%] product ">
        <div>32 in Stack</div>
        <div>$ 45.99</div>
        <div>20</div>
      </div>
    </div>
  );
}
export default FooterLine;