import { LayoutDashboard, LayoutDashboardIcon, LucideLayoutDashboard, ShoppingBasket, ShoppingCart } from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems =[
  {
    id: 'dashboard',
    label :'Dashboard',
    path: '/admin/dashboard',
    icon: <LucideLayoutDashboard />  
  },
  {
    id: 'products',
    label :'Products',
    path: '/admin/products',
    icon : <ShoppingBasket />
  },
  {
    id: 'orders',
    label :'Orders',
    path: '/admin/orders',
    icon : <ShoppingCart />
  },
]

function MenuItems(){
  const navigate = useNavigate()
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <div key={menuItem.id} onClick={()=>navigate(menuItem.path)} className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground text-xl cursor-pointer">
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

function AdminSidebar ({open,setOpen}) {

  const navigate = useNavigate()

  return(
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side='left' className='w-64'>
          <div className="flex flex-col h-full">
            <SheetHeader className='border-b'>
              <SheetTitle className='flex gap-2'><LayoutDashboard size={30}/><span>Admin Pannel</span></SheetTitle>
            </SheetHeader>
            <MenuItems/>
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div onClick={()=>navigate('/admin/dashboard')} className="flex cursor-pointer items-center gap-2">
        <LayoutDashboard size={30}/>
          <h6 className="text-xl font-extrabold">Admin Pannel</h6>
        </div>
        <MenuItems></MenuItems>
      </aside>
    </Fragment>
  )
}

export default AdminSidebar;