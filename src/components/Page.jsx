import { Link } from "react-router-dom";

const Page = ({page}) => {
    const { bookId, bookName, author, image, tags, category, rating, yearOfPublishing, publisher, totalPages } = page;
    return (
        <div className="p-6 border rounded-2xl mb-6">
            <article className="space-y-6 flex gap-6 text-start">
                <div className="rounded-2xl py-4 w-[30%] bg-[#F3F3F3]">
                    <img alt="" className="object-cover mx-auto h-52 " src={image} />
                </div>
                <div className="flex flex-col flex-1 w-[70%]">
                    <h3 className="text-2xl font-bold leading-snug mb-4">{bookName}</h3>
                    <p className="pb-5">By : {author}</p>

                    <div className="space-x-3 flex items-center">
                        <h1 className="text-xl font-bold">Tags:</h1>
                        <p href="#" className="text-[18px] font-bold bg-[#23BE0A0D] rounded-3xl py-2 px-5 hover:underline text-[#23BE0A]">{tags[0]}</p>
                        <p href="#" className="text-[18px] font-bold bg-[#23BE0A0D] rounded-3xl py-2 px-5 hover:underline text-[#23BE0A]">{tags[1]}</p>

                        <p className="font-bold">Year Of Publishing : {yearOfPublishing}</p>
                    </div>
                    <div className="space-x-3 mt-3 flex gap-6 items-center pb-4 border-b border-dashed w-[80%]">
                        <p className="font-bold">Publisher : {publisher}</p>
                        <p className="font-bold">Total Page : {totalPages}</p>
                    </div>

                    <div className="flex flex-wrap justify-start gap-5 font-medium mt-4">
                        <button className="btn bg-[#328EFF26] rounded-3xl text-[#328EFF]"><span className="px-4">Category : {category}</span></button>
                        <button className="btn rounded-3xl bg-[#FFAC3326] text-[#FFAC33]"><span className="px-4">Rating {rating}</span></button>
                        <Link to={`/bookDetails/${bookId}`}>
                            <button className="btn rounded-3xl bg-[#23BE0A]  text-white"><span className="px-4">View Details</span></button>
                        </Link>
                    </div>
                </div>
            </article>
        </div>

    );
};

export default Page;