class UI {
    constructor() {
        this.title = document.querySelector('#title')
        this.author = document.querySelector('#author')
        this.isbn = document.querySelector('#isbn')
        this.bookList = document.querySelector('#book-list')
    }

    addBook(book) {
        const tr = document.createElement('tr')
        tr.setAttribute('class', 'book-row')
        tr.innerHTML = `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#">X</a></td>`
        this.bookList.appendChild(tr)
    }

    getBook(click) {
        let isbn = click.parentElement.previousElementSibling.textContent
        let author = click.parentElement.previousElementSibling.previousElementSibling.textContent
        let title = click.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        const book = new Book(title, author, isbn)
        return book
    }

    delBook(click) {
        if (confirm('Are you sure you want to delete this entry?')) {
            click.parentElement.parentElement.remove()
            return true
        } else {
            return false
        }
    }
}