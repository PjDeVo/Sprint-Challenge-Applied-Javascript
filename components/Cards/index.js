// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsAxiosRequest = axios.get(
  "https://lambda-times-backend.herokuapp.com/articles"
);

let cardsContainer = document.querySelector(".cards-container");

let createCardComponent = function(data) {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  let cardHeadline = document.createElement("div");
  cardHeadline.classList.add("headline");
  cardHeadline.textContent = data.headline;
  cardDiv.appendChild(cardHeadline);

  let authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  cardDiv.appendChild(authorDiv);
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");
  authorDiv.appendChild(imageContainer);
  let cardImage = document.createElement("img");
  cardImage.src = data.authorPhoto;
  imageContainer.appendChild(cardImage);

  let authorsName = document.createElement("span");
  authorDiv.appendChild(authorsName);
  authorsName.textContent = data.authorName;
  cardDiv.appendChild(authorsName);
  console.log(data);
  return cardDiv;
};

// let newAuthor = createCardComponent();
// console.log(newAuthor);

// cardsAxiosRequest.then(response => {
//   //   console.log(response.data.articles);
//   const entries = Object.entries(response.data.articles);
//   console.log(entries);
//   //   console.log(entries[0]);
//   //   console.log(entries[0][1][0]);

//   entries.forEach(entry => {
//     entry[1].forEach(article => {
//       let newCard = createCardComponent();
//     });
//   });
// });

cardsAxiosRequest
  .then(response => {
    console.log(response.data.articles);
    const entries = Object.values(response.data.articles);
    console.log(entries);
    entries.forEach(entry => {
      entry.forEach(obj => {
        let newCard = createCardComponent(obj);
        cardsContainer.appendChild(newCard);
        //   console.log(obj);
      });
    });
  })
  .catch(error => {
    console.log(error);
  });
