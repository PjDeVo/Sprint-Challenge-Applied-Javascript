// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const axiosPromiseForSprint = axios.get(
  "https://lambda-times-backend.herokuapp.com/topics"
);

let createTabFunction = function(string) {
  let tabDivForSprint = document.createElement("div");
  tabDivForSprint.classList.add("tab");
  tabDivForSprint.textContent = string;
  return tabDivForSprint;
};

let topicsContainer = document.querySelector(".topics");
console.log(topicsContainer);
axiosPromiseForSprint
  .then(response => {
    // console.log("here is the response data", response);
    response.data.topics.forEach(topic => {
      topicsContainer.appendChild(createTabFunction(topic));
    });
  })
  .catch(error => {
    console.log(error);
  });
