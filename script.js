let arr = [];  // empty array as of now
let n = 0;   //no.of books issued is 0
console.log('hello');

function issueBook(){
   console.log("button");
   var bookName = document.getElementById("book").value;
   var issuedTo = document.getElementById("issued-book-to").value;
   let time = new Date();

   let bookObj = {id: n+1, book_name:bookName, issued_to:issuedTo, time: time , status:"not returned"}
   arr.push(bookObj);
   n++;
}

function print(){
   console.log("helo");
}

console.log(arr);
