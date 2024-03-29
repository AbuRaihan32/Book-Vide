import { useContext, useEffect, useState } from "react";
import { getBookFromLS } from "./Utils";
import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";
import { MyContext } from "./ListBooks/ListBooks";
import NoRead from "./NoRead";
const ReadBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const allBook = useLoaderData();

    const { sortedItem } = useContext(MyContext);

    useEffect(() => {
        const LSReadBooks = getBookFromLS();
        let bookArr = []
        for (const i of LSReadBooks) {
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
        setReadBooks(sortedArr)
    }, [allBook, sortedItem]);


    return (
        <div>
            <div className="mt-7">
                {
                    readBooks.length === 0 ? <NoRead text={'No Read Book'}></NoRead> : readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)

                }
            </div>
        </div>
    );
};

export default ReadBooks;