import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import classNames from "./default.module.css"

const DefaultLayout = () => {
    return ( <>
        <Header />
        <Sidebar />
        <div className={classNames.outletWrapper}>
            <Outlet />
            <div className={classNames.logoWrapper}>
                <img src="/images/logo.png" alt="enagramm logo" />
            </div>
        </div>
    </> );
}
 
export default DefaultLayout;