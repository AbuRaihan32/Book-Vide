import Book from "./Book";
import PropTypes from 'prop-types'

const Books = ({ books }) => {
    return (
        <div className="mt-16 text-center">
            <h1 className="text-4xl font-bold">Books</h1>
            <section className="py-6 sm:py-12 dark:bg-gray-100">
                <div className="container mx-auto space-y-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            books.length > 0 && books?.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </div>
            </section >
        </div>

    );
};
Books.propTypes = {
    books: PropTypes.array.isRequired
}

export default Books;