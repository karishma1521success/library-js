let arr = [];  // empty array as of now

function issueBook() {
   console.log("button");
   var bookName = document.getElementById("book").value;
   var issuedTo = document.getElementById("issued-book-to").value;
   var id = arr.length+1;
   let time = new Date();
   let status= "not returned";

   let bookObj = {id: id, book_name:bookName, issued_to:issuedTo, time: time , status:status}
   arr.push(bookObj);

   addtable();
}

function addtable(){
   let tableBody = document.querySelector('.table-body');

   tableBody.innerHTML = "";

   let row = document.createElement('tr');
}


