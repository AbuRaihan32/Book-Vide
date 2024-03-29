import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishBookFromLS } from "./Utils";
import Page from "./Page";
import { MyContext } from "./ListBooks/ListBooks";
import NoRead from "./NoRead";

const WishPage = () => {
    const [wishBooks, setWishBooks] = useState([]);
    const allBook = useLoaderData();
    const { sortedItem } = useContext(MyContext);

    useEffect(() => {
        const LSWishBooks = getWishBookFromLS();
        let bookArr = []
        for (const i of LSWishBooks) {
            const book = allBook.find(b => b.bookId === parseInt(i))
            { book && bookArr.push(book) }
        }
        let sortedArr = [...bookArr]
        if (sortedItem === 'Rating') {
            sortedArr.sort((a, b) => b.rating - a.rating)
        }
        else if (sortedItem === 'Number of Pages') {
            sortedArr.sort((a, b) => b.totalPages - a.totalPages)
        }
        else if (sortedItem === 'Publishing Year') {
            sortedArr.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        setWishBooks(sortedArr)
    }, [allBook, sortedItem]);
    wishBooks.length < 1 && <h1>No Read Book</h1>
    return (
        <div>
            <div className="mt-7">
                {
                    wishBooks.length === 0 ? <NoRead text={'No Book In This List'}></NoRead> : wishBooks.map(book => <Page key={book.bookId} page={book}></Page>)

                }
            </div>
        </div>
    );
};

export default WishPage;