import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = parseInt(form.elements.delay.value, 10);
    const state = form.elements.state.value;

    createPromise(delay, state)
      .then(time => {
        iziToast.success({
          title: '✅ Success',
          message: `Fulfilled promise in ${time}ms`,
          position: 'topRight',
        });
      })
      .catch(time => {
        iziToast.error({
          title: '❌ Error',
          message: `Rejected promise in ${time}ms`,
          position: 'topRight',
        });
      });

    form.reset();
  });

  function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        state === 'fulfilled' ? resolve(delay) : reject(delay);
      }, delay);
    });
  }
});