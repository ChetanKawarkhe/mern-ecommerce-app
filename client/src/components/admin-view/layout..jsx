import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";
import { useState } from "react";

function AdminLayout() {

  const [openSidebar, setOpenSidebar] = useState(false)
  return(
    <div className="flex min-h-screen w-full bg-red-400">
      {/* //! admin sidebar */}
      <AdminSidebar open={openSidebar} setOpen={setOpenSidebar}/> 
      <div className="flex flex-1 flex-col bg-yellow-400">
        {/* //! admin header */}
        <AdminHeader setOpen={setOpenSidebar}/>
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6 w-full">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout;