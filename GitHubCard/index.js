/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

//Step1
axios.get("https://api.github.com/users/webbmaxwell")
  .then( response => {
    //Step4
    response.data.forEach( item => {
      let user = cardMaker(item);
      bigDiv.appendChild(user)
    })
    console.log(response)
  })
  .catch( err => {
    console.log("Error in retrieving data")
  })

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

const bigDiv = document.querySelector('.cards');
// bigDiv.appendChild(cardMaker(followersArray));

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

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

function cardMaker(obj) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const userImg = document.createElement('img');
  cardImg.setAttribute('src', `${obj.data.avatar_url}`);
  cardDiv.appendChild(userImg);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  cardDiv.appendChild(cardInfo);

  const nameName = document.createElement('h3');
  nameName.classList.add('name');
  nameName.innerHTML = `${obj.nameName}`;
  cardInfo.appendChild(nameName);

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.innerHTML = `${obj.data.name}`;
  cardInfo.appendChild(userName);

  const location = document.createElement('p');
  location.innerHTML = `Location: ${obj.data.location}`;
  cardInfo.appendChild(location);

  const profile = document.createElement('p');
  profile.setAttribute('href', `${obj.data.url}`)
  profile.innerHTML = `Profile: ${obj.data.url}`;
  cardInfo.appendChild(profile);

  const followers = document.createElement('p');
  followers.innerHTML = `Followers: ${obj.data.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.innerHTML = `Following: ${obj.data.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.innerHTML = `Bio: ${obj.data.bio}`;
  cardInfo.appendChild(bio);

  return

}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
