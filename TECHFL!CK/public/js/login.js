
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

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         name,
          email, 
          password })
    });
console.log(response)
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};


const createAcc = async (req,res) => {
  document.location.replace('/createAccount')
  console.log('working');
}
document.querySelector('.login-page');
document.addEventListener('submit', login);

document.querySelector('.sign_up');
document.addEventListener('submit', signUp);

