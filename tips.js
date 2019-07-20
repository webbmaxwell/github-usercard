// GET PROFILE
axios.get(`https://api.github.com/users/PhilHart23`)
  .then(data => {
    console.log('Success!', data);
    const cards = document.querySelector('.cards');
    cards.appendChild(createCard(data.data));

  })
  .catch(err => {
    console.log('Error: ', err);
  })

// GET FOLLOWERS
const followersArray = [];
axios.get(`https://api.github.com/users/PhilHart23/followers`)
  .then(data => {
    console.log('Works! Here is the list of your followers: ', data.data);
    const followersData = data.data;
    followersData.forEach(followerData => {
      followersArray.push(followerData.login);
    })

    followersArray.forEach(follower => {
      axios.get(`https://api.github.com/users/${follower}`)
        .then(data => {
          console.log('Follower info: ', data.data);
          const cards2 = document.querySelector('.cards');
          cards2.appendChild(createCard(data.data));
        })
        .catch(err => {
          console.log('Could not retrieve follower info: ', err);
        })
    })

  })

  .catch(err => {
    console.log('There was a problem retrieving your list of followers: ', err);
  })

function createCard(data) {
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profilePage = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');


  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  userImg.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profilePage.innerHTML = `Profile: <a href=${data.html_url}>${data.html_url}</a>`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;


  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profilePage);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}
