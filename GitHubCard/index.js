/* Step 1: using axios, send a GET request to the following URL
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

// let bigDiv = document.querySelector('.cards');
// console.log(bigDiv);
// bigDiv.appendChild(cardMaker);

//Step1
axios.get("https://api.github.com/users/webbmaxwell")
  .then( response => {
    let userData = response.data;
    console.log(userData);
    let cardContainer = document.querySelector('.cards');
    cardContainer.appendChild(cardMaker(userData));

    followersArray.forEach(follower => {
      axios.get(`https://api.github.com/users/${follower}`)
      .then(response => {
        let newData = response.data;
        cardContainer.appendChild(cardMaker(newData));
      })
    })
  })
  .catch( err => {
    console.log(err)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
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
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

//Step3
function cardMaker(obj) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const userImg = document.createElement('img');
  userImg.setAttribute('src', `${obj.avatar_url}`);
  cardDiv.appendChild(userImg);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  cardDiv.appendChild(cardInfo);

  const nameName = document.createElement('h3');
  nameName.classList.add('name');
  nameName.innerHTML = `${obj.name}`;
  cardInfo.appendChild(nameName);

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.innerHTML = `${obj.name}`;
  cardInfo.appendChild(userName);

  const location = document.createElement('p');
  location.innerHTML = `Location: ${obj.location}`;
  cardInfo.appendChild(location);

  const profile = document.createElement('p');
  profile.setAttribute('href', `${obj.url}`)
  profile.innerHTML = `Profile: ${obj.url}`;
  cardInfo.appendChild(profile);

  const followers = document.createElement('p');
  followers.innerHTML = `Followers: ${obj.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.innerHTML = `Following: ${obj.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.innerHTML = `Bio: ${obj.bio}`;
  cardInfo.appendChild(bio);

  return cardDiv
}

// Step4
// const bigDiv = document.querySelector('.cards');
// bigDiv.appendChild(cardMaker(followersArray));

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
