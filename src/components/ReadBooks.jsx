import { useEffect, useState } from "react";
import { getBookFromLS } from "./Utils";
import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";


const ReadBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const allBook = useLoaderData();
    useEffect(()=>{
        const LSReadBooks = getBookFromLS();
        let bookArr = []
        for(const i of LSReadBooks){
            const book = allBook.find(b => b.bookId === parseInt(i))
            {book && bookArr.push(book)}
        }
        setReadBooks(bookArr)
    },[allBook]);
    return (
        <div>
            <div className="mt-7">
                {
                    readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;