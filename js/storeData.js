const inputFields = document.querySelectorAll('.input-fields');

const getLocalDataValue = () => {
  if (localStorage.getItem('form-data') !== null) {
    return JSON.parse(localStorage.getItem('form-data'));
  }
  return false;
};

const localData = getLocalDataValue();

const formDataObj = {
  name: '',
  email: '',
  message: '',
};

const dataStoreLocal = (ev) => {
  const { target } = ev;
  ev.preventDefault();
  const value = target.value.trim();
  if (target.name === 'name') {
    formDataObj.name = value;
  }
  if (target.name === 'email') {
    formDataObj.email = value;
  }
  if (target.name === 'message') {
    formDataObj.message = value;
  }
  return localStorage.setItem('form-data', JSON.stringify(formDataObj));
};

inputFields.forEach((item) => item.addEventListener('input', dataStoreLocal));

document.getElementById('input-name').value = formDataObj.name;
document.getElementById('input-email').value = formDataObj.email;
document.getElementById('input-message').value = formDataObj.message;