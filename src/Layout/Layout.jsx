
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Layout = () => {
  return (
    <div>
<Navbar/>
<main className="w-[100%]"><Outlet/> </main>
<Footer/>



    </div>
  )
}

export default Layout;