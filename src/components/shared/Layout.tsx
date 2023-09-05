import { Outlet } from "react-router-dom";
import Navbar  from "./Navbar";
import { SideBar } from "../../pages/dashboard/components";
import { useState } from "react";
import AnnouncementBanner from "../AnnouncementBanner";



function Layout() {

  const [open, setOpen] = useState(false)

  return (
    <>
     <SideBar open={open} setOpen={setOpen} />
     <Navbar open={open} setOpen={()=> setOpen(!open)}/>
     <AnnouncementBanner/>
     <div className=" bg-slate-800 min-h-screen">
     <div className="max-w-7xl mx-auto container ">
      <Outlet/>
     </div>
     </div>
    </>
  );
}

export default Layout;
