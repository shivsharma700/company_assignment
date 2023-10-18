import "./sidebar.css";
import { TbSettings2 } from 'react-icons/tb';
import {VscKey} from 'react-icons/vsc'
import {IoIosArrowForward,IoIosArrowDown} from 'react-icons/io'
import {RiBox3Line, RiAccountBoxLine} from 'react-icons/ri'
import {TbReportMoney} from 'react-icons/tb'
import {IoTicketOutline} from 'react-icons/io5'
import {MdOutlineLiveHelp} from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className="sidebar sticky top-0 flex flex-col items-center   bg-indigo-950 " >
       <div className="sideBarTitle mt-2 flex flex-row gap-1 cursor-pointer justify-start items-center text-slate-50 hover:bg-indigo-900 ">
           <TbSettings2 className="sideBarTitleIcon" />
           <span className="sideBarTitleText" >Dashboard</span>
       </div>

       <div className="buttons mt-4 text-slate-300 ">
          <div className="sideBarButton mb-1 flex flex-row cursor-pointer justify-start items-center hover:text-white hover:bg-indigo-900 ">
              <div className="flex flex-row gap-2 w-4/5 items-center" >
                 <VscKey className="sideBarButtonIcon" />
                 <span className="sideBarButtonText" >Dashboard</span>
              </div>
              <IoIosArrowForward className="rightArrow" />
          </div>
          <div className="sideBarButton mb-1 flex flex-row cursor-pointer justify-start items-center hover:text-white hover:bg-indigo-900 ">
              <div className="flex flex-row gap-2 w-4/5 items-center" >
                 <RiBox3Line className="sideBarButtonIcon" />
                 <span className="sideBarButtonText" >Product</span>
              </div>
              <IoIosArrowForward className="rightArrow" />
          </div>
          <div className="sideBarButton mb-1 flex flex-row cursor-pointer justify-start items-center hover:text-white hover:bg-indigo-900 ">
              <div className="flex flex-row gap-2 w-4/5 items-center" >
                 <RiAccountBoxLine className="sideBarButtonIcon" />
                 <span className="sideBarButtonText" >Customer</span>
              </div>
              <IoIosArrowForward className="rightArrow" />
          </div>
          <div className="sideBarButton mb-1 flex flex-row cursor-pointer justify-start items-center hover:text-white hover:bg-indigo-900 ">
              <div className="flex flex-row gap-2 w-4/5 items-center" >
                 <TbReportMoney className="sideBarButtonIcon" />
                 <span className="sideBarButtonText" >Income</span>
              </div>
              <IoIosArrowForward className="rightArrow" />
          </div>
          <div className="sideBarButton mb-1 flex flex-row cursor-pointer justify-start items-center hover:text-white hover:bg-indigo-900 ">
              <div className="flex flex-row gap-2 w-4/5 items-center" >
                 <IoTicketOutline className="sideBarButtonIcon" />
                 <span className="sideBarButtonText" >Promote</span>
              </div>
              <IoIosArrowForward className="rightArrow" />
          </div>
          <div className="sideBarButton mb-1 flex flex-row cursor-pointer justify-start items-center hover:text-white hover:bg-indigo-900 ">
              <div className="flex flex-row gap-2 w-4/5 items-center" >
                 <MdOutlineLiveHelp className="sideBarButtonIcon" />
                 <span className="sideBarButtonText" >Help</span>
              </div>
              <IoIosArrowForward className="rightArrow" />
          </div>
       </div>

       <div className="projectManager cursor-pointer flex flex-row  items-center hover:bg-indigo-700  text-white">
          <div className="managerLeftSide flex flex-row justify-center items-center" >
            <div className="image">
              <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="text">
                <div className="name text-slate-100 ">Shiv Sharma</div>
                <div className="manager text-slate-400 ">Project Manager</div>
            </div>
          </div>
          <IoIosArrowDown className="downArrow text-slate-400 " />
       </div>
    </div>
  )
}

export default Sidebar