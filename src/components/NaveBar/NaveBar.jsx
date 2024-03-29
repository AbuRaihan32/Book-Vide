import { NavLink } from "react-router-dom";

const NaveBar = () => {
    return (
        <div className="">
            <div className="navbar bg-base-100 bg-opacity-95 flex items-center justify-center fixed max-w-7xl z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <nav tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border p-[4px] pb-1 border-[#23BE0A] rounded-md' : ''} to={'/'}> Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border p-[4px] pb-1 border-[#23BE0A] rounded-md' : ''} to={'/books/read'}> Listed Books</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border p-[4px] pb-1 border-[#23BE0A] rounded-md' : ''} to={'/page'}> Pages to Read</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border p-[4px] pb-1 border-[#23BE0A] rounded-md' : ''} to={'/feedBack'}> FeedBacks </NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border p-[4px] pb-1 border-[#23BE0A] rounded-md' : ''} to={'/about'}> About Us </NavLink>
                        </nav>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <nav className="menu menu-horizontal px-1 space-x-4 text-xl font-semibold">
                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border p-[4px] pb-1 border-[#23BE0A] rounded-md' : ''} to={'/'}> Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border p-[4px] pb-1 border-[#23BE0A] rounded-md' : ''} to={'/books/read'}> Listed Books</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border p-[4px] pb-1 border-[#23BE0A] rounded-md' : ''} to={'/page'}> Pages to Read</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border p-[4px] pb-1 border-[#23BE0A] rounded-md' : ''} to={'/feedBack'}> FeedBacks </NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border p-[4px] pb-1 border-[#23BE0A] rounded-md' : ''} to={'/about'}> About Us </NavLink>
                    </nav>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn text-white bg-[#23BE0A] hover:text-black">Sign In</a>
                    <a className="btn text-white bg-[#59C6D2] hover:text-black">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NaveBar;