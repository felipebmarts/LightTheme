const chk = document.querySelector('#chk');
const login = document.querySelector('.login');
const signup = document.querySelector('.signup');

chk.addEventListener('change', () => {
  if (chk.checked) {
    login.style.transform = 'translateY(-500px)';
    signup.style.transform = 'translateY(-180px)';
  } else {
    login.style.transform = 'translateY(-180px)';
    signup.style.transform = 'translateY(-500px)';
  }
});