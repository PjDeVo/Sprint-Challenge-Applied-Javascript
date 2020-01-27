// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  let headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  let dateElement = document.createElement("span");
  dateElement.classList.add("date");
  let headerTitle = document.createElement("h1");
  let tempTag = document.createElement("span");
  tempTag.classList.add("span");
  headerDiv.appendChild(dateElement);
  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(tempTag);

  return headerDiv;
}

let newElementForSprint = Header();

console.log(newElementForSprint);

let headerContainer = document.querySelector(".header-container");
console.log(headerContainer);

headerContainer.appendChild(newElementForSprint);
