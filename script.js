
//user click on Issue Button --
//1. show theissued book in a table
//2. book status should be not returned bydefault
//3. Id of the book should be n+1
//4. issued time
//5. book's status column should be editable
//6. edit the book status
//7. returned - green color   not returned - red


const button = document.getElementById('submit');
const bookEle = document.getElementById('book');
const issuedToEle = document.getElementById('issued-book-to');
const tableBody = document.getElementById('table-body');
const arr = [];


function bookStatusChanged(event){
   // whenever we click changed to returned
   
   let editIcon = event.target;
   alert(editIcon);
   const id = editIcon.id;
   console.log(id);

}


function createTable(bookObj){
   //   create tr
   let tr = document.createElement('tr');
   //set attribute id = createRow to this tr
   tr.setAttribute("id" , "createRow");

   // create 5 td's
   let tdId = document.createElement('td');
   let tdBook = document.createElement('td');
   let tdIssued = document.createElement('td');
   let tdDate = document.createElement('td');
   let tdStatus = document.createElement('td');
   let tdStatusP = document.createElement('p');
   let tdStatusbtn = document.createElement('button');

   tdId.textContent = bookObj.id;
   tdBook.textContent = bookObj.book_name;
   tdIssued.textContent = bookObj.issued_to;
   tdDate.textContent = bookObj.issued_time;
   tdStatusP.textContent = bookObj.status;

   tdStatus.appendChild(tdStatusP); 
   tdStatus.appendChild(tdStatusbtn); 
   tdStatusbtn.innerHTML = '<i class="fas fa-edit"></i>'
    // changing color of status 
    let color = tdStatusP.textContent === "not returned" ? 'red' : 'green' ;
   tdStatusP.style.color= color;

    // <td>
    //<p>not returned</p>
    //  <button><i class="fas fa-edit"></i></button>
    //</td>
    //set attribute to not returned p
    tdStatusP.setAttribute("id", "status");
    tdStatusbtn.setAttribute('id', "btn-icon");
    tdStatusbtn.classList.add('btn-icon');
    tdStatusbtn.addEventListener('click', bookStatusChanged);

   tr.appendChild(tdId);
   tr.appendChild(tdBook);
   tr.appendChild(tdIssued);
   tr.appendChild(tdDate);
   tr.appendChild(tdStatus);

   tableBody.appendChild(tr); // updated all the td and connect to the htnl

   

   
}

function renderTablethroughArray(){
   //1. we have to traverse whole array
    while(tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild)
    } // this while loop protecting to write the already row again and again

   arr.map(function (bookObj){
      createTable(bookObj);
   })
}

//1.  clickin btn we have to update the array 
function issuedBookToUpdateArray(event){
   event.preventDefault();

   let id = arr.length + 1;
   let bookName = bookEle.value;
   let issuedName = issuedToEle.value;
   let issuedTime = Date();
   let status = "not returned";

   if(bookName == "" || issuedName == ""){
      return;
   }

   let bookObj = {id:id, book_name:bookName, issued_to: issuedName, issued_time:issuedTime, status:status};
   arr.push(bookObj);
    // here array will update the issued book details
   bookEle.value = "";
   issuedToEle.value = "";
   console.log(arr);
   renderTablethroughArray();
}

button.addEventListener('click' , issuedBookToUpdateArray);









