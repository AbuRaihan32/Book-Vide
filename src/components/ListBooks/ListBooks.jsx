import { createContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
export const MyContext = createContext('')
const ListBooks = () => {
    const [sortedItem, setSortedItem] = useState('');

    const sortBtnHandler = (e) => {
        setSortedItem(e.target.innerText)
    }

    const clearBtnHandler = () =>{
        localStorage.clear();
    }


    return (
        <div className="mt-5">
            <div className="py-8 w-full bg-[#1313130D] text-center rounded-2xl">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            <div className="flex justify-center items-center mt-8 mb-12">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By  &nbsp;  <span className="text-3xl rotate-90 mt-1">&#8250;</span></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={sortBtnHandler} className="btn">Rating</li>
                        <li onClick={sortBtnHandler} className="btn">Number of Pages</li>
                        <li onClick={sortBtnHandler} className="btn">Publishing Year</li>
                    </ul>
                </div>
            </div>



            {/* book container */}
            <div>
                <div className="flex">
                    <div className="flex">
                        <NavLink to={'read'} className={({ isActive }) => isActive ? 'px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-400' : 'px-5 py-3 space-x-2 border-b-[3px]'} >
                            <span>Read Books</span>
                        </NavLink>
                        <NavLink to={'wishPage'} className={({ isActive }) => isActive ? 'px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-400' : 'px-5 py-3 space-x-2 border-b-[3px]'}>
                            <span>Wishlist Books</span>
                        </NavLink>
                    </div>
                    <div className=" border-b-[3px] flex-grow text-end">
                        <button onClick={clearBtnHandler} className="btn">Click for Clear</button>
                    </div>
                </div>
                <MyContext.Provider value={{ sortedItem }}>
                    <Outlet></Outlet>
                </MyContext.Provider>
            </div>

        </div>
    );
};

export default ListBooks;