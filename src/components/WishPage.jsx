import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishBookFromLS } from "./Utils";
import Page from "./Page";

const WishPage = () => {
    const [wishBooks, setWishBooks] = useState([]);
    const allBook = useLoaderData();
    useEffect(() => {
        const LSWishBooks = getWishBookFromLS();
        let bookArr = []
        for (const i of LSWishBooks) {
            const book = allBook.find(b => b.bookId === parseInt(i))
            { book && bookArr.push(book) }
        }
        setWishBooks(bookArr)
    }, [allBook]);
    return (
        <div>
            <div className="mt-7">
                {
                    wishBooks.map(book => <Page key={book.bookId} page={book}></Page>)
                }
            </div>
        </div>
    );
};

export default WishPage;