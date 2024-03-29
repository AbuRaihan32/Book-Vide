import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse my-6 md:my-20 md:px-36">
                <div className="w-[340px] h-[395px]">
                    <img src="https://i.ibb.co/TBS30T0/pngwing-1-1.png" className="w-full h-full" />
                </div>
                <div className="">
                    <h1 className=" mb-6 text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link to={'/books'}>
                        <button className="btn text-xl font-bold bg-[#23BE0A] text-white hover:text-black">View The List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;