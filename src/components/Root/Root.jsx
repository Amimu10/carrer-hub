import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className=" max-w-6xl mx-auto lg:px-8 px-6"> 
            <Header></Header>
            <Outlet></Outlet> 
            <Footer></Footer>
        </div>
    );
};

export default Root; 