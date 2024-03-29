import { Outlet } from "react-router-dom";
import NaveBar from "../NaveBar/NaveBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-[70px]">
                <NaveBar></NaveBar>
            </div>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;