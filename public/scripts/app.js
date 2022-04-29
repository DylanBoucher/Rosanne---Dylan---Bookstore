const searchInput = document.querySelector("[data-search]")


let book = document.querySelector('[data-book-title').innerHTML
let allBooks = document.querySelector('[data-books]').innerText



searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    const isVisible = allBooks.includes(value)
    console.log(book)
    console.log(isVisible) 
    
          
 })
