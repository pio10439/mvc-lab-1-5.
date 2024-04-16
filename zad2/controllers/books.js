exports.getBooks = (req, res) => {
    const books = []; 
    if (books.length === 0) {
        res.render('books', { books, message: 'No books have been found' });
    } else {
        res.render('books', { books });
    }
};
