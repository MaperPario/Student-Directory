/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const items_per_page = 9;
const studentList = document.querySelector('.student-list');


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Created a showPage function, displaying 9 students per page
*/
function showPage(list, page) {
   const startIndex = (page * items_per_page) - items_per_page;
   const endIndex = startIndex + items_per_page;

studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex) {
         studentList.insertAdjacentHTML("beforeend",
          `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>`);
      }
   } 
}

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
