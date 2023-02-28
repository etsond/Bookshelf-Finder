
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector("h2").innerText = localStorage.getItem('books')
function getFetch(){
  const choice = Number(document.querySelector('input').value)
  // console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data.title)

        // if there is nothing in the storage
        if(!localStorage.getItem('books')){
          // set the storage as the book.title(entered by user)
          localStorage.setItem("books", data.title)
        }else{
          // proceed as usual
          let books = localStorage.getItem("books") + ", " + data.title
          localStorage.setItem("books", books)
          
        }
                  document.querySelector("h2").innerText = localStorage.getItem('books')

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

