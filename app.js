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
    this.readText = "No"; 
    if (this.read){
        this.readText = "Si"
    };
   

    

    this.info = ()=>{
        return (this.title + " by " + this.author + ", " + this.pages + " pages," + this.readText )
    };
  }







let isValidBook =(book)=>{
    if(book.title == `` || book.autor == `` || book.pages == 0){
        
    }
    else{
        myLibrary.push(book);
        fillGrid();

        tituloInput.value = '';
        autorInput.value = '';
        paginasInput.value = '';
        leidoInput.checked = '';
    }

}

let addBookToLibrary = (e)=> {
    console.log(e)

    e.preventDefault();






   

   let title= tituloInput.value;
   let autor= autorInput.value;
   let pages= Number(paginasInput.value);
   let read= leidoInput.checked;





    if(title == `` || autorInput == `` || paginasInput == 0){

    }

   let book = new Book(title, autor, pages, read);

    isValidBook(book);


   

   
  
  
}





// ELEMENTOS  HTML


const cardsContainer = document.querySelector("#cards-container")
const msg = document.querySelector("#msg")
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");
const btnEnviarDatos = document.querySelector("#btn-enviar-datos");
const newBookForm = document.querySelector("#newBookForm");
const libraryTableTbody = document.querySelector("#tbody")

let tituloInput = document.querySelector("#titulo");
let autorInput = document.querySelector("#autor");
let paginasInput = document.querySelector("#paginas");
let leidoInput = document.querySelector("#leido");






newBookForm.addEventListener("submit", addBookToLibrary);





const fillGrid = ()=>{

    libraryTableTbody.innerHTML='';

    
    for ( let i = 0; i< myLibrary.length; i++){
             
              
        let trEl = document.createElement("tr");

        let tdNombre = document.createElement("td");
        let tdAutor = document.createElement("td");
        let tdPaginas = document.createElement("td");
        let tdLeido = document.createElement("td");
        let tdBtnBorrar = document.createElement("td");

        tdNombre.innerHTML = `${myLibrary[i].title}`;
        tdAutor.innerHTML = `${myLibrary[i].author}`;
        tdPaginas.innerHTML = `${myLibrary[i].pages}`;
        tdLeido.innerHTML = `${myLibrary[i].readText}`;


        tdBtnBorrar.classList.add("tdBtnBorrar");
        tdBtnBorrar.setAttribute('id', 'BtnBorrar');
        tdBtnBorrar.innerHTML = `<i class="fa-solid fa-trash"></i> `


        trEl.appendChild(tdNombre);
        trEl.appendChild(tdAutor);
        trEl.appendChild(tdPaginas);
        trEl.appendChild(tdLeido);
        trEl.appendChild(tdBtnBorrar);
        libraryTableTbody.appendChild(trEl)
        
        
        tdBtnBorrar.addEventListener("click", (e)=>{
            
            console.log(e)
            
            
          
            trEl.remove();
            
            myLibrary.splice(i, 1);
            console.log(myLibrary);

            // ELIMINAR DE LA LOGICA NO FUNCIONAAAA


            
        })

    


        
              

        
    }
    
    
        
    

    
}

fillGrid();





// let btnsBorrar = document.querySelectorAll("#BtnBorrar");

    
// for(let i= 0; i < btnsBorrar.length; i++){
    
    
//         btnsBorrar[i].addEventListener("click", (e)=>{
//             console.log(e)
//             myLibrary.splice(i, 1);
//             console.log(myLibrary);
//             fillGrid();
            
//         });
    
//     }    



