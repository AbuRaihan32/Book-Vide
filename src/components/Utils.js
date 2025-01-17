import { toast } from "react-toastify";
// wish books
const getWishBookFromLS = () => {
    const wishBook = localStorage.getItem('wish')
    if (wishBook) {
        return JSON.parse(wishBook)
    }
    return []
};
const saveWishBookInLS = (id) => {
    const currentBook = getWishBookFromLS();
    const readBooks = getBookFromLS();
    const isRead = readBooks.find(rb => rb === id)
    const isExist = currentBook.find(b => b === id);
    if (!isExist && !isRead) {
        currentBook.push(id);
        localStorage.setItem('wish', JSON.stringify(currentBook))
        toast.success('You have successfully added to wishlist')
    }else if(isRead){
        toast.error("You cannot add to wishlist after reading")
    }
    else {
        toast.error('You have already added it to wishlist')
    }
}

    const removeWishAfterRead = (id) =>{
        const allWishBooks = getWishBookFromLS();
        const wBookAfterFilter = allWishBooks && allWishBooks.filter(wb => wb !== id);
        localStorage.setItem('wish', JSON.stringify(wBookAfterFilter));
    }

    // read books 
    const getBookFromLS = () => {
        const book = localStorage.getItem('read')
        if (book) {
            return JSON.parse(book)
        }
        return []
    };
    const saveBookInLS = (id) => {
        const currentBook = getBookFromLS();
        const isExist = currentBook.find(b => b === id);
        if (!isExist) {
            currentBook.push(id);
            localStorage.setItem('read', JSON.stringify(currentBook))
            toast.success('You have successfully read')
            removeWishAfterRead(id)
        }
        else {
            toast.error('You have already read it')
        }
    }
    export { getBookFromLS, saveBookInLS , getWishBookFromLS, saveWishBookInLS}