import { Outlet, useNavigation} from "react-router-dom";
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
            {
                navigation.state === 'loading' ? <PuffLoader color="#36d7b7" /> : <Outlet></Outlet>
            }
            <ToastContainer></ToastContainer>
        </div>
    );

}
export default Root;