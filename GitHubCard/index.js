import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const parentNode = document.querySelector(".cards");



// axios
//   .get("https://api.github.com/users/joseguevara29")
//   .then((successResponse) => {
//     // console.log(successResponse.data);
//     parentNode.append(createCardInfo(successResponse.data));
//   })
//   .catch((errorResponse) => {
//     //handle error
//     console.log(errorResponse);
//   });



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "joseguevara29"
];

followersArray.forEach((e) => {
  axios
    .get(`https://api.github.com/users/${e}`)
    .then((successResponse) => {
      console.log(successResponse.data);
      parentNode.append(instructerCard(successResponse.data));
    })
    .catch((errorResponse) => {
      //handle error
      console.log(errorResponse);
    });
  return e;
});


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function instructerCard(arr) {
  const img = document.createElement("img");
  const div = document.createElement("div");
  const h3 = document.createElement("h3"); //user's name
  const p1 = document.createElement("p"); //users username
  const p2 = document.createElement("p"); //users location
  const p3 = document.createElement("p"); //address to users github page
  const p4 = document.createElement("p"); //users followers count
  const p5 = document.createElement("p"); //users following count
  const p6 = document.createElement("p"); //users bio

  h3.textContent = arr.name;
  p1.textContent = arr.login;
  img.src = arr.avatar_url;
  p2.textContent = arr.location;
  p3.textContent = arr.blog;
  p4.textContent = arr.followers;
  p5.textContent = arr.following;
  p6.textContent = arr.bio;

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(p4);
  div.appendChild(p5);
  div.appendChild(p6);

  return div;
}
instructerCard(followersArray);



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
