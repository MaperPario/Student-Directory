/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Declaring global constants to ensure usability throughout the program
*/
const itemsPerPage = 9;
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector ('.link-list');
const header = document.querySelector('.header');

function getSearchInput() {
   return document.getElementById('search');
}

function search(searchString) {
   let searchResults = [];
   
   for (let i = 0; i < data.length; i++) {
      const student = data[i];
      const lowerFirstName = student.name.first.toLowerCase();
      const lowerLastName = student.name.last.toLowerCase();
      if (lowerFirstName.indexOf(searchString) > -1 || lowerLastName.indexOf(searchString) > -1) {
         searchResults.push(student);
      }
   }
   showPage(searchResults, 1);
   addPagination(searchResults);
}

function addSearchField() {
   header.insertAdjacentHTML('beforeend', `
      <label for="search" class="student-search">
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>`);
   const searchInput = getSearchInput();
      searchInput.addEventListener('keyup', (e) => {
         search(searchInput.value.toLowerCase());
      });
}
/*
Displays a page of items from list with length of itemsPerPage
*/
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = Math.min(startIndex + itemsPerPage, list.length);

   studentList.innerHTML = '';

   // dynamically adding the students information and only displaying itemsPerPage
   for (let i = startIndex; i < endIndex; i++) {
      const student = list[i];
      const studentHTML = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
               <h3>${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
         </li>`;

      studentList.insertAdjacentHTML("beforeend", studentHTML);
   } 
   // If no results from search, page displays "No Results Found"
   const noResultsMessage = document.querySelector('.no-results');
   if (!list.length) {
      noResultsMessage.className = 'no-results';
   } else {
      noResultsMessage.className = 'hidden no-results';
   }
}

/*
addPagination function created for pages to dynamically be added to the DOM
and load the proper information when clicked.
*/
function addPagination(list) {
   const numOfPages = Math.ceil(list.length / itemsPerPage);

   linkList.innerHTML = ''; // setting the HTML for the pages to nothing

   // adding the proper HTML to the DOM for the buttons, including a number within the button.
   for (let pageNumber = 1; pageNumber <= numOfPages; pageNumber++) {
      linkList.insertAdjacentHTML("beforeend", `
         <li>
            <button type="button" class="${pageNumber === 1 ? 'active' : ''}">${pageNumber}</button>
         </li>
      `);
   }
   // adding click event to 
   linkList.addEventListener('click', (e) => {
      const clickedPageButton = e.target;
      if (clickedPageButton.tagName === 'BUTTON') {
         const activePageButton = document.querySelector('.active');
         activePageButton.className = '';

         clickedPageButton.className = 'active';
         showPage(list, clickedPageButton.textContent);
      }
   });
}

//Calling the Functions
addPagination(data);
showPage(data, 1);
addSearchField();