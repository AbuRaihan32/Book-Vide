import { useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Books from "../Books";

const Home = () => {
    const booksData = useLoaderData();
    return (
        <div className="mt-6">
            <Banner></Banner>
            <Books books={booksData}></Books>
        </div>
    );
};

export default Home;