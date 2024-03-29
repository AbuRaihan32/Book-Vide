import { useLoaderData, useParams } from "react-router-dom";
import { saveBookInLS, saveWishBookInLS } from "./Utils";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const singleBook = books.find(book => book.bookId === idInt);
    const { bookName, author, image, tags, category, rating, review, totalPages, publisher, yearOfPublishing, } = singleBook;

    const readBtnHandler = () => {
        saveBookInLS(id)
     }

    const wishBtnHandler = () =>{
        saveWishBookInLS(id)
    }


    return (
        <div className="w-[95%] mx-auto md:flex gap-8">
            <div className="w-full bg-[#1313130D] rounded-2xl">
                <img className="w-[80%] h-full py-10 mx-auto" src={image} alt="" />
            </div>
            <div className="w-full">
                <div className="max-w-2xl px-6 py-16 mx-auto">
                    <article className="">
                        <div className="">
                            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{bookName}</h1>
                        </div>
                        <div className="mt-2 ">
                            <p className="pb-4 border-b border-dashed">By : {author}</p>
                            <p className="p-4 border-b border-dashed">By : {category}</p>
                        </div>
                        <div className="mb-6 mt-5">
                            <p> <span className="font-bold">review:</span> {review} </p>
                        </div>
                    </article>
                    <div className=" flex-grow">
                        <div className="space-x-3 flex pb-5 border-b mb-5">
                            <h1 className="text-2xl font-medium">Tags:</h1>
                            <div className="space-x-3 flex">
                                <p href="#" className="text-[18px] font-bold bg-[#23BE0A0D] rounded-3xl py-2 px-5 hover:underline text-[#23BE0A]">#{tags[0]}</p>
                                <p href="#" className="text-[18px] font-bold bg-[#23BE0A0D] rounded-3xl py-2 px-5 hover:underline text-[#23BE0A]">#{tags[1]}</p>
                            </div>
                        </div>
                        <div className="space-y-2 md:w-[50%]">
                            <ul className="ml-4 space-y-1">
                                <li>
                                    <p className="flex justify-between"><span>Number Of Page:</span> <span className="font-bold">{totalPages}</span></p>
                                </li>
                                <li>
                                    <p className="flex justify-between"><span>Publisher:</span> <span className="font-bold">{publisher}</span></p>
                                </li>
                                <li>
                                    <p className="flex justify-between"><span>Year Of Publishing:</span> <span className="font-bold">{yearOfPublishing}</span></p>
                                </li>
                                <li>
                                    <p className="flex justify-between"><span>Rating: </span><span className="font-bold">{rating}</span></p>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="mt-5 space-x-9">
                        <button onClick={readBtnHandler} className="btn bg-white px-3"><span className="px-5">Read</span></button>
                        <button onClick={wishBtnHandler} className="btn bg-[#50B1C9] text-white hover:text-black"><span className="px-5">Wish List</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;