import '../styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("firebase");
  form.onsubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData(form);
    console.log('login', formData.get('login'));
    console.log('password', formData.get('password'));
  };
});
