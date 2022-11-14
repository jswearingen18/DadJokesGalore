
const login = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#userEmail').value;
  const password = document.querySelector('#userPassword').value;
  console.log(email);
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    } 
  }
};

const signUp = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').ariaValueMax.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};


// const createAcc = async () => {
//   document.location.replace('/createAccount');

// }

const createAcc = async (req,res) => {
  document.location.replace('/createAccount')
  console.log('working');
}





// document.querySelector('.login-page');
// document.addEventListener('submit', createAcc);

const loginPage = document.querySelector('.login-page');
loginPage.addEventListener('submit', login);

document.querySelector('.createBtnForm').addEventListener('click', createAcc);

// loginBtn.addEventListener('click', login);
// createBtn.addEventListener('submit', createAcc);

// document.querySelector('.createBtn');
// document.addEventListener('submit', createAcc);


document.querySelector('.sign_up');
document.addEventListener('submit', signUp);

