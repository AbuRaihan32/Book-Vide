import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, tags, category, rating } = book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="p-6 border rounded-2xl">
                <article className="space-y-6 flex flex-col text-start">
                    <div className="rounded-2xl py-4 w-full bg-[#F3F3F3]">
                        <img alt="" className="object-cover mx-auto h-52 " src={image} />
                    </div>
                    <div className="flex flex-col flex-1 space-y-4">
                        <div className="space-x-3 flex">
                            <p href="#" className="text-[18px] font-bold bg-[#23BE0A0D] rounded-3xl py-2 px-5 hover:underline text-[#23BE0A]">{tags[0]}</p>
                            <p href="#" className="text-[18px] font-bold bg-[#23BE0A0D] rounded-3xl py-2 px-5 hover:underline text-[#23BE0A]">{tags[1]}</p>
                        </div>
                        <h3 className="flex-1 text-2xl font-bold leading-snug">{bookName}</h3>
                        <p className="pb-5 border-b border-dashed">By : {author}</p>
                        <div className="flex flex-wrap justify-between font-medium">
                            <span>{category}</span>
                            <div className="flex items-center gap-2">
                                <span>{rating}</span> <FaRegStar></FaRegStar>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </Link>
    );
};

export default Book;