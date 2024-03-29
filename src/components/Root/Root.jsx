import { Outlet, useNavigation } from "react-router-dom";
import NaveBar from "../NaveBar/NaveBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PuffLoader } from "react-spinners";
const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-[70px]">
                <NaveBar></NaveBar>
            </div>
            <div className="w-[95%] mx-auto">
                {
                    navigation.state === 'loading' ? <div className="flex justify-center items-center min-h-[calc(100vh-400px)]"> <PuffLoader size={150} color="#36d7b7" /></div> : <Outlet></Outlet>
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );

}
export default Root;