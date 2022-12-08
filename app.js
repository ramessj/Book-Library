// ELEMENTOS  HTML

const cardsContainer = document.querySelector("#cards-container");
const msg = document.querySelector("#msg");
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");
const btnEnviarDatos = document.querySelector("#btn-enviar-datos");
const newBookForm = document.querySelector("#newBookForm");
const libraryTableTbody = document.querySelector("#tbody");

let tituloInput = document.querySelector("#titulo");
let autorInput = document.querySelector("#autor");
let paginasInput = document.querySelector("#paginas");
let leidoInput = document.querySelector("#leido");

let myLibrary = [];

let booksId = 1;

const book1 = new Book("Harry Potter", "J. K. Rowling", 1404, true);

const book2 = new Book("Harry Potter 2", "J. K. Rowling", 1124, true);

const book3 = new Book("Harry Potter 3", "J. K. Rowling", 2022, false);

myLibrary.push(book1, book2, book3);

function Book(title, author, pages, read) {
  this.id = booksId;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.readClass = "btn-secondary";

  if (this.read) {
    this.readClass = "btn-success";
  }

  this.readText = () => {
    if (this.read) {
      return "Si";
    } else {
      return "No";
    }
  };

  this.toggleRead = () => {
    this.read = !this.read;
  };

  booksId++;
}

let isValidBook = (book) => {
  if (book.title == `` || book.autor == `` || book.pages <= 0) {
    let alertDiv = document.querySelector("#alerta");

    alertDiv.innerHTML = "";

    let alerta = document.createElement("div");
    alerta.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
   <div>
      Por favor verificar todos los campos
    </div>
  </div>`;

    alertDiv.append(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  } else {
    myLibrary.push(book);
    fillGrid();

    tituloInput.value = "";
    autorInput.value = "";
    paginasInput.value = "";
    leidoInput.checked = "";
  }
};

let addBookToLibrary = (e) => {
  e.preventDefault();

  let title = tituloInput.value;
  let autor = autorInput.value;
  let pages = Number(paginasInput.value);
  let read = leidoInput.checked;

  let book = new Book(title, autor, pages, read);

  isValidBook(book);
};

newBookForm.addEventListener("submit", addBookToLibrary);

const fillGrid = () => {
  libraryTableTbody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let trEl = document.createElement("tr");

    let tdNombre = document.createElement("td");
    tdNombre.classList.add("te-de");
    let tdAutor = document.createElement("td");
    tdAutor.classList.add("te-de");
    let tdPaginas = document.createElement("td");
    tdPaginas.classList.add("te-de");
    let tdLeido = document.createElement("td");
    tdLeido.classList.add("te-de");
    let tdBtnBorrar = document.createElement("td");
    tdBtnBorrar.classList.add("te-de");

    tdNombre.innerHTML = `${myLibrary[i].title}`;
    tdAutor.innerHTML = `${myLibrary[i].author}`;
    tdPaginas.innerHTML = `${myLibrary[i].pages}`;
    // tdLeido.innerHTML = `${myLibrary[i].readText}`;

    let btnBorrar = document.createElement("button");
    btnBorrar.setAttribute("id", myLibrary[i].id);
    btnBorrar.innerHTML = `<i id="${myLibrary[i].id}" class="fa-solid fa-trash"></i> `;
    btnBorrar.classList.add("botonBorrar");

    tdBtnBorrar.append(btnBorrar);

    let btnEditar = document.createElement("button");
    btnEditar.setAttribute("id", myLibrary[i].id);
    btnEditar.innerHTML = myLibrary[i].readText();
    btnEditar.classList.add("btn");
    btnEditar.classList.add("btn-leido");
    btnEditar.classList.add(myLibrary[i].readClass);

    tdLeido.append(btnEditar);

    trEl.appendChild(tdNombre);
    trEl.appendChild(tdAutor);
    trEl.appendChild(tdPaginas);
    trEl.appendChild(tdLeido);
    trEl.appendChild(tdBtnBorrar);
    libraryTableTbody.appendChild(trEl);

    btnBorrar.addEventListener("click", (e) => {
      const resp = window.confirm("¿Estas seguro?");

      if (resp) {
        myLibrary = myLibrary.filter((book) => book.id != e.target.id);
        trEl.remove();
      }
    });

    btnEditar.addEventListener("click", (e) => {
      myLibrary.find((book) => {
        if (book.id == e.target.id) {
          book.toggleRead();

          if (book.read) {
            e.target.classList.remove("btn-success");
            e.target.classList.remove("btn-secondary");
            e.target.classList.add("btn-success");
            e.target.innerHTML = book.readText();
          } else {
            e.target.classList.remove("btn-success");
            e.target.classList.remove("btn-secondary");
            e.target.classList.add("btn-secondary");
            e.target.innerHTML = book.readText();
          }
        }
      });
    });
  }
};

fillGrid();
