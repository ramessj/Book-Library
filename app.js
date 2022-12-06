let myLibrary = [];







const book1 = new Book("Harry Potter", "J. K. Rowling", 1404, true);

const book2 = new Book("Harry Potter 2", "J. K. Rowling", 1124, true);

const book3 = new Book("Harry Potter 3", "J. K. Rowling", 2022, false);

myLibrary.push(book1, book2, book3);







function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.readText = " not read yet";  
    if (read){
        this.readText = " already read"
    };
    this.info = ()=>{
        return (this.title + " by " + this.author + ", " + this.pages + " pages," + this.readText )
    };
  }



let addBookToLibrary = (e)=> {
    console.log(e)

   let title= e.path[1][0].value;
    let autor = e.path[1][1].value
    let pages = e.path[1][2].value
    let read = e.path[1][3].value




   let book = new Book(title, autor, pages, read);
   myLibrary.push(book);
  
}

console.log(myLibrary)




// ELEMENTOS  HTML


const cardsContainer = document.querySelector("#cards-container")
const msg = document.querySelector("#msg")
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");
const btnEnviarDatos = document.querySelector("#btn-enviar-datos");

btnAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
})


btnEnviarDatos.addEventListener("click", addBookToLibrary);





const fillGrid = ()=>{




    for ( let i = 0; i<= myLibrary.length; i++){
       let card = document.createElement('div');
       card.classList.add("card");
       
       let title = document.createElement('div');
       title.classList.add("title");
       card.appendChild(title);


       let autor = document.createElement('div');
       autor.classList.add("autor");
       card.appendChild(autor);
       
       let pages = document.createElement('div');
       pages.classList.add("pages");
       card.appendChild(pages);
       
       let read = document.createElement('div');
       read.classList.add("read");
       card.appendChild(read);

       

        
        title.innerHtml = myLibrary[i].title;
        autor.innerHtml = myLibrary[i].autor;
        pages.innerHtml = myLibrary[i].pages;
        read.innerHTML = myLibrary[i].read;


        cardsContainer.appendChild(card);

        console.log()

        console.log(myLibrary)
    }



    
}

fillGrid();