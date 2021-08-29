
// declare all variables
const image = document.getElementById( 'image' );
const title = document.getElementById( 'title' );
const details = document.getElementById( 'details' );
const userInfo = document.getElementById( 'userInfo' );
const email = document.getElementById( 'email' );
const birthday = document.getElementById( 'birthday' );
const address = document.getElementById( 'address' );
const password = document.getElementById( 'password' );
const changeUser = document.getElementById( 'change-user' );
// console.log( image, title, details, user, email, birthday, address, password, changeUser );

// store user data 
const storeUser = [];

// load user from api 
const loadUsers = async () => {
  const url = `https://randomuser.me/api/`;
  // console.log(url);
  const res = await fetch( url );
  const data = await res.json();
  storeUser.pop();
  storeUser.push( data.results[0] );
  // console.log( storeUser );
  displayUser( data.results[0] );
  return data;
}
loadUsers();

//display user data in UI
const displayUser = user => {
    // console.log( user );
    image.setAttribute('src', user.picture.large)
    title.innerText = 'Hi, my name is';
    details.innerText = ` ${ user.name.title } ${ user.name.first } ${ user.name.last }`;
};

//information tabs mouseover function
userInfo.addEventListener('mouseover', () => {
  displayUser( storeUser[0] );
});
email.addEventListener('mouseover', () => {
  title.innerText = 'My email address is';
  details.innerText = ` ${storeUser[0].email}`;
});
birthday.addEventListener('mouseover', () => {
  title.innerText = 'My birthday is';
  details.innerText = ` ${storeUser[0].dob.date.slice(0, 10)}`;
});
phone.addEventListener('mouseover', () => {
  title.innerText = 'My phone number is';
  details.innerText = ` ${storeUser[0].phone}`;
});
address.addEventListener('mouseover', () => {
  title.innerText = 'My address location is';
  details.innerText = ` ${storeUser[0].location.street.number} ${storeUser[0].location.street.name}`;
});
password.addEventListener('mouseover', () => {
  title.innerText = 'My password is';
  details.innerText = ` ${storeUser[0].login.password}`;
} );


changeUser.addEventListener( 'click', () => {
  const newUser = loadUsers();
  console.log(newUser)
} );

